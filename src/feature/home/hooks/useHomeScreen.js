import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useLocation from '../../../hooks/useLocation';
import getHistoricCentersOrdered from '../../../app/api/historicCenter/getHistoricCentersOrdered';
import getCategories from '../../../app/api/category/getCategories';
import ROUTES from '../navigation/routes';

const useHomeScreen = () => {
    const navigation = useNavigation();
    const { location, loading: locationLoading } = useLocation();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [historicCenters, setHistoricCenters] = useState([]);

    const goExplore = () => navigation.navigate(ROUTES.explore);

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

    return { loading, categories, historicCenters, goExplore };
};

export default useHomeScreen;
