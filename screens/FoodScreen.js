import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

export default class FoodScreen extends React.Component {
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
             Tips to feed your dog!
           </Text>

           <Image
           source = {require("../assets/DogEatingGif.gif")}
           style = {{width: 200, height: 200, marginTop: 20, borderRadius: 150, alignItems: "center", alignSelf: "center",}}
           />
       
      <Text style = {styles.tip}>
        1. Be sure to evaluate the ingredients in the food, as some can harms the dog.
      </Text>
      <Text style = {styles.tip}>
        2. Keep the number of treats your dog gets limited.
      </Text>
      <Text style = {styles.tip}>
        3. Be sure to tailor your dog's diet according to their specific needs.
      </Text>
      <Text style = {styles.tip}>
        4. Avoid feeding your dog foods which have a high quantity of fat and/or sugar.
      </Text>
      <Text style = {styles.tip}>
        5. The food you feed your dog should depend on their age, body condition, activity level and the calore and nutrient quantity in their diet.
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
  tip: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 10,
    color: "#FFDF00"
  },
  button: {
    width: 100,
    height: 100,
    marginTop: 25,
    marginLeft: -8
  },
});
