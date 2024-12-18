import React from 'react';
import { StatusBar, View } from 'react-native';
import Style from '../../../style/Style';
import HomeHeader from '../../../components/HomeHeader';
import ExploreCard from '../components/ExploreCard/ExploreCard';
import useHomeScreen from '../hooks/useHomeScreen';
import HomeSection from '../components/HomeSection/HomeSection';
import GLOBAL_STR from '../../../constants/globalStr';

const HomeScreen = () => {
    const {
        loading,
        categories,
        historicCenters,
        goExplore,
        goCategory,
        goSelectorHistoricCenter,
        onPressCategory,
        onPressHistoricCenter,
    } = useHomeScreen();

    return (
        <View style={[Style.flex_i, Style.bg_background]}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Style.primary}
            />
            <HomeHeader loading={loading}>
                <View>
                    <ExploreCard
                        style={Style.mh_4}
                        onPress={goExplore}
                        loading={loading}
                    />
                    <HomeSection
                        loading={loading}
                        data={historicCenters}
                        onMorePress={goSelectorHistoricCenter}
                        onItemPress={onPressHistoricCenter}
                    />
                    <HomeSection
                        loading={loading}
                        data={categories}
                        type={GLOBAL_STR.category}
                        onItemPress={onPressCategory}
                        onMorePress={goCategory}
                    />
                </View>
            </HomeHeader>
        </View>
    );
};

export default HomeScreen;
