import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Header, Icon } from 'react-native-web/libraries' 

export default class HappyScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Header
      leftComponent = {
        <Icon
        name= "home" type= "fontawesome5" color= "purple"
        onPress = {
          ()=>{
            this.props.navigation.navigate("HomeScreen")
          }
        }
        />
      }
      centerComponent = {{text: "Tips to make your dog happy!", style: {color: "purple", fontSize: 20, fontWeigh: "bold"}}}
      
      backgroundColor = {"white"}/>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
