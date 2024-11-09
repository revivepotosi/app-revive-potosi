import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Style from '../style/Style';

const CardContainer = ({ style, children }) => (
    <View style={[Style.p_4, Style.bg_white, Style.br_20, styles.card, style]}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

CardContainer.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.node.isRequired,
};

CardContainer.defaultProps = {
    style: {},
};

export default CardContainer;
