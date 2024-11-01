import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';
import Style from '../../../style/Style';
import HomeHeader from '../../../components/HomeHeader';
import GLOBAL_STR from '../../../constants/globalStr';
import AppLogo from '../../../components/AppLogo';
import useLanguage from '../../../hooks/useLanguage';
import HOME_SCREEN_STR from '../constants/HomeScreenStr';
import ExploreCard from '../components/ExploreCard/ExploreCard';
import BadgeIcon from '../../../components/BadgeIcon';
import SelectorCard from '../../../components/SelectorCard';
import { categoryDummy, placesDummy } from '../data/dataDummy';
import APP_ROUTES from '../navigation/routes';
import ROUTES from '../../../navigation/routes';
import useHomeScreen from '../hooks/useHomeScreen';

const HomeScreen = () => {
    const { languageCode } = useLanguage();
    const navigation = useNavigation();
    const { categories, museums} =useHomeScreen();
    const renderHeaderContent = () => (
                <>
            <View style={[Style.flex_row, Style.jc_sb, Style.pt_4, Style.ph_5, Style.pb_4]}>
                <Text style={[Style.c_white, Style.headline_medium]}>{GLOBAL_STR.appTitle}</Text>
                <AppLogo />
            </View>
            <Text style={[Style.title_large, Style.c_white, Style.ta_c, Style.mb_6]}>
                {HOME_SCREEN_STR.headerTitle[languageCode]}
            </Text>
        </>
    );
    const renderPlaces = ({ item }) => (
        <SelectorCard title={item?.text[languageCode.toUpperCase()].name} subtitle={item?.category.text[languageCode.toUpperCase()].name}  image={ item.image.url}/>
    );
    const renderCategories = ({ item }) => (
        <SelectorCard title={item?.text[languageCode.toUpperCase()].name} image={ item.image.url }/>
    );
    const keyExtractor = (item) => item.id;
    const goExplore = () => navigation.navigate(
        ROUTES.appNavigation,
        {
            screen: APP_ROUTES.exploreNavigation,
        }
    );

    return (
        <View style={[Style.flex_i, Style.bg_background]}>
            <StatusBar barStyle="light-content" backgroundColor={Style.primary}/>
            <HomeHeader renderHeaderContent={renderHeaderContent}>
                <View>
                    <ExploreCard style={Style.mh_4} onPress={goExplore} />
                    <View style={[Style.flex_row, Style.ai_c, Style.mb_3, Style.ph_4]}>
                        <BadgeIcon iconName="location-on" containerSize={30} iconSize={18} />
                        <Text style={[Style.ml_2, Style.title_medium, Style.c_black]}>
                            {HOME_SCREEN_STR.nearCenters[languageCode]}
                        </Text>
                    </View>
                    <FlatList
                        horizontal
                        data={museums}
                        renderItem={renderPlaces}
                        keyExtractor={keyExtractor}
                        contentContainerStyle={[Style.ph_4, Style.pb_4]}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    />
                    <View style={[Style.flex_row, Style.ai_c, Style.mb_3, Style.ph_4]}>
                        <BadgeIcon iconName="filter-alt" containerSize={30} iconSize={18} />
                        <Text style={[Style.ml_2, Style.title_medium, Style.c_black]}>
                            {HOME_SCREEN_STR.category[languageCode]}
                        </Text>
                    </View>
                    <FlatList
                        horizontal
                        data={categories}
                        renderItem={renderCategories}
                        keyExtractor={keyExtractor}
                        contentContainerStyle={[Style.ph_4, Style.pb_4]}
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
      </HomeHeader>
    </View>
  );
};

export default HomeScreen;
