import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from '../../componentes/Texto';


import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Topo from './componentes/Topo';



export default function cesta({topo, detalhes, itens}){
    return <>
    <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent= {() => {
               return <>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                     </View>

                </>

            }}
    /> 
    
   
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
   

});