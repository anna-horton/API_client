import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [anectod, setAnectod] = useState('')
  function getAn(){
      fetch('https://icanhazdadjoke.com/slack').then(res => res.json()).then(res => {
        setAnectod(res.attachments[0].text)
        console.log(res.attachments[0].text)
      })

  }
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>ANECTOD</Text>
      </View>
      <Text style={styles.text}></Text>
      <StatusBar style="auto" />
      <Button title="Get anectod" onPress={getAn}/>
      {anectod ? <Text style={styles.text}>Ваш анекдот: {anectod}</Text> :<Text></Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6aedff',
  },

  navbarText: {
    fontSize: 20,
  },

  TextIn: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 25,
  },

  text: {
    marginTop: 15,
    marginLeft: 25,
    fontSize: 20,
  },
  
  container: {},
});
