import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Intelligent Communication</Text>
        <Text style={styles.welcome2}>Intelligent Profiling
        </Text>
        <View>
        <Text style={styles.heading}>Effective Interpersonal Communication Skills</Text>
        <Text style={styles.text}>Whether you are trying to close deals, teach students, conduct interviews, or simply understand others and make yourself understood, you need skills that will make your interpersonal communication more effective.</Text>
        </View>
        <View>
        <Text style={styles.heading}>You need Smart Talk</Text>
        <Text style={styles.text}>Smart Talk (Intelligent Communication) is an aspirational way of communication.  One would generally believe that anyone who is concerned with their communication would want to communicate intelligently.  According to the Merriam-Webster definition of intelligent, this would mean to desire to communicate in a way that reveals or reflects good judgment or sound thought.  Whether in your professional communication or in personal interactions, this would seem to be a laudable goal.  It does not come, however, without some effort.  The problem is we generally don’t want to put in the effort required.</Text>
        </View>

        <View style={{flexDirection:'row'}}>
        {/* <Button 
        style={styles.buttons}
        title='Profiling'/>
        <Button 
        title='Smart Talk'/> */}
        <TouchableOpacity
         style={styles.buttons}>
        <Link to='/start'>
         <Text style={{color:'white'}}> PROFILING </Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.buttons}>
         <Text style={{color:'white'}}> SMART TALK </Text>
        </TouchableOpacity>
        </View>
        
        
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    alignItems: 'center',
    textAlign: 'center',
    padding:'2%',
    backgroundColor: 'whitesmoke',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    
  },
  welcome2: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 100
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  heading:{
    fontSize: 17,
    color:'#1DD58D',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -.5, height: .7},
    textShadowRadius: 1
  },
  text:{
    fontSize: 12,
    marginTop: 10
,
marginBottom: 10
  },
  buttons:{
    margin: '20%',
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
  
    
});