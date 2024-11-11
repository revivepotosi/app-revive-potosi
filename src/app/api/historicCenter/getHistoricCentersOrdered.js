import { calculateDistance } from '../../../utils/distance';
import getHistoricCenters from './getHistoricCenters';

const getHistoricCentersOrdered = async currentLocation => {
    const historicCenters = await getHistoricCenters();
    if (currentLocation) {
        historicCenters.sort((a, b) => {
            const distanceA = calculateDistance(currentLocation, a.position);
            const distanceB = calculateDistance(currentLocation, b.position);
            return distanceA - distanceB;
        });
    }
    return historicCenters;
};

export default getHistoricCentersOrdered;
