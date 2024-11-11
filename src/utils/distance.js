const calculateDistance = (location1, location2) => {
    const toRadians = degrees => degrees * (Math.PI / 180);
    const { lat: lat1, lng: lon1 } = location1;
    const { lat: lat2, lng: lon2 } = location2;

    const R = 6371; // Radio de la Tierra en km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en km

    return distance;
};

const isWithin100Meters = (currentLocation, nearbyHistoricCenter) => {
    if (!currentLocation || !nearbyHistoricCenter) {
        return false;
    }

    const distanceInKm = calculateDistance(
        currentLocation,
        nearbyHistoricCenter.position,
    );
    const distanceInMeters = distanceInKm * 1000;

    return distanceInMeters <= 100;
};

export { isWithin100Meters, calculateDistance };
