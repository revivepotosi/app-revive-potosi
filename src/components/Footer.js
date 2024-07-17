import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View } from 'react-native';
import Style from '../style/Style';

const Footer = ({ children, style }) => {
    const isAndroid = Platform.OS === 'android';
    return (
        <View style={[Style.ph_4, isAndroid ? Style.pb_4 : null, style]}>
            {children}
        </View>
    );
};

Footer.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Footer.defaultProps = {
    style: {},
};

export default Footer;
