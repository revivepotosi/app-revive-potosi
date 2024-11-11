import { useMemo, useState } from 'react';
import ExperienceContext from './ExperienceContext';

const ExperienceProvider = props => {
    const { children } = props;
    const [experiences, setExperiences] = useState(false);
    const [targets, setTargets] = useState(false);
    const [historicCenterID, setHistoricCenterID] = useState('');

    const changeExperiences = newExperiences => setExperiences(newExperiences);
    const changeTargets = newTargets => setTargets(newTargets);
    const changeHistoricCenterID = newHistoricCenterID =>
        setHistoricCenterID(newHistoricCenterID);

    const value = useMemo(
        () => ({
            experiences,
            changeExperiences,
            targets,
            changeTargets,
            historicCenterID,
            changeHistoricCenterID,
        }),
        [experiences, targets, historicCenterID],
    );

    return (
        <ExperienceContext.Provider value={value}>
            {children}
        </ExperienceContext.Provider>
    );
};

export default ExperienceProvider;
