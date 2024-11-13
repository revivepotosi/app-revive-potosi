import React from 'react';
import Container from '../../../components/Container';
import Style from '../../../style/Style';
import { Text } from '@ui-kitten/components';
import categoryScreenStr from '../constants/categoryScreenStr';
import { FlatList } from 'react-native';
import { keyExtractor } from '../../home/components/HomeSection/utils';
import SelectorCard from '../../../components/SelectorCard';
import useCategoryScreen from '../hooks/useCategoryScreen';

const CategoryScreen = () => {
    const { languageCode, categories, hasCategories, onPressCategory } =
        useCategoryScreen();

    const renderItem = ({ item }) => (
        <SelectorCard
            title={item?.text[languageCode].name}
            image={item.image.url}
            onPress={onPressCategory(item.id)}
            fullWidth
        />
    );

    return (
        <Container barStyle="light-content" barBackgroundColor={Style.primary}>
            {hasCategories ? (
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={[Style.ph_4, Style.pt_4]}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                />
            ) : (
                <Text style={[Style.title_medium, Style.c_primary, Style.m_4]}>
                    {categoryScreenStr.emptyMessage[languageCode]}
                </Text>
            )}
        </Container>
    );
};

export default CategoryScreen;
