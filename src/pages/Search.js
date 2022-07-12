import { useState } from "react";
import { Text, View, Button, TextInput} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Search({navigation}) {
    const [date, setDate] = useState(new Date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false)

    const [websiteInput, setWebsiteInput] = useState('')

    const dateArray = date.toISOString().split('T') // split the ISO format to seperate date and time in an array

    // Set the date picker //

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };

    // handling the user's input //

    const handleWebsiteInput = (e) => {
        setWebsiteInput(e)
    }

    // fetching the wayback API to get the website url with the user's choices

    const getWebsite = async () => {
        console.log(websiteInput);
        const timestamp = dateArray[0].split('-').join('') + "" + dateArray[1].substring(0, 5).replace(':','') // define timestamp to be understable by the APi with the YYYYMMYYHHMM format
 
        return fetch(
          `http://archive.org/wayback/available?url=${websiteInput}&timestamp=${timestamp}`
        )
          .then((response) => response.json())
          .then(async (responseObject) => {
            await AsyncStorage.setItem(
                "url",
                responseObject.archived_snapshots.closest.url
            )
            
            let answeredUrl = await AsyncStorage.getItem("url")

            navigation.navigate('Prévisualisation', {
                url: answeredUrl})
          })
          .catch((error) => {
            console.error(error);
          });
      };


    return (
        <View>
            <TextInput 
                placeholder="adresse du site recherché"
                onChangeText={handleWebsiteInput}
            />
            <View>
                <Button onPress={showDatepicker} title="Date" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="Heure" />
            </View>
            <View>
                <Text>Date : {date.toLocaleDateString("fr-FR")}</Text>
                <Text>Heure : {date.toLocaleTimeString("fr-FR")}</Text>
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}
            <Button onPress={getWebsite} title="Valider" />
        </View>
    ); 
}
