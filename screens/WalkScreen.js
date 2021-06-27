import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';


export default class WalkScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <ImageBackground source = {require("../assets/PuppyCollage.jpeg")}
      style = {{flex: 1, resizeMode: "cover"}}>
        <ScrollView>
     <TouchableOpacity style = {styles.button}  onPress = {
             ()=>{
               this.props.navigation.navigate("HomeScreen")
             }
           }>
             <Image
             source = {require("../assets/HomeIcon.png")}
             style = {{width: 30, height: 30, marginLeft: 10}}
             />
           </TouchableOpacity>
           <Text style = {{fontWeight: "bold", color: "#FFEE75", marginTop: -100, fontSize: 50, marginLeft: 50, alignSelf: "center"}}>
             Tips for walking your dog!
           </Text>
           <Image
           source = {require("../assets/DogWalkingGif.gif")}
           style = {{width: 200, height: 200, marginTop: 20, borderRadius: 150, alignItems: "center", alignSelf: "center"}}
           />
           <Text style = {styles.tip}>
           1.	Use a Front Clip Harness if your Dog Pulls on the leash
           </Text>
           <Text style = {styles.tip}>
           2.	Bring water for your dog
           </Text>
           <Text style = {styles.tip}>
           3.	Don’t use a retractable leash for your dog
           </Text>
           <Text style = {styles.tip}>
           4.	Make sure your dog has a proper collar in case it gets lost
           </Text>
           <Text style = {styles.tip}>
           5.	Don’t use a retractable leash
           </Text>
           <Text style = {styles.tip}>
           6.	Watch out for the hot ground in the summer, as it’s not good for your dog’s paws
           </Text>
           <Text style = {styles.tip}>
           7.	Bring treats to keep your dog focused
           </Text>
           <Text style = {styles.tip}>
           8.	If you have a small dog, be careful around bigger dogs
           </Text>
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
