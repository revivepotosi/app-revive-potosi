import React, { useState } from 'react';
import { Image as RNImage, View } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from '@ui-kitten/components';
import Style from '../style/Style';

const Image = ({ src, alt, style }) => {
    const [aspectRatio, setAspectRatio] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const onImageLoad = event => {
        const { width, height } = event.nativeEvent.source;
        setAspectRatio(width / height);
        setLoading(false);
    };

    return (
        <View style={[Style.jc_c, Style.ai_c]}>
            {loading && <Spinner status="primary" />}
            <RNImage
                source={{ uri: src }}
                style={[Style.br_10, Style.w_full, { aspectRatio }, style]}
                onLoad={onImageLoad}
                accessibilityLabel={alt}
            />
        </View>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Image.defaultProps = {
    style: {},
};

export default Image;
