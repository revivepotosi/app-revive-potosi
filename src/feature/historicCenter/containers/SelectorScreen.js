import React from 'react';
import Container from '../../../components/Container';
import Style from '../../../style/Style';
import { Text } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import selectorScreenStr from '../constants/selectorScreenStr';
import useLanguage from '../../../hooks/useLanguage';
import { FlatList } from 'react-native';
import { keyExtractor } from '../../home/components/HomeSection/utils';
import SelectorCard from '../../../components/SelectorCard';
import APP_ROUTES from '../../../navigation/routes';
import HISTORIC_CENTER_ROUTES from '../navigation/routes';

const SelectorScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { languageCode } = useLanguage();
    const { historicCenters } = route?.params;
    const hasHistoricCenters =
        historicCenters &&
        Array.isArray(historicCenters) &&
        historicCenters.length > 0;

    const goHistoricCenter = historicCenter => () => {
        navigation.navigate(APP_ROUTES.historicCenterNavigation, {
            screen: HISTORIC_CENTER_ROUTES.historicCenterScreen,
            params: { historicCenter },
        });
    };

    const renderItem = ({ item }) => (
        <SelectorCard
            title={item?.text[languageCode].name}
            subtitle={item?.category.text[languageCode].name}
            image={item.image.url}
            onPress={goHistoricCenter(item)}
            fullWidth
        />
    );

    return (
        <Container barStyle="light-content" barBackgroundColor={Style.primary}>
            {hasHistoricCenters ? (
                <FlatList
                    data={historicCenters}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={[Style.ph_4, Style.pt_4]}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                />
            ) : (
                <Text style={[Style.title_medium, Style.c_primary, Style.m_4]}>
                    {selectorScreenStr.emptyMessage[languageCode]}
                </Text>
            )}
        </Container>
    );
};

export default SelectorScreen;
