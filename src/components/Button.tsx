import React from 'react'; 
import { Button, Text } from 'react-native';
import Default from '../Styles/Default';

export default (props: any) => {

    function execute(){
        console.warn("Button pressed.")
    }

  return (
    <>
        <Button
            title='Execute'
            onPress={execute}
        />

        <Button
            title='Execute'
            onPress={function(){console.warn("Buton pressed 2.")}}
        />

        <Button
            title='Execute'
            onPress={()=> console.warn("Pressed Button 3.")}
        />
    </> 
  )
}