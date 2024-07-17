import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import Style from '../style/Style';
import { Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: ({ pressed }) => ({
        width: 140,
        height: 100,
        opacity: pressed ? 0.9 : 1,
        ...Style.mr_2,
        ...Style.br_20,
    }),
});

const SelectorCard = ({ title, subtitle }) => {
    return (
        <Pressable style={styles.container}>
            <ImageBackground
                source={require('../../assets/fondo-card-test.png')}
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
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

SelectorCard.defaultProps = {
    subtitle: '',
};

export default SelectorCard;
