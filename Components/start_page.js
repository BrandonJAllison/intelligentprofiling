import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Intelligent Communication and Intelligent Profiling</Text>

        <Text>This application applies the Intelligent Communication approach and the Smart Talk (ST) model to the process of developing a profile of those with whom we communicate.  It is best used as a guide by someone who has completed a training program in Intelligent Communication.  It includes, however, enough information about the Smart Talk to be usable by those without such training.
        </Text>
        
        <Text>Quick Links</Text>
        <Text>Smart Talk Overview</Text>
        <Text>Intelligent Profiling</Text>

        <Button 
        title='Continue'/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});