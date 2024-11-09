import { useEffect, useState } from 'react';
import getInfo from '../../../app/api/info/getInfo';

const useInfoScreen = () => {
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState(null);
    const [hasContent, setHasContent] = useState(false);

    useEffect(() => {
        const init = async () => {
            const resInfo = await getInfo();
            setInfo(resInfo);
        };
        init().finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setHasContent(
            info && Array.isArray(info.contents) && info.contents.length > 0,
        );
    }, [info]);

    return {
        loading,
        info,
        hasContent,
    };
};

export default useInfoScreen;
