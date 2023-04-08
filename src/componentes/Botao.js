import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';
export default function Botao ({ botao, onPress, style }){
    return<>
        <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}


const estilos = {
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
}