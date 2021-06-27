import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'

export default class HappyScreen extends React.Component {
  render(){
  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source = {require("../assets/PuppyCollage.jpeg")}
      style = {{flex: 1, resizeMode: "cover"}}>
     <TouchableOpacity style = {styles.button}  onPress = {
             ()=>{
               this.props.navigation.navigate("HomeScreen")
             }
           }>
             <Image
             source = {require("../assets/HomeIcon.png")}
             style = {{width: 30, height: 30, marginLeft: 10,}}
             />
           </TouchableOpacity>
           
           <Text style = {{fontWeight: "bold", color: "#FFEE75", marginTop: -100, fontSize: 25, marginLeft: 50, alignSelf: "center"}}>
             The vaccination schedule for your dog!
           </Text>
           
           <Image
           source = {require("../assets/DogVaccineSchedule.jpg")}
           style = {{resizeMode: "cover", marginTop: 50,  alignItems: "center", alignSelf: "center"}}
           />
           
           </ImageBackground>
    </View>
    </ScrollView>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  button: {
    width: 100,
    height: 100,
    marginTop: 25,
    marginLeft: -8
  },
  tip: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 10,
    color: "#FFDF00"
  }
});
