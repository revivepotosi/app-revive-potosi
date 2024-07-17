import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './routes';
import APP_ROUTES from '../../home/navigation/routes'
import ExploreScreen from '../containers/ExploreScreen';
import Style from '../../../style/Style';
import useLanguage from '../../../hooks/useLanguage';
import HeaderLeft from '../../../components/HeaderLeft';
import { Text } from '@ui-kitten/components';
import AppLogo from '../../../components/AppLogo';
import { useNavigation } from '@react-navigation/native';
import NAVIGATION_TITLE_STR from '../../home/navigation/NavigationTitleStr';
import { getCurrentScreenName } from '../../../navigation/navigationService';

const Stack = createStackNavigator();

const ExploreNavigation = () => {
    const { languageCode } = useLanguage();
    const navigation = useNavigation();
    const isIos = Platform.OS === 'ios';
    const goBack = () => {
        if(getCurrentScreenName() === ROUTES.explore) {
            navigation.navigate(APP_ROUTES.home);
            return;
        }
        navigation.goBack();
    };

    const renderLeft = () => (navigation.canGoBack() ? (
        <HeaderLeft onPress={goBack}/>
        ) : null);
    const renderTitle = (title) => (
        <Text style={[Style.c_white, Style.title_large, isIos && Style.mb_4]}>
            {title}
        </Text>
    );
    const renderRight = () => <AppLogo style={[Style.mr_4, Style.as_fe]} />;

    return (
        <Stack.Navigator
            initialRouteName={ROUTES.explore}
            screenOptions={{
                headerStyle: Style.bg_primary,
            }}
        >
            <Stack.Screen
                name={ROUTES.explore}
                component={ExploreScreen}
                options={{
                    headerTitle: () => renderTitle(NAVIGATION_TITLE_STR.explore[languageCode]),
                    headerLeft: renderLeft,
                    headerRight: renderRight,
                    headerRightContainerStyle: isIos ? Style.jc_fs : Style.jc_c,
                }}
            />
        </Stack.Navigator>
    );
};

export default ExploreNavigation;
