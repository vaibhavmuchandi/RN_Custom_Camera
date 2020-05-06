import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import Sensors from '../Sensors/Sensors';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

export default function DentCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const  camRollState  = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  takePictureAndCreateAlbum = async () => {
    console.log('tpaca');
    const { uri } = await this.camera.takePictureAsync();
    console.log('uri', uri);
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('asset', asset);
  };
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1}} type={type} ref={ref => {
        this.camera = ref;
      }}>
      <Sensors/>
      <View style={{paddingTop: 300}}>
        <ImageBackground source={{ uri: 'http://www.pngall.com/wp-content/uploads/2016/06/Ruler-Transparent.png' }} style={{ width: windowWidth, height: 100, zIndex: 100}}/>
      </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={takePictureAndCreateAlbum}>
            <Image source={require('../../assets/capture.png')} style={{width: 80, height: 80}}/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}