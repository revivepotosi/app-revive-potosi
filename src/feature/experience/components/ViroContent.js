import React, { useContext, useEffect, useState } from 'react';
import { Viro3DObject, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroAmbientLight } from '@reactvision/react-viro';
import ExperienceContext from '../../../context/experience/ExperienceContext';


const InitialScene = () => {
    const { experiences, targets } = useContext(ExperienceContext);
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState([0.5, 0.5, 0.5]);
    const position = [0, -16, -1];

    const onRotateObject = (rotateState, rotationFactor) => {
        if (rotateState === 3) {
            const currentRotation = [rotation[0] - rotationFactor, rotation[1] - rotationFactor, rotation[2] - rotationFactor];
            setRotation(currentRotation);
        }
    };
    
    const onScaleObject = (pinchState, scaleFactor) => {
        if (pinchState === 3) {
          let currentScale = scale[0];
          let newScale = currentScale * scaleFactor;
          let newScaleArray = [newScale, newScale, newScale];
          setScale(newScaleArray);
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
                    onAnchorRemoved={() => console.log('se removio' + experience.text.ES.name)}
                >
                    <ViroAmbientLight color="#ffffff" />
                    <Viro3DObject
                        source={{ uri : experience.model.url }}
                        position={[0, -16, -1]}
                        scale={[0.5, 0.5, 0.5]}
                        rotation={[-90, 0, 0]}
                        type="GLB" 
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
