import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
//import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage'; 
import firestore from '@react-native-firebase/firestore';


    const categoryDummy = [
        {
            id: 1,
            name: {
                es: 'Museos',
                en: 'Museums',
            }
        },
        {
            id: 2,
            name: {
                es: 'Iglesias',
                en: 'Churches',
            }
        },
        {
            id: 3,
            name: {
                es: 'parques',
                en: 'Park',
            }
        },
        
    ];
    
const placesDummy = [
    {
        id: 1,
        name: 'Santa Teresa',
        subtitle: {
            es: 'Museos',
            en: 'Museums',
        }
    },
    /*{
        id: 2,
        name: 'San Lorenzo de Carangas',
        subtitle: {
            es: 'Iglesias',
            en: 'Churches',
        }
    },
    {
        id: 3,
        name: 'Paseo Boulevar',
        subtitle: {
            es: 'Lugares',
            en: 'Places',
        }
    },*/
];

export { categoryDummy, placesDummy };
