import React from "react";
import { Text } from "react-native";
import Member from "./Member";
import Default from "../../Styles/Default";

interface FamiliaProps {
    membros: { nome: string; sobreNome: string } [];    
}
 function getMembros(registros: FamiliaProps) {
    const membrosComponentes = [];

    for (let i = 0; i < registros.membros.length; i++) {
        const membro = registros.membros[i];
        membrosComponentes.push(
            <Member key={i} nome={membro.nome} sobreNome={membro.sobreNome} />
        
        );
    }
    return membrosComponentes;
 }
 export default (props: FamiliaProps)  => (
    <>
        <Text style={Default.bigText}>Membros da Familia</Text>
        {getMembros(props)}
    </>
 )