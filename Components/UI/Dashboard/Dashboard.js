import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Dashboard() {
        const goToCamera = () => {
           Actions.camera()
        }
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 60}}>DentArt</Text>
            <Text style={{fontSize: 30}}>Dashboard</Text>
            <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
              paddingTop: 150
            }}
            onPress={goToCamera}>
            <Image source={require('../../../assets/camera.png')} style={{width: 80, height: 80}}/>
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
  });
