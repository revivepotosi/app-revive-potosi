import { Platform } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';

const getLocationPermit = async () => {
    try {
        const locationPermit = await request(
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        return locationPermit;
    } catch (err) {
        return RESULTS.BLOCKED;
    }
};

export default getLocationPermit;
