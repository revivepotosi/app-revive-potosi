import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Style from '../style/Style';

const PotosiLogo = ({ style }) => (
    <Image
        style={[Style.as_c, style]}
        source={require('../../assets/potosi_mas_que_historia.png')}
    />
);

PotosiLogo.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

PotosiLogo.defaultProps = {
    style: {},
};

export default PotosiLogo;
