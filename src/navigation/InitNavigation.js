import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import Style from '../style/Style';
import Container from '../components/Container';
import PotosiLogo from '../components/PotosiLogo';
import GLOBAL_STR from '../constants/globalStr';
import useGlobal from '../hooks/useGlobal';
import ROUTES from './routes';
import getLocationPermit from '../utils/permission/locationPermit';
import usePermission from '../hooks/usePermission';

const InitNavigation = () => {
    const { isOnBoardingComplete } = useGlobal();
    const { changeLocationPermit } = usePermission();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        const initPermission = async () => {
            const locationPermit = await getLocationPermit();
            changeLocationPermit(locationPermit);
        };
        const initTimeout = setTimeout(() => {
            initPermission().finally(() => {
                if (isOnBoardingComplete.current) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: ROUTES.appNavigation }],
                    });
                } else {
                    navigation.navigate(ROUTES.onBoardingNavigation);
                }
            });
        }, 1000);
        return () => {
            clearTimeout(initTimeout);
        };
    }, []);

    return (
        <Container style={Style.jc_c}>
            <Text
                style={[
                    Style.headline_large,
                    Style.c_primary,
                    Style.ta_c,
                    Style.mb_6,
                ]}>
                {GLOBAL_STR.appTitle}
            </Text>
            <PotosiLogo />
        </Container>
    );
};

export default InitNavigation;
