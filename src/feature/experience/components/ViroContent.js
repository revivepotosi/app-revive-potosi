import React, { useContext, useEffect, useReducer } from 'react';
import {
    Viro3DObject,
    ViroARImageMarker,
    ViroARScene,
    ViroARSceneNavigator,
    ViroARTrackingTargets,
    ViroAmbientLight,
} from '@reactvision/react-viro';
import ExperienceContext from '../../../context/experience/ExperienceContext';

const initialState = experiences => {
    const state = {};
    experiences.forEach(experience => {
        state[experience.id] = {
            rotation: [0, 0, 0],
            scale: [0.5, 0.5, 0.5],
            position: [0, -16, -1],
        };
    });
    return state;
};

const reducer = (state, action) => {
    const { id, type, value } = action;
    switch (type) {
        case 'ROTATE':
            return {
                ...state,
                [id]: {
                    ...state[id],
                    rotation: value,
                },
            };
        case 'SCALE':
            return {
                ...state,
                [id]: {
                    ...state[id],
                    scale: value,
                },
            };
        case 'POSITION':
            return {
                ...state,
                [id]: {
                    ...state[id],
                    position: value,
                },
            };
        default:
            return state;
    }
};

const InitialScene = () => {
    const { experiences, targets } = useContext(ExperienceContext);
    const [state, dispatch] = useReducer(reducer, experiences, initialState);

    const onMove = (id, { location }) => {
        dispatch({ id, type: 'POSITION', value: location });
    };

    const onScale = (id, pinchState, scaleFactor) => {
        if (pinchState === 3) {
            const currentScale = state[id].scale[0];
            const newScaleFactor = scaleFactor > 1 ? 0.1 : -0.1;
            const newScale = currentScale + newScaleFactor;
            const newScaleArray = [newScale, newScale, newScale];
            dispatch({ id, type: 'SCALE', value: newScaleArray });
        }
    };

    const onRotate = (id, rotateState, rotationFactor) => {
        if (rotateState > 1) {
            const currentRotation = state[id].rotation;
            if (rotationFactor > 0) {
                dispatch({
                    id,
                    type: 'ROTATE',
                    value: [
                        currentRotation[0] + 10,
                        currentRotation[1],
                        currentRotation[2],
                    ],
                });
            } else {
                dispatch({
                    id,
                    type: 'ROTATE',
                    value: [
                        currentRotation[0],
                        currentRotation[1],
                        currentRotation[2] + 10,
                    ],
                });
            }
        }
    };

    useEffect(() => {
        ViroARTrackingTargets.createTargets(targets);
    }, []);

    return (
        <ViroARScene>
            { experiences ? experiences.map((experience) => (
                <ViroARImageMarker
                    target={experience.id}
                    key={experience.id}
                    onAnchorFound={() => console.log('se encontro' + experience.text.ES.name)}
                >
                    <ViroAmbientLight color="#ffffff" />
                    <Viro3DObject
                        source={{ uri : experience.model.url }}
                        position={state[experience.id].position}
                        scale={state[experience.id].scale}
                        rotation={state[experience.id].rotation}
                        type="GLB"
                        onDrag={(position) => onMove(experience.id, position)}
                        onPinch={(pinchState, scaleFactor) => onScale(experience.id, pinchState, scaleFactor)}
                        onRotate={(rotateState, rotationFactor) => onRotate(experience.id, rotateState, rotationFactor)}
                    />
                </ViroARImageMarker>
            )) : null}
        </ViroARScene>
    );
};

const ViroContent = () => (
    <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
            scene: InitialScene,
        }}
    />
);

export default ViroContent;
