import { createContext } from 'react';

export const initialState = {
    isOnBoardingComplete: false,
    completeOnBoarding: () => null,
    cleanOnBoarding: () => null,
};

const GlobalContext = createContext(initialState);

export default GlobalContext;
