import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import Style from '../style/Style';
import GLOBAL_STR from '../constants/globalStr';
import AppLogo from './AppLogo';
import HOME_HEADER_STR from '../constants/HomeHeaderStr';
import useLanguage from '../hooks/useLanguage';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

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

const HomeHeader = ({ children, loading }) => {
    const { languageCode } = useLanguage();
    if (loading) return (
        <>
            <View
                style={[
                    Style.bg_primary,
                    Style.pb_2,
                    styles.headerContainer,
                ]}
            >
                <View style={[Style.flex_row, Style.jc_sb, Style.pt_4, Style.ph_5, Style.pb_4]}>
                    <SkeletonPlaceholder borderRadius={10}>
                        <SkeletonPlaceholder.Item width={160} height={30} />
                    </SkeletonPlaceholder>
                    <SkeletonPlaceholder>
                        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
                    </SkeletonPlaceholder>
                </View>
                <SkeletonPlaceholder borderRadius={10}>
                    <SkeletonPlaceholder.Item width={100} height={24} alignSelf='center' />
                </SkeletonPlaceholder>
                <View style={Style.mb_6}/>
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
    return (
        <>
            <View
                style={[
                    Style.bg_primary,
                    Style.pb_2,
                    styles.headerContainer,
                ]}
            >
                <View style={[Style.flex_row, Style.jc_sb, Style.pt_4, Style.ph_5, Style.pb_4]}>
                    <Text style={[Style.c_white, Style.headline_medium]}>{GLOBAL_STR.appTitle}</Text>
                    <AppLogo />
                </View>
                <Text style={[Style.title_large, Style.c_white, Style.ta_c, Style.mb_6]}>
                    {HOME_HEADER_STR[languageCode]}
                </Text>
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
};

HomeHeader.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default HomeHeader;
