import { createRef } from 'react';
import { CommonActions } from '@react-navigation/native';

export const isReadyRef = createRef();
export const navigationRef = createRef();

export function navigate(name, params) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.dispatch(
            CommonActions.navigate({
                name,
                params,
            }),
        );
    }
}

export function goBack() {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.goBack()
    }
}

export function reset(index, name, params) {
    if (isReadyRef.current && navigationRef.current) {
        try {
            navigationRef.current.dispatch(
                CommonActions.reset({
                    index,
                    routes: [{ name, params }],
                }),
            );
        } catch (error) {
            console.log(error);
        }
    }
}

export function setOptions(options) {
    if (isReadyRef.current && navigationRef.current) {
        try {
            navigationRef.current.setOptions(options)
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCurrentRoute() {
    return navigationRef?.current?.getRootState()?.routes[0];
}

export function getCurrentScreenName() {
    return navigationRef?.current?.getCurrentRoute()?.name;
}
