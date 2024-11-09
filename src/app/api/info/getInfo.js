import firestore from '@react-native-firebase/firestore';
import collections from '../../../constants/collections';

const getInfo = async () => {
    const querySnapshot = await firestore().collection(collections.info).get();
    const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
    }));
    return data[0] ?? null;
};

export default getInfo;
