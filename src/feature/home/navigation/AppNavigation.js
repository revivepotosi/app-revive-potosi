import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getCurrentScreenName } from '../../../navigation/navigationService';
import ROUTES from './routes';
import HomeScreen from '../containers/HomeScreen';
import InfoScreen from '../../info/containers/InfoScreen';
import SettingScreen from '../../settings/containers/SettingScreen';
import BottomTabBar from '../../../components/BottomTabBar';
import Style from '../../../style/Style';
import { Text } from '@ui-kitten/components';
import useLanguage from '../../../hooks/useLanguage';
import NAVIGATION_TITLE_STR from './NavigationTitleStr';
import AppLogo from '../../../components/AppLogo';
import HeaderLeft from '../../../components/HeaderLeft';
import ExploreScreen from '../../explore/containers/ExploreScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    const { languageCode } = useLanguage();
    const isIos = Platform.OS === 'ios';
    const navigation = useNavigation();

    const goBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate(ROUTES.home);
        }
    };

    const renderTabBar = (props) => <BottomTabBar {...props} />;
    const renderLeft = () => <HeaderLeft onPress={goBack} />;
    const renderTitle = (title) => (
        <Text style={[Style.c_white, Style.title_large, isIos && Style.mb_4]}>
            {title}
        </Text>
    );
    const renderRight = () => <AppLogo style={[Style.mr_4, Style.as_fe]} />;
    return (
        <Tab.Navigator
            tabBar={renderTabBar}
            initialRouteName={ROUTES.home}
            screenOptions={{
                headerStyle: Style.bg_primary,
            }}
        >
            <Tab.Screen
                name={ROUTES.home}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={ROUTES.explore}
                component={ExploreScreen}
                options={{
                    headerTitle: () =>
                        renderTitle(NAVIGATION_TITLE_STR.explore[languageCode]),
                    headerLeft: renderLeft,
                    headerRight: renderRight,
                    headerRightContainerStyle: isIos ? Style.jc_fs : Style.jc_c,
                }}
            />
            <Tab.Screen
                name={ROUTES.info}
                component={InfoScreen}
                options={{
                    headerTitle: () =>
                        renderTitle(NAVIGATION_TITLE_STR.info[languageCode]),
                    headerLeft: renderLeft,
                    headerRight: renderRight,
                    headerRightContainerStyle: isIos ? Style.jc_fs : Style.jc_c,
                }}
            />
            <Tab.Screen
                name={ROUTES.setting}
                component={SettingScreen}
                options={{
                    headerTitle: () =>
                        renderTitle(NAVIGATION_TITLE_STR.setting[languageCode]),
                    headerLeft: renderLeft,
                    headerRight: renderRight,
                    headerRightContainerStyle: isIos ? Style.jc_fs : Style.jc_c,
                }}
            />
        </Tab.Navigator>
    )
};

export default AppNavigation;
