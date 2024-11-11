import { createContext } from 'react';

export const initialState = {
    experiences: [],
    changeExperiences: () => null,
    targets: [],
    changeTargets: () => null,
    historicCenterID: '',
    changeHistoricCenterID: () => null,
};

const ExperienceContext = createContext(initialState);

export default ExperienceContext;
