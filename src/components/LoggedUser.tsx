import React from "react";
import { Text } from "react-native";
import Default from "../Styles/Default";
import If from "./If";

export default (props: any) => {

    const user = props.usuario || {}

    return (
        <>
            <If valido={user && user.name && user.email}>
            <Text style={Default.bigText}>
                Usuário Logado!
            </Text>

            <Text style={Default.bigText}>
                {user.nome} - {user.email}
            </Text>
            </If>
        </>
    )
}