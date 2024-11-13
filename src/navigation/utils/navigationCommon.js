import React from 'react';
import { Platform } from 'react-native';
import { Text } from '@ui-kitten/components';
import HeaderLeft from '../../components/HeaderLeft';
import Style from '../../style/Style';
import AppLogo from '../../components/AppLogo';
import APP_ROUTES from '../routes';
import HOME_ROUTES from '../../feature/home/navigation/routes';

const renderLeft = navigation => {
    const onBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate(APP_ROUTES.appNavigation, {
                screen: HOME_ROUTES.home,
            });
        }
    };
    return <HeaderLeft onPress={onBack} />;
};

const renderTitle = title => (
    <Text
        style={[
            Style.c_white,
            Style.title_large,
            Platform.OS === 'ios' && Style.mb_4,
        ]}>
        {title}
    </Text>
);
const renderRight = () => <AppLogo style={[Style.mr_4, Style.as_fe]} />;

export { renderLeft, renderTitle, renderRight };
