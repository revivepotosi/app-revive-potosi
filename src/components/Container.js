import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StatusBar } from 'react-native';
import Style from '../style/Style';

const Container = ({ children, style, barStyle, barBackgroundColor }) => (
    <SafeAreaView style={[Style.flex_grow, Style.bg_background, style]}>
        <StatusBar barStyle={barStyle} backgroundColor={barBackgroundColor} />
        {children}
    </SafeAreaView>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    barStyle: PropTypes.string,
    barBackgroundColor: PropTypes.string,
};

Container.defaultProps = {
    style: {},
    barStyle: 'dark-content',
    barBackgroundColor: Style.background,
};

export default Container;
