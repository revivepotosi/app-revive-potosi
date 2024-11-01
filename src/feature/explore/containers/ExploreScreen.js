import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroMaterials,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroARImageMarker  
} from '@reactvision/react-viro';
import React, {useState, useEffect } from 'react';
import {StyleSheet,Text} from 'react-native';
import { rotationHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';


//const Modelo2 = require('../../../../assets/models/Chullpa/Chullpa.glb')

//const Models = [
  //{
    const Modelo1 = 'https://firebasestorage.googleapis.com/v0/b/revivepotosi-4e6fb.appspot.com/o/models%2FChullpa.glb?alt=media&token=2178e605-2041-4f77-a2b0-0d125202c325';
  //},
  //{
    const Modelo2 = 'https://firebasestorage.googleapis.com/v0/b/revivepotosi-4e6fb.appspot.com/o/models%2FChullpa.glb?alt=media&token=2178e605-2041-4f77-a2b0-0d125202c325';
  //}

//]
ViroARTrackingTargets.createTargets({
  targetImage: {    
    source: require('../../../../assets/models/Activador/CraneoAc1.jpg'),
    orientation: 'Up',
    physicalWidth: 0.15, // Anchura física en metros
  },
  targetImage2: {    
    source: require('../../../../assets/models/Activador/ChullpaAc.jpg'),
    orientation: 'Up',
    physicalWidth: 0.15, // Anchura física en metros
    
  },
});


const InitialScene = (props) => {
  let data = props.sceneNavigator.viroAppProps;
  const [rotationobject, setRotation] = useState([0, 0, 0]);
  const [scaleobject, setObjetScale] = useState([0.5, 0.5, 0.5]);
  const [positionobject, setPosition] = useState([0, -16, -1]);

  const moveObject = (newPosition) => {
    setPosition(newPosition);
  };

  const rotateObject = (rotateState, rotationFactor, source) => {
    if (rotateState === 3) {
      let currentRotation = [rotationobject[0] - rotationFactor, rotationobject[1] - rotationFactor, rotationobject[2] - rotationFactor];
      console.log("current rotation : ", rotation);
      console.log("rotation factor :", rotationFactor);
      setRotation(currentRotation);
      
    }
  };

  const scaleObject = (pinchState, scaleFactor, source) => {
    if (pinchState === 3) {
      let currentScale = scaleobject[0];
      let newScale = currentScale * scaleFactor;
      let newScaleArray = [newScale, newScale, newScale];
      setObjetScale(newScaleArray);
    }
  };

  const anchorFound = () => {
    console.log("Anchor/Image Detected");
  };

  return (
    <ViroARScene>
      <ViroARImageMarker target="targetImage2" onAnchorFound={anchorFound}>
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject          
          source={{ uri : Modelo2}}
          position={positionobject}
          scale={scaleobject}
          rotation={rotationobject}
          type="GLB" 
          onDrag={rotateObject}
          //onRotate={rotateObject}
          onPinch={scaleObject}
        />
     </ViroARImageMarker>     
    </ViroARScene>
  );
};



export default () => {
  console.log("iniciando experiencia de AR");
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: InitialScene,
      }}
      
    />
  );
  
};