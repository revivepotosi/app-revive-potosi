import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Style from '../style/Style';

const AppLogo = ({ style }) => (
    <Image
        style={[Style.as_c, style]}
        source={require('../../assets/logo.png')}
    />
);

AppLogo.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppLogo.defaultProps = {
    style: {},
};

export default AppLogo;
