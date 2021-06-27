import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import BathScreen from '../screens/BathScreen'
import FoodScreen from '../screens/FoodScreen'
import HappyScreen from '../screens/HappyScreen'
import WalkScreen from '../screens/WalkScreen'
import VaccinstionScreen from '../screens/VaccinationScreen'

export default class HomeScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <ImageBackground source = {require("../assets/PuppyCollage.jpeg")}
      style = {{flex: 1, resizeMode: "cover"}}>
      <ScrollView>
      <Text style = {styles.title}>Dog Tips: The basic guide to take care of your pup!</Text>
      <Image
      source = {require("../assets/DogGif.gif")}
      style = {{width: 300, height: 300, alignSelf: "center", marginTop: 50, borderRadius: 150}}
      />
      <TouchableOpacity style = {styles.button} onPress = {
        ()=>{
          this.props.navigation.navigate("HappyScreen")
        }
      }>
          <Text style={styles.buttonText}>
              Tips to keep your dog happy!
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {
        ()=>{
          this.props.navigation.navigate("FoodScreen")
        }}>
          <Text style={styles.buttonText}>
              Tips to feed your dog!
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress = {
        ()=>{
          this.props.navigation.navigate("BathScreen")
        }}>
          <Text style={styles.buttonText}>
              Tips for bathing your dog!
          </Text>
      </TouchableOpacity>
      <TouchableOpacity  style = {styles.button} onPress = {
        ()=>{
          this.props.navigation.navigate("WalkScreen")
        }}>
          <Text style={styles.buttonText}>
              Tips for taking you dog for a walk!
          </Text>
      </TouchableOpacity>
      <TouchableOpacity  style = {styles.button} onPress = {
        ()=>{
          this.props.navigation.navigate("VaccinationScreen")
        }}>
          <Text style={styles.buttonText}>
              Vaccinations for your dog
          </Text>
      </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },

  title: {
      fontWeight: "bold",
      fontSize: 40,
      alignSelf: "center",
      textAlign: "center",
      justifyContent: "center",
      color: "white"
  },

  button: {
      height: 120,
      width: 200,
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: "purple",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      textAlign: "center"
  },

  buttonText: {
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
      alignSelf: "center",
  },

});