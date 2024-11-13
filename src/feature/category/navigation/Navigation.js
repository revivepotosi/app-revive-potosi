import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './routes';
import Style from '../../../style/Style';
import useLanguage from '../../../hooks/useLanguage';
import NAVIGATION_STR from '../constants/navigationStr';
import {
    renderLeft,
    renderRight,
    renderTitle,
} from '../../../navigation/utils/navigationCommon';
import CategoryScreen from '../containers/CategoryScreen';

const Stack = createStackNavigator();

const CategoryNavigation = () => {
    const { languageCode } = useLanguage();
    const navigation = useNavigation();
    const isIos = Platform.OS === 'ios';

    return (
        <Stack.Navigator
            initialRouteName={ROUTES.categoryScreen}
            screenOptions={{
                gestureEnabled: false,
                headerStyle: Style.bg_primary,
            }}>
            <Stack.Screen
                name={ROUTES.categoryScreen}
                component={CategoryScreen}
                options={{
                    headerTitle: () =>
                        renderTitle(
                            NAVIGATION_STR.categoryScreen[languageCode],
                        ),
                    headerLeft: () => renderLeft(navigation),
                    headerRight: renderRight,
                    headerRightContainerStyle: isIos ? Style.jc_fs : Style.jc_c,
                }}
            />
        </Stack.Navigator>
    );
};

export default CategoryNavigation;
