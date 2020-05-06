import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'

class DentArtApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default DentArtApp
AppRegistry.registerComponent('DentArtApp', () => DentArtApp)