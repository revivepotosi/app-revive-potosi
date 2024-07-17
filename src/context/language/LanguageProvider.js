import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageContext from './LanguageContext';

const LanguageProvider = (props) => {
    const { children } = props;
    const [languageCode, setLanguageCode] = useState('es');

    useEffect(() => {
        AsyncStorage.getItem('languageCode').then(
            (value) => {
                if (value) setLanguageCode(value);
            }
        )
    }, []);

    const changeLanguage = (languageCode) => {
        setLanguageCode(languageCode);
        AsyncStorage.setItem('languageCode', languageCode);
    };

    const value = {
        languageCode,
        changeLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
};

export default LanguageProvider;
