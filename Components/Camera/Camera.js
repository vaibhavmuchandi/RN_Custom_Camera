import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import Sensors from '../Sensors/Sensors';
import CaptureButton from '../UI/CaptureButton/CaptureButton'

export default function DentCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const image = { uri: "http://www.pngonly.com/wp-content/uploads/2017/05/Ruler-PNG-Image.png"};
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  const windowRatio = Dimensions.get('screen').scale;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(photo);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Camera type={type} ref={ref => {
        this.camera = ref;}}>
      <Sensors style={{backgroundColor: 'transparent'}}/>
      <View>
        <Image
            style={{
                resizeMode:'contain',
                width: windowWidth*windowRatio,
                height: 500,
                alignSelf: 'flex-start'
            }}
            source={image}
            />
        </View>
      </Camera>
      <Text onPress={snap}>Capture</Text>
    </View>
  );
}
