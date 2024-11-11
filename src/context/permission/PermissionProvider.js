import React, { useState } from 'react';
import PermissionContext from './PermissionContext';
import { RESULTS } from 'react-native-permissions';

const PermissionProvider = props => {
    const { children } = props;
    const [locationPermit, setLocationPermit] = useState(RESULTS.BLOCKED);

    const changeLocationPermit = newLocationPermit => {
        setLocationPermit(newLocationPermit);
    };

    const value = {
        locationPermit,
        changeLocationPermit,
    };

    return (
        <PermissionContext.Provider value={value}>
            {children}
        </PermissionContext.Provider>
    );
};

export default PermissionProvider;
