import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import  Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const FONT_DEFAULT = 'open-sans-bold';

export default function App() {
  const [loaded] = useFonts({
    'open-sans-regular':  require('./assets/fonts/static/OpenSans/OpenSans-Regular.ttf'), 
    [FONT_DEFAULT]:         require('./assets/fonts/static/OpenSans/OpenSans-Bold.ttf'), 
  })
  const [confirmed, setConfirmed]             = useState()

  if(!loaded) return <AppLoading />

  // si el número enviado es 25 gana  
  const screen = (confirmed == 25)  ? <View style={styles.ViewTitle}><Text style={styles.title}>A jugar!!</Text></View>
    : <StartGameScreen onStartGame={setConfirmed} />

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  }
});
