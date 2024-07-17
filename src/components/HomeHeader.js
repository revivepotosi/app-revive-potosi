import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';
import Style from '../style/Style';

const styles = StyleSheet.create({
    cicle: {
        width: '20%',
        zIndex: -2,
        top: -70,
        height: 100,
        borderRadius: 50,
        transform: [{ scaleX: 6 }],
    },
    headerContainer: {
        paddingTop: Platform.OS === 'android' ? 16: 56,
        zIndex: -1,
    },
    mainContainer: {
        marginTop: -108,
    },
});

const HomeHeader = ({ renderHeaderContent, children }) => (
    <>
        <View
            style={[
                Style.bg_primary,
                Style.pb_2,
                styles.headerContainer,
            ]}
        >
            {renderHeaderContent()}
        </View>
        <View
            style={[
                Style.bg_primary,
                Style.as_c,
                styles.cicle,
            ]}
        />
        <View style={[Style.flex_i, styles.mainContainer]}>
            {children}
        </View>
    </>
);

HomeHeader.propTypes = {
    renderHeaderContent: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default HomeHeader;
