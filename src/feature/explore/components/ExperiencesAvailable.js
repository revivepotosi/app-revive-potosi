import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@ui-kitten/components';
import Style from '../../../style/Style';
import { View } from 'react-native';
import Button from '../../../components/Button';
import EXPERIENCES_AVAILABLE_STR from '../constants/experiencesAvailableStr';

const ExperiencesAvailable = ({
    languageCode,
    title,
    experiences,
    onPress,
}) => {
    return (
        <>
            <Text style={[Style.title_medium, Style.c_primary, Style.mb_2]}>
                {title}
            </Text>
            <Text style={Style.title_small}>
                {EXPERIENCES_AVAILABLE_STR.experiencesAvailable[languageCode]}
            </Text>
            <View style={[Style.m_2, Style.mb_4]}>
                {experiences.map(experience => (
                    <Text style={Style.body_large} key={experience.id}>
                        {`· ${experience.text[languageCode].name}`}
                    </Text>
                ))}
            </View>
            <Button iconName="camera-alt" onPress={onPress}>
                {EXPERIENCES_AVAILABLE_STR.explore[languageCode]}
            </Button>
        </>
    );
};

ExperiencesAvailable.propTypes = {
    languageCode: PropTypes.string.isRequired,
    title: PropTypes.string,
    experiences: PropTypes.array,
    onPress: PropTypes.func,
};

ExperiencesAvailable.defaultProps = {
    title: '',
    experiences: [],
    onPress: () => null,
};

export default ExperiencesAvailable;
