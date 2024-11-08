import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonKitten } from '@ui-kitten/components';
import Style from '../style/Style';
import Icon from './Icon';


const Button = (props) => {
    const { children, style, iconName, size, appearance  } = props;
    const LeftIcon = () => {
        if (iconName) {
            return (
                <Icon
                    style={Style.c_white}
                    size={16}
                    iconName={iconName}
                />
            );
        }
        return null;
    };

    return (
        <ButtonKitten
            {...props}
            style={[Style.br_20, style]}
            accessoryLeft={LeftIcon}
            size={size}
            appearance={appearance}
        >
            {children}
        </ButtonKitten>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconName: PropTypes.string,
    size: PropTypes.string,
    appearance: PropTypes.string,
};

Button.defaultProps = {
    style: {},
    iconName: '',
    size: 'medium',
    appearance: 'primary',
};

export default Button;
