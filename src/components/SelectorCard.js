import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Style from '../style/Style';
import { Text } from '@ui-kitten/components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const getStyle = fullWidth =>
    StyleSheet.create({
        container: ({ pressed }) => ({
            width: fullWidth ? '%100' : 140,
            height: 100,
            opacity: pressed ? 0.9 : 1,
            ...(fullWidth ? Style.mb_4 : Style.mr_2),
            ...Style.br_20,
        }),
    });

const SelectorCard = ({
    title,
    subtitle,
    image,
    loading,
    fullWidth,
    onPress,
}) => {
    if (loading) return (
        <View style={Style.mr_2}>
            <SkeletonPlaceholder borderRadius={20}>
                <SkeletonPlaceholder.Item width={140} height={100} />
            </SkeletonPlaceholder>
        </View>
    );

    return (
        <Pressable style={getStyle(fullWidth).container} onPress={onPress}>
            <ImageBackground
                source={{uri: image }}
                imageStyle={Style.br_20}
                style={Style.flex_i}
            >
                <View
                    style={[
                        Style.flex_i,
                        Style.jc_c,
                        Style.p_4,
                        Style.bg_primary_transparent,
                        Style.br_20,
                    ]}
                >
                    <Text
                        ellipsizeMode='tail'
                        numberOfLines={2}
                        style={[Style.body_medium, Style.c_white, Style.ta_c]}
                    >
                        {title}
                    </Text>
                    {subtitle ? (
                        <Text
                            ellipsizeMode='tail'
                            numberOfLines={2}
                            style={[Style.label_small, Style.c_white, Style.ta_c, Style.mt_1]}
                        >
                            {subtitle}
                        </Text>
                    ): null}
                </View>
            </ImageBackground>
        </Pressable>
    )
};

SelectorCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onPress: PropTypes.func,
};

SelectorCard.defaultProps = {
    title: '',
    subtitle: '',
    image: '',
    loading: false,
    fullWidth: false,
    onPress: () => null,
};

export default SelectorCard;
