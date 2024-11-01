import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { db } from '../../../app/firebase';

const useHomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [museums, setMuseums] = useState([]);
  useEffect(() => {
    const init = async () => {    
      const querySnapshot = await getDocs(collection(db, 'category'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(data);
      const querySnapshot2 = await getDocs(collection(db, 'historic-center'));      
      const data2 = querySnapshot2.docs.map((doc2) => ({
        id: doc2.id,
        ...doc2.data(),
      }));      
      setMuseums(data2);
      console.log("........." , data2);      
    };    
    init();    
  }, []);
  return {categories, museums};
}

export default useHomeScreen;
