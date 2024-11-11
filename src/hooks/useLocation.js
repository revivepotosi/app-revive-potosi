import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { RESULTS } from 'react-native-permissions';
import usePermission from './usePermission';

const useLocation = () => {
    const { locationPermit } = usePermission();
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLocation = async () => {
            try {
                if (locationPermit === RESULTS.GRANTED) {
                    const position = await new Promise((resolve, reject) => {
                        Geolocation.getCurrentPosition(resolve, reject, {
                            enableHighAccuracy: true,
                            timeout: 15000,
                            maximumAge: 10000,
                        });
                    });
                    const { latitude: lat, longitude: lng } = position.coords;
                    setLocation({ lat, lng });
                } else {
                    setError('Location permission not granted');
                }
            } catch (err) {
                console.error(err);
                setError(err);
            }
        };
        getLocation().finally(() => {
            setLoading(false);
        });
    }, []);

    return { location, error, loading };
};

export default useLocation;
