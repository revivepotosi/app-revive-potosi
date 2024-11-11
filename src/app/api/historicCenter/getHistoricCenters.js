import firestore from '@react-native-firebase/firestore';
import collections from '../../../constants/collections';

const getHistoricCenters = async () => {
    const queryHistoricCenters = await firestore()
        .collection(collections.historicCenter)
        .get();
    const historicCenters = queryHistoricCenters.docs.map(doc2 => ({
        id: doc2.id,
        ...doc2.data(),
    }));
    return historicCenters;
};

export default getHistoricCenters;
