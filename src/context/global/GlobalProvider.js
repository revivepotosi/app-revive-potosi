import { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalContext from './GlobalContext';

const GlobalProvider = (props) => {
    const { children } = props;
    const isOnBoardingComplete = useRef(false);

    useEffect(() => {
        AsyncStorage.getItem('isOnBoardingComplete').then(
            (value) => {
                if (value) {
                    isOnBoardingComplete.current = JSON.parse(value)
                };
            }
        )
    }, []);

    const completeOnBoarding = () => {
        isOnBoardingComplete.current = true;
        AsyncStorage.setItem('isOnBoardingComplete', JSON.stringify(true));
    };

    const cleanOnBoarding = () => {
        isOnBoardingComplete.current = false;
        AsyncStorage.setItem('isOnBoardingComplete', JSON.stringify(false));
    };

    const value = {
        isOnBoardingComplete,
        completeOnBoarding,
        cleanOnBoarding
    };

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    );
};

export default GlobalProvider;
