import React, { Component } from 'react';
import { TextInput, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';
// @ts-ignore
//import R from '..res/R';
import crashlytics from '@react-native-firebase/crashlytics';


class App extends React.Component {

  state = {
    hasText: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>VOTRE LISTE DES COURSES 🍕 </Text>
        <TextInput style={styles.tdl} placeholder="saisir votre nom d'article" />
        < Button color="#080300" title='Ajouter' onPress={() => 'Button with adjusted color pressed'} />
      </View>
    )
  };
};


const styles = StyleSheet.create({
  container: {
    color: 'black',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#202020',
  },

  text: {
    width: '95%',
    marginTop: 4,
    color: 'white',
    fontSize: 20,
    backgroundColor: '#AA5E39',
    borderRadius: 5,
    textAlign: 'center'
  },

  tdl: {
    marginTop: 6,
    marginBottom: 6,
    width: '95%',
    backgroundColor: '#FF884F',
    borderRadius: 5,
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  }
});


export default App;
