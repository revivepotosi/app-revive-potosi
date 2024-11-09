import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import {
    FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firestore();

export default firebase;
