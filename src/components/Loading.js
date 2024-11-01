import React from 'react';
import Container from './Container';
import useLanguage from '../hooks/useLanguage';
import LOADING_STR from '../constants/loadingStr';
import { Spinner, Text } from '@ui-kitten/components';
import Style from '../style/Style';

const Loading = () => {
    const { languageCode } = useLanguage();
    return (
        <Container style={[Style.flex_i, Style.jc_c, Style.ai_c]} barStyle="light-content" barBackgroundColor={Style.primary}>
            <Text style={[Style.title_medium, Style.c_primary, Style.mb_4]}>
                {LOADING_STR.title[languageCode]}
            </Text>
            <Spinner status='primary' />
        </Container>
    );
};

export default Loading;
