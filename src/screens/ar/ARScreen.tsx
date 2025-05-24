import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroTrackingState,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';

// Define materials for the billboard
ViroMaterials.createMaterials({
  billboard: {
    diffuseColor: '#FFFFFF',
  },
});

const InitialScene = () => {
  const [text, setText] = useState('Initializing AR...');

  const onInitialized = (state: ViroTrackingState, reason: ViroTrackingReason) => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Move your phone to find a surface');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setText('No surface detected');
    }
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => {}}>
        <ViroBox
          position={[0, 0.5, 0]}
          scale={[1, 1, 0.1]}
          materials={['billboard']}
        />
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, 0]}
          style={styles.helloWorldTextStyle}
        />
      </ViroNode>
    </ViroARScene>
  );
};

export const ARScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: InitialScene,
        }}
        style={styles.arView}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Place Billboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arView: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
}); 