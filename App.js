import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native'
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Routes from './Components/Routes'

export default class App extends Component {
  render() {
    return (
      
      <NativeRouter>
    
      <Routes/>
      
      
      </NativeRouter>
     
    
    );
  }
}


