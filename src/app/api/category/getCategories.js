import firestore from '@react-native-firebase/firestore';
import collections from '../../../constants/collections';

const getCategories = async () => {
    const queryCategories = await firestore()
        .collection(collections.category)
        .get();
    const categories = queryCategories.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return categories;
};

export default getCategories;
