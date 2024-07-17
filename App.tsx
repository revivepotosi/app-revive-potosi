import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json'; 
import 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import LanguageProvider from './src/context/language/LanguageProvider';
import GlobalProvider from './src/context/global/GlobalProvider';
import { MaterialIconsPack } from './src/style/material-icons';
import { getCurrentScreenName } from './src/navigation/navigationService';
import ON_BOARDING_ROUTES from './src/feature/onBoarding/navigation/routes';
import HOME_ROUTES from './src/feature/home/navigation/routes'
import ROUTES from './src/navigation/routes';


export default function App() {
    useEffect(() => {
        const backAction = () => {
            const currentRouteName = getCurrentScreenName();

            const isBlockBack = [
                ON_BOARDING_ROUTES.stepOne, 
                ON_BOARDING_ROUTES.stepTwo,
                ON_BOARDING_ROUTES.stepThree,
                ROUTES.initNavigation,
            ].includes(currentRouteName);

            if (isBlockBack) return true;

            const isExitApp = currentRouteName === HOME_ROUTES.home;
            if (isExitApp) {
                BackHandler.exitApp()
                return true;
            }

            return false;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);

    return (
        <>
            <IconRegistry icons={MaterialIconsPack}/>
            <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
                <GlobalProvider>
                    <LanguageProvider>
                        <Navigation />
                    </LanguageProvider>
                </GlobalProvider>
            </ApplicationProvider>
        </>
    );
}
