import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
//import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage'; 
import firestore from '@react-native-firebase/firestore';


    const categoryDummy = [
        {
            id: 1,
            name: {
                ES: 'Museos',
                EN: 'Museums',
            }
        },
        {
            id: 2,
            name: {
                ES: 'Iglesias',
                EN: 'Churches',
            }
        },
        {
            id: 3,
            name: {
                ES: 'parques',
                EN: 'Park',
            }
        },
        
    ];
    
const placesDummy = [
    {
        id: 1,
        name: 'Santa Teresa',
        subtitle: {
            ES: 'Museos',
            EN: 'Museums',
        }
    },
    /*{
        id: 2,
        name: 'San Lorenzo de Carangas',
        subtitle: {
            ES: 'Iglesias',
            EN: 'Churches',
        }
    },
    {
        id: 3,
        name: 'Paseo Boulevar',
        subtitle: {
            ES: 'Lugares',
            EN: 'Places',
        }
    },*/
];

export { categoryDummy, placesDummy };
