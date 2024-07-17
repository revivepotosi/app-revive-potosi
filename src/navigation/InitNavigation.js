import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import Style from '../style/Style';
import Container from '../components/Container';
import PotosiLogo from '../components/PotosiLogo';
import GLOBAL_STR from '../constants/globalStr';
import useGlobal from '../hooks/useGlobal';
import ROUTES from './routes';

const InitNavigation = () => {
    const { isOnBoardingComplete } = useGlobal();
    const navigation = useNavigation();

    useEffect(() => {
        const initTimeout = setTimeout(() => {
            if (isOnBoardingComplete.current) {
                navigation.navigate(ROUTES.appNavigation);
            } else {
                navigation.navigate(ROUTES.onBoardingNavigation);
            }
        }, 1000);
        return () => {
            clearTimeout(initTimeout);
        };
    }, []);

    return (
        <Container style={Style.jc_c}>
            <Text style={[Style.headline_large, Style.c_primary, Style.ta_c, Style.mb_6]}>
                {GLOBAL_STR.appTitle}
            </Text>
            <PotosiLogo />
        </Container>  
    );
};

export default InitNavigation;
