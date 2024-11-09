import React from 'react';
import { Text } from '@ui-kitten/components';
import useInfoScreen from '../hooks/useInfoScreen';
import Container from '../../../components/Container';
import Style from '../../../style/Style';
import { ScrollView, View } from 'react-native';
import useLanguage from '../../../hooks/useLanguage';
import INFO_SCREEN_STR from '../constants/infoScreenStr';
import InfoScreenSkeleton from '../components/InfoScreenSkeleton';
import Content from '../../../components/Content';
import { isImageContent, isTextContent } from '../../../utils/functions';

const InfoScreen = () => {
    const { languageCode } = useLanguage();
    const { loading, info, hasContent } = useInfoScreen();

    if (loading) {
        return <InfoScreenSkeleton />;
    }

    const renderContent = contents =>
        contents.map(content => (
            <Content
                key={content.id}
                type={content.type}
                text={
                    isTextContent(content.type)
                        ? content?.text[languageCode].text
                        : undefined
                }
                imageSrc={
                    isImageContent(content.type) ? content.image.url : undefined
                }
                alt={isImageContent(content.type) ? content.alt : undefined}
            />
        ));

    return (
        <Container barStyle="light-content" barBackgroundColor={Style.primary}>
            <ScrollView>
                <View style={[Style.ph_4, Style.pt_4]}>
                    {hasContent ? (
                        renderContent(info.contents)
                    ) : (
                        <Text style={Style.title_medium}>
                            {INFO_SCREEN_STR.emptyMessage[languageCode]}
                        </Text>
                    )}
                </View>
            </ScrollView>
        </Container>
    );
};

export default InfoScreen;
