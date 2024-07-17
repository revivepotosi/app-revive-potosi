import { useContext } from 'react';
import LanguageContext from '../context/language/LanguageContext';

const useLanguage = () => {
    const context = useContext(LanguageContext);
    return { ...context };
};

export default useLanguage;
