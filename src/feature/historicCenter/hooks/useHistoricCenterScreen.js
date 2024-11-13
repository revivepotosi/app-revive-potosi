import { useRoute } from '@react-navigation/native';
import useLanguage from '../../../hooks/useLanguage';

const useHistoricCenterScreen = () => {
    const route = useRoute();
    const { languageCode } = useLanguage();
    const { historicCenter } = route?.params;
    const hasContent =
        historicCenter &&
        Array.isArray(historicCenter.contents) &&
        historicCenter.contents.length > 0;

    return {
        languageCode,
        historicCenter,
        hasContent,
    };
};

export default useHistoricCenterScreen;
