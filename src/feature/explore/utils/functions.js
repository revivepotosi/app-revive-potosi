import getExperiences from '../../../app/api/getExperiences';
import getHistoricCentersOrdered from '../../../app/api/historicCenter/getHistoricCentersOrdered';
import { isWithin100Meters } from '../../../utils/distance';

const validExperienceAvailable = async (
    location,
    setHistoricCenter,
    setHasExperienceAvailable,
    setExperiences,
) => {
    const historicCenters = await getHistoricCentersOrdered(location);
    const nearbyHistoricCenter = historicCenters[0];
    if (isWithin100Meters(location, nearbyHistoricCenter)) {
        setHistoricCenter(nearbyHistoricCenter);
        const experiences = await getExperiences(nearbyHistoricCenter.id);
        setExperiences(experiences ?? []);
        setHasExperienceAvailable(
            experiences && Array.isArray(experiences) && experiences.length > 0,
        );
    } else {
        setHasExperienceAvailable(false);
    }
};

export { validExperienceAvailable };
