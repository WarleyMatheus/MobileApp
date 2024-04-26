import React from "react";
import { Text } from "react-native";
import Default from "../Styles/Default";

function getResult(num: number){
    return num % 2 == 0 ? 'Par!' :'Ímpar!';
}

export default (props: {number: number;}) => (
            <Text style={Default.ex}>{getResult(props.number)}</Text>
)