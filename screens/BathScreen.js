import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

export default class BathScreen extends React.Component {
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
           <Text style = {{fontWeight: "bold", color: "#FFEE75", marginTop: -100, fontSize: 25, marginLeft: 50, alignSelf: "center"}}>
             Tips to give your dog a bath!
           </Text>
           <Image
           source = {require("../assets/DogBathGif.gif")}
           style = {{width: 200, height: 200, marginTop: 50, borderRadius: 150, alignItems: "center", alignSelf: "center"}}
           />
           <Text style =  {styles.tip}>
             1. Make sure you use a proper shampoo and conditioner, as human products have different standards from dog products.
           </Text>
           <Text style =  {styles.tip}>
             2. The bathing products you pick for your dog should be tailored according to their breeds.
           </Text>
           <Text style = {styles.tip}>
          3. Proper Dog Washing Technique
           </Text>
           <Text style = {styles.tip}>
          - Place your dog in the tub, basin or wash station.
          </Text>
          <Text style = {styles.tip}>
          - Dilute the shampoo with water.
          </Text>
          <Text style = {styles.tip}>
          - Wet your dog using warm water. Checking the temperature with your hand is just fine.
          </Text>
          <Text style = {styles.tip}>
          - Shampoo the dog twice. Make sur you clean every part of the dog.
          </Text>
          <Text style = {styles.tip}>
          - Use the conditioner. Leave it on for a few minutes and then rinse it off.
          </Text>
          <Text style = {styles.tip}>
          - Rinse the dog well until there is no more product on its fur. 
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
  },
});
