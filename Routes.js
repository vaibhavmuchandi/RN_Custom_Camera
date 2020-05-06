import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Dashboard from './Components/UI/Dashboard/Dashboard';
import DentCamera from './Components/Camera/Camera';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "dashboard" component = {Dashboard} initial = {true} />
         <Scene key = "camera" component = {DentCamera} />
      </Scene>
   </Router>
)
export default Routes