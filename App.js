import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [sqrtNumber, setSqrtNumber] = useState('')
  const [userInput, onUserInput] = useState('')
  function count(){
    console.log(sqrtNumber)
    let a = Number(userInput)
    a = Math.sqrt(a)
    setSqrtNumber(a.toString())
    
    //onUserInput(userInput)
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>SQRT</Text>
      </View>
      <Text style={styles.text}>Write smt</Text>
      <TextInput keyboardType="numeric" value={userInput} onChangeText={onUserInput} style={styles.TextIn}/>
      <StatusBar style="auto" />
      <Button title="Count" onPress={count}/>
      {sqrtNumber ? <Text style={styles.text}>Ваш квадратный корень: {sqrtNumber}</Text> :<Text></Text>}
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
