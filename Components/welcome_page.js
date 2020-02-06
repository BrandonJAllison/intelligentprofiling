import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Link } from 'react-router-native'
import Logo from '../assets/logo.png'
import LogoBottom from '../assets/bottomlogo.png'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View>
        <Text style={styles.welcome}>Intelligent Profiling</Text>
        </View>
    
        <View style={styles.container}>

        <Text style={styles.text}>Determine someone’s personality type and discover tips on how to better communicate and influence them.</Text>
        
        
        
        <Link to='/start'>
        <TouchableOpacity
         style={styles.buttons}>
         <Text style={{color:'white'}}> START HERE </Text>
        </TouchableOpacity>
        </Link>
        

        
      
        <Text style={styles.text}>This application is a component of the Intelligent Communication approach to effective interpersonal communication, brought to you by Intelligent Communication/Quick to Hear by Randy J. Marcoz.
        </Text>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Image
        style={styles.logoBottom}
        source={Logo}
      />
      <View>
      <Text style={styles.link}>Intelligent Communication</Text>
      <Text style={styles.link}>Randy J. Marcoz</Text>
      </View>
      </View>
        <Text style={styles.link}>Sign up for my email Newsletter.</Text>
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
    backgroundColor: 'whitesmoke',
   
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
    color: '#1DD58D'
  },
  buttons:{
    margin: '10%',
    backgroundColor: '#1DD58D',
    borderRadius: 15,
    borderColor:'black',
    borderWidth:2,
    alignItems:'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    },
    image:{
      width: 150,
      height: 150,
      borderRadius: 10/ 2,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "#1DD58D",
      margin: 20
    },
    logoBottom:{
      width: 75,
      height: 75,
      borderRadius: 5 / 2,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "#1DD58D",
      margin: 20
    }
});
