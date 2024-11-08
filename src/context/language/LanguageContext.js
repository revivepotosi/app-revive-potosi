import { createContext } from 'react';

export const initialState = {
    languageCode: 'ES',
    changeLanguage: (languageCode) => languageCode,
};

const LanguageContext = createContext(initialState);

export default LanguageContext;
