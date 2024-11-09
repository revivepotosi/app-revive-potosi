import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import collections from '../../../constants/collections';

const useHomeScreen = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [museums, setMuseums] = useState([]);

    useEffect(() => {
        const init = async () => {
            const querySnapshot = await firestore()
                .collection(collections.category)
                .get();
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(data);

            const querySnapshot2 = await firestore()
                .collection(collections.historicCenter)
                .get();
            const data2 = querySnapshot2.docs.map(doc2 => ({
                id: doc2.id,
                ...doc2.data(),
            }));
            setMuseums(data2);
        };

        init().finally(() => setLoading(false));
    }, []);

    return { loading, categories, museums };
};

export default useHomeScreen;
