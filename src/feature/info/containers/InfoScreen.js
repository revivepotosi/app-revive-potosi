import React, { useEffect, useState } from 'react';
import { Text } from "@ui-kitten/components"
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import Style from '../../../style/Style';
import { View} from 'react-native';


const InfoScreen = () => {
    /*const [servicios_guia, setservicios_guia] = useState([]);
    
    async function loadDataInfo() {        
        
        const listarinfos = firestore().collection('cateservicios_guia').onSnapshot(querySnapshot =>{
            
            const servicios_guia = []
            querySnapshot.forEach(DocumentSnapshot =>{
                servicios_guia.push({
                    ...DocumentSnapshot.data,
                    key: DocumentSnapshot.id
                })
            })
            setservicios_guia(servicios_guia)
        })
        return ()=> listarinfos()    
    }
    useEffect(() =>{
        loadDataCategory()
    }, [])
    function renderINfoitem({item}){
        return{
            <View>
                <Text>{ item.nombre } </Text>
                <Text>{ item.decripcion } </Text>
                <Text>{ item.direccion } </Text>
                <Text>{ item.contacto } </Text>
            </View>
        }
    }*/
    return (
        <Text>Info</Text>
        /*<FlatList
        data={ servicios_guia}
        renderItem={ listarinfos}
        keyExtractor={item=>item.key}
        />*/
    );
};

export default InfoScreen;
