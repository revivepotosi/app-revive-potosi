import React from 'react';
import { Platform, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Style from '../style/Style';

const HeaderLeft = ({onPress}) => {
    const isAndroid = Platform.OS === 'android';
    const iconName = isAndroid ? 'keyboard-backspace' : 'keyboard-arrow-left';
    return (
        <Pressable style={[Style.ml_2, isAndroid || Style.mb_2]} onPress={onPress}>
            <Icon
                iconName={iconName}
                style={Style.c_white}
                size={isAndroid ? 26 : 30}
            />
        </Pressable>
    );
};

HeaderLeft.propTypes = {
    onPress: PropTypes.func,
};

HeaderLeft.defaultProps = {
    onPress: () => null,
};

export default HeaderLeft;
