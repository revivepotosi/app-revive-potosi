import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Style from '../style/Style';
import Icon from './Icon';

const BadgeIcon = ({
    style,
    iconName,
    iconStyle,
    iconSize,
    containerSize,
}) => (
    <View style={[{ width: containerSize, height: containerSize }, Style.bg_secondary, Style.br_20, Style.jc_c, Style.ai_c, style]}>
        <Icon
            style={[Style.c_white, iconStyle]}
            size={iconSize}
            iconName={iconName}
        />
    </View>
);

BadgeIcon.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    containerSize: PropTypes.number,
};

BadgeIcon.defaultProps = {
    style: {},
    iconStyle: {},
    iconName: 'search',
    iconSize: 16,
    containerSize: 24,
};

export default BadgeIcon;
