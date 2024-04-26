import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Simple from "./components/Simple";
import Frag from "./components/Frag";
import ParImpar from "./components/ParImpar";
import Family from "./components/relationship/Family";
import Member from "./components/relationship/Member";
import LoggedUser from "./components/LoggedUser";
import Button from "./components/Button";

export default class App extends Component {
  render(){
    
    return(
      <View style={styles.container}>
        {/*<Text style={styles.fonte}>Olá Mundo</Text>
        <Simple text="Simples!"/>*/}
        {/*<Frag title="Título" subTitle="Sub título." />*/}
        {/*<ParImpar number={10}/>*/}
        {/*<Family>
          <Member name="Julia" surname="Silva" name2="Ana" surname2="Clara" />
        </Family>*/}
        {/* <LoggedUser user={ {"nome":"teste" , email:"teste@teste.com"} }/> */}
        <Button />
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