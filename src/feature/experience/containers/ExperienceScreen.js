import React from 'react';
import useExperienceScreen from '../hooks/useExperienceScreen';
import Loading from '../../../components/Loading';
import ViroContent from '../components/ViroContent';

const ExperienceScreen = () => {
    const { loading } = useExperienceScreen();

    if (loading) {
        return <Loading />;
    }

    return <ViroContent />;
};

export default ExperienceScreen;
