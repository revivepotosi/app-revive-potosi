import { useContext, useEffect, useState } from 'react';
import { RESULTS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';
import usePermission from '../../../hooks/usePermission';
import useLocation from '../../../hooks/useLocation';
import { validExperienceAvailable } from '../utils/functions';
import ROUTES from '../../../navigation/routes';
import ExperienceContext from '../../../context/experience/ExperienceContext';

const useExploreScreen = () => {
    const { changeHistoricCenterID } = useContext(ExperienceContext);
    const navigation = useNavigation();
    const { locationPermit } = usePermission();
    const { location, loading: locationLoading } = useLocation();
    const [loading, setLoading] = useState(true);
    const [hasLocationPermit, setHasLocationPermit] = useState(false);
    const [hasExperienceAvailable, setHasExperienceAvailable] = useState(false);
    const [historicCenter, setHistoricCenter] = useState(null);
    const [experiences, setExperiences] = useState(null);

    const init = () => {
        setLoading(true);
        if (RESULTS.GRANTED === locationPermit) {
            setHasLocationPermit(true);
            validExperienceAvailable(
                location,
                setHistoricCenter,
                setHasExperienceAvailable,
                setExperiences,
            ).finally(() => setLoading(false));
        } else {
            setHasLocationPermit(false);
            setLoading(false);
        }
    };

    const navigateToExperienceScreen = () => {
        changeHistoricCenterID(historicCenter.id);
        navigation.navigate(ROUTES.experienceNavigation);
    };

    useEffect(() => {
        if (!locationLoading) {
            init();
        }
    }, [locationLoading]);

    return {
        loading,
        hasLocationPermit,
        hasExperienceAvailable,
        historicCenter,
        experiences,
        onRefresh: init,
        navigateToExperienceScreen,
    };
};

export default useExploreScreen;
