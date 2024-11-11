import { useContext } from 'react';
import PermissionContext from '../context/permission/PermissionContext';

const usePermission = () => {
    const { locationPermit, changeLocationPermit } =
        useContext(PermissionContext);
    return { locationPermit, changeLocationPermit };
};

export default usePermission;
