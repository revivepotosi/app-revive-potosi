import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { db } from '../../../app/firebase';
import collections from '../../../constants/collections';

const useHomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [museums, setMuseums] = useState([]);
  useEffect(() => {
    const init = async () => {
      const querySnapshot = await getDocs(collection(db, collections.category));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(data);
      const querySnapshot2 = await getDocs(collection(db, collections.historicCenter));      
      const data2 = querySnapshot2.docs.map((doc2) => ({
        id: doc2.id,
        ...doc2.data(),
      }));      
      setMuseums(data2);
    };    
    init().finally(() => setLoading(false));    
  }, []);
  return { loading, categories, museums };
}

export default useHomeScreen;
