import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
      
      let pic = {
          uri: 'https://misanimales.com/wp-content/uploads/2017/09/nombres-para-perros-peque%C3%B1os.jpg'
      };
      
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Image source={pic} style = {{width: 200, height:150}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});