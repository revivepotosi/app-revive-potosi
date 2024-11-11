import { createContext } from 'react';
import { RESULTS } from 'react-native-permissions';

export const initialState = {
    locationPermit: RESULTS.BLOCKED,
    changeLocationPermit: locationPermit => locationPermit,
};

const PermissionContext = createContext(initialState);

export default PermissionContext;
