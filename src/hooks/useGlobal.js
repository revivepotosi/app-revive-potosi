import { useContext } from 'react';
import GlobalContext from '../context/global/GlobalContext';

const useGlobal = () => {
    const context = useContext(GlobalContext);
    return { ...context };
};

export default useGlobal;
