import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import BathScreen from './screens/BathScreen'
import FoodScreen from './screens/FoodScreen'
import HappyScreen from './screens/HappyScreen'
import WalkScreen from './screens/WalkScreen'
import HomeScreen from './screens/HomeScreen'
import VaccinationScreen from './screens/VaccinationScreen'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  )}
}
var switchNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  FoodScreen: FoodScreen,
  HappyScreen: HappyScreen,
  WalkScreen: WalkScreen,
  BathScreen: BathScreen,
  VaccinationScreen: VaccinationScreen
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
