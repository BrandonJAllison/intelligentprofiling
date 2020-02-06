import React, { useEffect } from 'react'
import { Switch, withRouter, Route, Redirect } from 'react-router-native'
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import Welcome from './welcome_page.js'
import Start from './start_page.js'

const Routes = props => {
    return(
     
      <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/start" component={Start} />
      </Switch>
      

    )
    

}

export default Routes