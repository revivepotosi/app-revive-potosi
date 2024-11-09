import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import contentTypes from '../constants/contentTypes';
import Style from '../style/Style';
import Image from './Image';

const Content = ({ type, text, imageSrc, alt }) => {
    const getContent = () => {
        if (type === contentTypes[0].id) {
            return (
                <Text style={[Style.title_medium, Style.c_primary]}>
                    {text}
                </Text>
            );
        }
        if (type === contentTypes[1].id) {
            return (
                <Text style={[Style.label_medium, Style.c_primary]}>
                    {text}
                </Text>
            );
        }
        if (type === contentTypes[3].id) {
            return <Text style={Style.body_medium}>{text}</Text>;
        }
        return <Image src={imageSrc} alt={alt} />;
    };
    return <View style={[Style.mb_2, Style.flex_grow]}>{getContent()}</View>;
};

Content.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    imageSrc: PropTypes.string,
    alt: PropTypes.string,
};

Content.defaultProps = {
    text: '',
    imageSrc: '',
    alt: '',
};

export default Content;
