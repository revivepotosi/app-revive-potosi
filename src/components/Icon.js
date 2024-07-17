import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconKitten } from '@ui-kitten/components';
import Style from '../style/Style';

const Icon = ({ style, iconName, size }) => (
    <IconKitten
        style={[{ width: size, height: size }, Style.c_primary, style]}
        name={iconName}
        pack='material'
    />
);

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.number,
};

Icon.defaultProps = {
    style: {},
    size: 16,
};

export default Icon;
