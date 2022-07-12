import {StyleSheet, View, Text } from "react-native";


export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Application permettant de voir dans les archives d'internet ce à quoi ressemblait les sites à une date donnée</Text>
            <Text style={styles.endText}>réalisée dans le cadre de ma formation FullStack JS  Kodynéo</Text>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainText:{
        flex:10,
        fontSize:20,
        margin:20

    },
    endText:{
        flex:1,
        textAlign:'center'

    }
  });
