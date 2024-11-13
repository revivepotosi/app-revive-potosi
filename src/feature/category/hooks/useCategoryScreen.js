import { useNavigation, useRoute } from '@react-navigation/native';
import useLanguage from '../../../hooks/useLanguage';
import MAIN_ROUTES from '../../../navigation/routes';
import HISTORIC_CENTER_ROUTES from '../../historicCenter/navigation/routes';

const useCategoryScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { languageCode } = useLanguage();
    const { categories, historicCenters } = route?.params;
    const hasCategories =
        categories && Array.isArray(categories) && categories.length > 0;

    const onPressCategory = id => () => {
        const historicCentersFiltered = historicCenters.filter(
            historicCenter => historicCenter?.category?.id === id,
        );
        navigation.navigate(MAIN_ROUTES.historicCenterNavigation, {
            screen: HISTORIC_CENTER_ROUTES.selectorScreen,
            params: {
                historicCenters: historicCentersFiltered,
            },
        });
    };

    return {
        languageCode,
        categories,
        hasCategories,
        onPressCategory,
    };
};

export default useCategoryScreen;
