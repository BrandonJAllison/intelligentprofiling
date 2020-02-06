import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import Logo from '../assets/logo.png'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View>
        <Text style={styles.welcome}>Intelligent Profiling</Text>
        </View>
      <Image
        style={{alignItems:'center', margin:30}}
        source={Logo}
      />
        <View style={styles.container}>

        <Text style={styles.text}>Determine someone’s personality type and discover tips on how to better communicate and influence them.</Text>
        
        
        
          <Button title='START HERE'/>
        

        
      
        <Text style={styles.text}>This application is a component of the Intelligent Communication approach to effective interpersonal communication, brought to you by Intelligent Communication/Quick to Hear by Randy J. Marcoz.
        </Text>
        <Text style={styles.link}>Sign up for my email Newsletter.</Text>
        <Text style={styles.link}>Intelligent Communication
                                  Randy J. Marcoz</Text>
        </View>
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent:'center',
    padding: '2%',
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 60,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text:{
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  link:{
    color: 'green'
  }
});
