import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import useLanguage from '../hooks/useLanguage';
import Style from '../style/Style';
import NAVIGATION_TITLE_STR from '../feature/home/navigation/NavigationTitleStr';

const HomeIcon = (props) => (
    <Icon
        {...props}
        name='home'
        pack='material'
    />
);
const ExploreIcon = (props) => (
    <Icon
        {...props}
        name='camera-alt'
        pack='material'
    />
);
const InfoIcon = (props) => (
    <Icon
        {...props}
        name='info'
        pack='material'
    />
);
const SettingIcon = (props) => (
    <Icon
        {...props}
        name='settings'
        pack='material'
    />
);

const BottomTabBar = ({ navigation, state }) => {
    const { languageCode } = useLanguage();
    return (
        <BottomNavigation
            selectedIndex={state.index}
            style={Style.pb_4}
            onSelect={index => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab
                title={NAVIGATION_TITLE_STR.home[languageCode]}
                icon={HomeIcon}
            />
            <BottomNavigationTab
                title={NAVIGATION_TITLE_STR.explore[languageCode]}
                icon={ExploreIcon}
            />
            <BottomNavigationTab
                title={NAVIGATION_TITLE_STR.info[languageCode]}
                icon={InfoIcon}
            />
            <BottomNavigationTab
                title={NAVIGATION_TITLE_STR.setting[languageCode]}
                icon={SettingIcon}
            />
        </BottomNavigation>
    );
};

BottomTabBar.propTypes = {
    navigation: PropTypes.any.isRequired,
    state: PropTypes.any.isRequired,
};

export default BottomTabBar;
