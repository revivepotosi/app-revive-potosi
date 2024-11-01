import { useContext, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import getExperiences from '../../../app/api/getExperiences';
import getTargets from '../../../utils/getTargets';
import ExperienceContext from '../../../context/experience/ExperienceContext';

const useExperienceScreen = () => {
    const { changeExperiences, changeTargets } = useContext(ExperienceContext);
    const [loading, setLoading] = useState(true);

    const historicCenterID = 'aHWdJcIWXLAgCuj5JLhq';

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove();
    }, [])

    useEffect(() => {
        const init = async () => {
            const resExperiences = await getExperiences(historicCenterID);
            changeExperiences(resExperiences);
            changeTargets(getTargets(resExperiences));
        };
        init().finally(() => {
            setLoading(false);
        });
    }, []);

    return { loading };
};

export default useExperienceScreen;
