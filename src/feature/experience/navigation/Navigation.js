import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './routes';
import APP_ROUTES from './../../../navigation/routes';
import Style from '../../../style/Style';
import useLanguage from '../../../hooks/useLanguage';
import HeaderLeft from '../../../components/HeaderLeft';
import AppLogo from '../../../components/AppLogo';
import { useNavigation } from '@react-navigation/native';
import NAVIGATION_TITLE_STR from '../../home/navigation/NavigationTitleStr';
import { Text } from '@ui-kitten/components';
import HOME_ROUTES from '../../home/navigation/routes';
import ExperienceScreen from '../containers/ExperienceScreen';

const Stack = createStackNavigator();

const ExperienceNavigation = () => {
    const { languageCode } = useLanguage();
    const navigation = useNavigation();
    const isIos = Platform.OS === 'ios';
    const goBack = () => {
        navigation.navigate(APP_ROUTES.appNavigation, {
            screen: HOME_ROUTES.home,
        });
    };

    const renderLeft = () => <HeaderLeft onPress={goBack}/>;
    const renderTitle = (title) => (
        <Text style={[Style.c_white, Style.title_large, isIos && Style.mb_4]}>
            {title}
        </Text>
    );
    const renderRight = () => <AppLogo style={[Style.mr_4, Style.as_fe]} />;

    return (
        <Stack.Navigator
            initialRouteName={ROUTES.experience}
            screenOptions={{
                gestureEnabled: false,
                headerStyle: Style.bg_primary,
            }}
        >
            <Stack.Screen
                name={ROUTES.experience}
                component={ExperienceScreen}
                options={{
                    headerTitle: () => renderTitle(NAVIGATION_TITLE_STR.experience[languageCode]),
                    headerLeft: renderLeft,
                    headerRight: renderRight,
                    headerRightContainerStyle: isIos ? Style.jc_fs : Style.jc_c,
                }}
            />
        </Stack.Navigator>
    );
};

export default ExperienceNavigation;
