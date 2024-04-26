import React from "react";
import { Text } from "react-native";
import Default from "../Styles/Default";

export default (props:any) => (
    <>
        <Text style={Default.bigText}>{props.title}</Text>
        <Text>{props.subTitle}</Text>
    </>
)