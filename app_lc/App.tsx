import React, { Component } from 'react';
import { TextInput, SafeAreaView, StyleSheet, ScrollView, FlatList, Text, StatusBar, Button, Alert, TouchableNativeFeedback } from 'react-native';
// @ts-ignore
//import R from '..res/R';
import crashlytics from '@react-native-firebase/crashlytics';


class App extends React.Component {

  state = {
    list: [],
    article: ''
  }

  onPress = () => {
    const list = this.state.list;
    const article = this.state.article;
    list.push(article)
    this.setState({ list })
    console.log(list);

  }
  //const Item = ({ list }) => ();

  //const renderItem = ({ item }) => (<Item title={item.title} /> );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>VOTRE LISTE DES COURSES 🍕 </Text>
          <TextInput style={styles.tdl}
            onChangeText={(data) => this.setState({ article: data })}
            value={this.state.article}
            placeholder="saisir votre nom d'article💃🔎" />
          < Button color="#572710" title='Ajouter' onPress={this.onPress} />
        </ScrollView>

      </SafeAreaView>
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
  scrollView: {
    position: "absolute",
    width: "100%",
    height: "100%",

  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#607D8B",

  },

  text: {
    width: '100%',
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
    width: '100%',
    backgroundColor: '#FF884F',
    borderRadius: 5,
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  }
});


export default App;
