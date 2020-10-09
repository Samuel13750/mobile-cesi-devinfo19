import React, { Component } from 'react';
import { TextInput, SafeAreaView, StyleSheet, ScrollView, Text, Button, Alert } from 'react-native';
// @ts-ignore
//import R from 'res/R';
//import crashlytics from '@react-native-firebase/crashlytics';
//import AsyncStorage from '@react-native-community/async-storage';

class App extends React.Component {

  state = {
    list: [],
    article: '',
    item: 0
  }

  onPress = () => {
    const list = this.state.list;
    const article = this.state.article;
    list.push(article)
    this.setState({ list })
    console.log(list);
    //AsyncStorage.setItem('@list', JSON.stringify(list));
  }
  //const Item = ({ list }) => ();

  //const renderItem = ({ item }) => (<Item title={item.title} /> );

  valitedText = () => {
    
  }


  functioncombined = () => {
    this.onPress();
    this.valitedText();
  }
/** charge le tableau list issu de la saisie de l'input text 
 * {this.state.list.map(e => <Text style={styles.tdl2}>{e}</Text>)}
*/
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>VOTRE LISTE DES COURSES 🍕 </Text>
          <TextInput style={styles.tdl}
            onChangeText={(data) => this.setState({ article: data })}
            value={this.state.article}
            placeholder="saisir votre nom d'article💃" />
          < Button color="#572710" title='Ajouter' onPress={this.functioncombined} />
          
          {this.state.list.map(e => <Text style={styles.tdl2}>{e}</Text>)}

        </ScrollView>
      </SafeAreaView>
    )
  };
};

//note de code sup d'un article
//const i=list.indexof(value)
//del list[i]

//lits.map(element => text {e}. . . )

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#202020',
    //backgroundColor: R.colors.backdroundContainer,

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
  },

  tdl2: {
    marginTop: 6,
    marginBottom: 6,
    width: '100%',
    backgroundColor: '#F99F76',
    borderRadius: 5,
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  }

});


export default App;
