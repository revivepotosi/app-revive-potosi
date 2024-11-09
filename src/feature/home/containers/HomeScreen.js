import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../../../style/Style';
import HomeHeader from '../../../components/HomeHeader';
import ExploreCard from '../components/ExploreCard/ExploreCard';
import ROUTES from '../../../navigation/routes';
import useHomeScreen from '../hooks/useHomeScreen';
import HomeSection from '../components/HomeSection/HomeSection';
import GLOBAL_STR from '../../../constants/globalStr';

const HomeScreen = () => {
	const navigation = useNavigation();
    const { loading, categories, museums } = useHomeScreen();

    const goExplore = () => navigation.navigate(ROUTES.experienceNavigation);

    return (
        <View style={[Style.flex_i, Style.bg_background]}>
            <StatusBar barStyle="light-content" backgroundColor={Style.primary}/>
            <HomeHeader loading={loading}>
                <View>
                    <ExploreCard style={Style.mh_4} onPress={goExplore} loading={loading} />
                    <HomeSection loading={loading} data={museums} />
                    <HomeSection loading={loading} data={categories} type={GLOBAL_STR.category} />
                </View>
      </HomeHeader>
    </View>
  );
};

export default HomeScreen;
