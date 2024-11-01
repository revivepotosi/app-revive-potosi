import { useMemo, useState } from 'react';
import ExperienceContext from './ExperienceContext';

const ExperienceProvider = (props) => {
    const { children } = props;
    const [experiences, setExperiences] = useState(false);
    const [targets, setTargets] = useState(false);

    const changeExperiences = (newExperiences) => setExperiences(newExperiences);
    const changeTargets = (newTargets) => setTargets(newTargets);

    const value = useMemo(() => ({
        experiences,
        changeExperiences,
        targets,
        changeTargets,
    }), [experiences, targets]);

    return (
        <ExperienceContext.Provider value={value}>{children}</ExperienceContext.Provider>
    );
};

export default ExperienceProvider;
