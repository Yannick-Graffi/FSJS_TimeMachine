import {View, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {

    return (
      <View>
        <TextInput 
            placeholder='Adresse E-mail'
            keyboardType='email-address'/>
        <TextInput 
            placeholder='Mot de passe'
            keyboardType='visible-password'
        />
        <Button 
            title='Connexion'
            onPress={()=> navigation.navigate('Time Machine')}
        />
      </View>
    )
}