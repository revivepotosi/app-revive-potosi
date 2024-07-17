import { createContext } from 'react';

export const initialState = {
    languageCode: 'es',
    changeLanguage: (languageCode) => languageCode,
};

const LanguageContext = createContext(initialState);

export default LanguageContext;
