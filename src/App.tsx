import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Simple from "./components/Simple";

export default class App extends Component {
  render(){
    
    return(
      <View style={styles.container}>
        <Text style={styles.fonte}>Olá Mundo</Text>
        <Simple text="Simples!"/>
      </View>
    );

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonte: {
    fontSize: 40
  }
})