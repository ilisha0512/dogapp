import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'

export default class HappyScreen extends React.Component {
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
             style = {{width: 30, height: 30, marginLeft: 10,}}
             />
           </TouchableOpacity>
           <Text style = {{fontWeight: "bold", color: "#FFEE75", marginTop: -100, fontSize: 50, marginLeft: 50, alignSelf: "center"}}>
             Tips for keeping your dog happy!
           </Text>
           <Image
           source = {require("../assets/HappyDogGif.gif")}
           style = {{width: 200, height: 200, marginTop: 20, borderRadius: 150, alignItems: "center", alignSelf: "center"}}
           />
           <Text style = {styles.tip}>
           1.	Provide proper shelter.
           </Text>
           <Text style = {styles.tip}>
           2.	Provide clean and comfortable bedding.
           </Text>
           <Text style = {styles.tip}>
           3.	Provide pure and fresh water.
           </Text>
           <Text style = {styles.tip}>
           4.	Feed your dog high-quality pet food.
           </Text>
           <Text style = {styles.tip}>
           5.	Maintain proper body weight of the dog by taking it out to exercise daily.
           </Text>
           <Text style = {styles.tip}>
           6.	Maintain a happy environment around your dog.
           </Text>
           <Text style = {styles.tip}>
           7.	Play with your dog daily.
           </Text>
           <Text style = {styles.tip}>
           8.	Take your dog to the vet at least once a year.
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
