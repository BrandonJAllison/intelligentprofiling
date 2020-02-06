import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Intelligent Communication</Text>
        <Text style={styles.welcome}>Intelligent Profiling
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
        <Button 
        title='Profiling'/>
        <Button 
        title='Smart Talk'/>
        </View>
        
        
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
    padding:'2%',
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
  heading:{
    fontSize: 17,
    color:'green',
  },
  text:{
    fontSize: 12,
    marginTop: 10
,
marginBottom: 10
  },
});