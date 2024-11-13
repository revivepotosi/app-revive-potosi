import React from 'react';
import { Text } from '@ui-kitten/components';
import Container from '../../../components/Container';
import Style from '../../../style/Style';
import { ScrollView, View } from 'react-native';
import Content from '../../../components/Content';
import { isImageContent, isTextContent } from '../../../utils/functions';
import CardContainer from '../../../components/CardContainer';
import historicCenterScreenStr from '../constants/historicCenterScreenStr';
import useHistoricCenterScreen from '../hooks/useHistoricCenterScreen';

const HistoricCenterScreen = () => {
    const { languageCode, historicCenter, hasContent } =
        useHistoricCenterScreen();
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
            <ScrollView bounces={false}>
                <View style={Style.p_4}>
                    <CardContainer>
                        <Text
                            style={[
                                Style.title_large,
                                Style.c_primary,
                                Style.mb_2,
                            ]}>
                            {historicCenter.text[languageCode].name}
                        </Text>
                        <Text
                            style={[
                                Style.label_large,
                                Style.c_primary,
                                Style.mb_2,
                            ]}>
                            {historicCenter.category.text[languageCode].name}
                        </Text>
                        {hasContent ? (
                            renderContent(historicCenter.contents)
                        ) : (
                            <Text style={Style.title_medium}>
                                {
                                    historicCenterScreenStr.emptyMessage[
                                        languageCode
                                    ]
                                }
                            </Text>
                        )}
                    </CardContainer>
                </View>
            </ScrollView>
        </Container>
    );
};

export default HistoricCenterScreen;
