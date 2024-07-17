import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@ui-kitten/components';
import { View } from 'react-native';
import Style from '../../../../style/Style';
import Button from '../../../../components/Button';
import BadgeIcon from '../../../../components/BadgeIcon';
import EXPLORE_CARD_STR from './ExploreCardStr';
import useLanguage from '../../../../hooks/useLanguage';

const ExploreCard = ({ style, onPress }) => {
    const { languageCode } = useLanguage();
    return (
        <View
            style={[
                Style.bg_white,
                Style.p_4,
                Style.br_20,
                Style.shadow,
                Style.mb_4,
                style,
            ]}
        >
            <View style={[Style.flex_row, Style.jc_c, Style.ai_c, Style.ph_7, Style.mb_4]}>
                <BadgeIcon
                    containerSize={40}
                    style={Style.bg_accent}
                    iconSize={24}
                    iconStyle={Style.c_primary}
                />
                <Text style={[Style.ml_4, Style.title_small, Style.ta_c]}>
                    {EXPLORE_CARD_STR.title[languageCode]}
                </Text>
            </View>
            <Button iconName="camera-alt" onPress={onPress}>
                {EXPLORE_CARD_STR.button.label[languageCode]}
            </Button>
        </View>
    );
};

ExploreCard.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func,
};

ExploreCard.defaultProps = {
    style: {},
    onPress: () => null,
};

export default ExploreCard;
