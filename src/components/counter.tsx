import React, { useState } from "react";
import { Button, Text } from 'react-native';
import Default from "../Styles/Default";

export default (props:any) => {

    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value +1)
    }

    const decrement = () => {
        if(value > 0){
            setValue(value-1)
        }
        else{
            console.warn("Operação inválida: não é possível subtrair 1 de 0.")
        }
    }

    return (

        <>
            <Text style={Default.bigText}> {value} </Text>
            <Button
                title="+"
                onPress={increment}
            />
            <Button 
                title="-"
                onPress={decrement}
            />
        </>
    )
}