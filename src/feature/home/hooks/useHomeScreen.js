import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useLocation from '../../../hooks/useLocation';
import getHistoricCentersOrdered from '../../../app/api/historicCenter/getHistoricCentersOrdered';
import getCategories from '../../../app/api/category/getCategories';
import ROUTES from '../navigation/routes';
import APP_ROUTES from '../../../navigation/routes';
import CATEGORY_ROUTES from '../../category/navigation/routes';
import HISTORIC_CENTER_ROUTES from '../../historicCenter/navigation/routes';

const useHomeScreen = () => {
    const navigation = useNavigation();
    const { location, loading: locationLoading } = useLocation();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [historicCenters, setHistoricCenters] = useState([]);

    const goExplore = () => navigation.navigate(ROUTES.explore);
    const goCategory = () =>
        navigation.navigate(APP_ROUTES.categoryNavigation, {
            screen: CATEGORY_ROUTES.categoryScreen,
            params: {
                categories,
                historicCenters,
            },
        });
    const goSelectorHistoricCenter = () =>
        navigation.navigate(APP_ROUTES.historicCenterNavigation, {
            screen: HISTORIC_CENTER_ROUTES.selectorScreen,
            params: {
                historicCenters,
            },
        });

    const onPressCategory = id => () => {
        const historicCentersFiltered = historicCenters.filter(
            historicCenter => historicCenter?.category?.id === id,
        );
        navigation.navigate(APP_ROUTES.historicCenterNavigation, {
            screen: HISTORIC_CENTER_ROUTES.selectorScreen,
            params: {
                historicCenters: historicCentersFiltered,
            },
        });
    };

    const onPressHistoricCenter = historicCenter => () => {
        navigation.navigate(APP_ROUTES.historicCenterNavigation, {
            screen: HISTORIC_CENTER_ROUTES.historicCenterScreen,
            params: { historicCenter },
        });
    };

    useLayoutEffect(() => {
        if (!locationLoading) {
            const init = async () => {
                const resCategories = await getCategories();
                setCategories(resCategories);
                const resHistoricCenters = await getHistoricCentersOrdered(
                    location,
                );
                setHistoricCenters(resHistoricCenters);
            };

            init().finally(() => setLoading(false));
        }
    }, [locationLoading]);

    return {
        loading,
        categories,
        historicCenters,
        goExplore,
        goCategory,
        goSelectorHistoricCenter,
        onPressCategory,
        onPressHistoricCenter,
    };
};

export default useHomeScreen;
