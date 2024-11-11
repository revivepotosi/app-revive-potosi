import React from 'react';
import { Text } from '@ui-kitten/components';
import useExploreScreen from '../hooks/useExploreScreen';
import ExploreScreenSkeleton from '../components/ExploreScreenSkeleton';
import Container from '../../../components/Container';
import { ScrollView, View } from 'react-native';
import Style from '../../../style/Style';
import CardContainer from '../../../components/CardContainer';
import EXPLORE_SCREEN_STR from '../constants/exploreScreenStr';
import useLanguage from '../../../hooks/useLanguage';
import Button from '../../../components/Button';
import ExperiencesAvailable from '../components/ExperiencesAvailable';

const ExploreScreen = () => {
    const { languageCode } = useLanguage();
    const {
        loading,
        hasLocationPermit,
        hasExperienceAvailable,
        historicCenter,
        experiences,
        onRefresh,
        navigateToExperienceScreen,
    } = useExploreScreen();

    if (loading) {
        return <ExploreScreenSkeleton />;
    }
    if (!hasLocationPermit) {
        return (
            <Container
                barStyle="light-content"
                barBackgroundColor={Style.primary}>
                <View style={Style.p_4}>
                    <CardContainer>
                        <Text style={Style.title_medium}>
                            {
                                EXPLORE_SCREEN_STR.withoutLocationPermitMessage[
                                    languageCode
                                ]
                            }
                        </Text>
                    </CardContainer>
                </View>
            </Container>
        );
    }

    return (
        <Container barStyle="light-content" barBackgroundColor={Style.primary}>
            <ScrollView bounces={false}>
                <View style={Style.p_4}>
                    <CardContainer>
                        {hasExperienceAvailable ? (
                            <ExperiencesAvailable
                                languageCode={languageCode}
                                title={historicCenter.text[languageCode].name}
                                experiences={experiences}
                                onPress={navigateToExperienceScreen}
                            />
                        ) : (
                            <>
                                <Text style={[Style.title_medium, Style.mb_4]}>
                                    {
                                        EXPLORE_SCREEN_STR
                                            .experienceUnavailable[languageCode]
                                    }
                                </Text>
                                <Button iconName="refresh" onPress={onRefresh}>
                                    {EXPLORE_SCREEN_STR.reload[languageCode]}
                                </Button>
                            </>
                        )}
                    </CardContainer>
                </View>
            </ScrollView>
        </Container>
    );
};

export default ExploreScreen;
