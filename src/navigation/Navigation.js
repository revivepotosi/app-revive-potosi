import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from './routes';
import InitNavigation from './InitNavigation';
import OnBoardingNavigation from '../feature/onBoarding/navigation/Navigation';
import AppNavigation from '../feature/home/navigation/AppNavigation';
import { isReadyRef, navigationRef } from './navigationService';
import ExperienceNavigation from '../feature/experience/navigation/Navigation';

const AllStack = createStackNavigator();

const Navigation = () => {
    useEffect(
        () => () => {
            isReadyRef.current = false;
        },
        [],
    );
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}
        >
            <AllStack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
                initialRouteName={ROUTES.initNavigation}
            >
                <AllStack.Screen name={ROUTES.initNavigation} component={InitNavigation} />
                <AllStack.Screen name={ROUTES.onBoardingNavigation} component={OnBoardingNavigation} />
                <AllStack.Screen name={ROUTES.appNavigation} component={AppNavigation} />
                <AllStack.Screen name={ROUTES.experienceNavigation} component={ExperienceNavigation} />
            </AllStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;