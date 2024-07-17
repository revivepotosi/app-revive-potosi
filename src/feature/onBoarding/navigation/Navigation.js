import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ROUTES from './routes';
import StepOneScreen from '../containers/StepOneScreen';
import StepTwoScreen from '../containers/StepTwoScreen';
import StepThreeScreen from '../containers/StepThreeScreen';

const Stack = createStackNavigator();

const OnBoardingNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
            gestureEnabled: false,
        }}
        initialRouteName={ROUTES.stepOne}
    >
        <Stack.Screen name={ROUTES.stepOne} component={StepOneScreen} />
        <Stack.Screen name={ROUTES.stepTwo} component={StepTwoScreen} />
        <Stack.Screen name={ROUTES.stepThree} component={StepThreeScreen} />
    </Stack.Navigator>
);

export default OnBoardingNavigation;
