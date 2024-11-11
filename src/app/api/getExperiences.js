import firestore from '@react-native-firebase/firestore';
import collections from '../../constants/collections';

const getExperiences = async historicCenterID => {
    const querySnapshot = await firestore()
        .collection(collections.experience)
        .where('historicCenterID', '==', historicCenterID)
        .get();
    const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
};

export default getExperiences;
