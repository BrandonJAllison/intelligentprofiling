import React, { useEffect } from 'react'
import { Switch, withRouter, Route, Redirect } from 'react-router-native'
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import Welcome from './welcome_page.js'
import Start from './start_page.js'
import Selection from './selection_screen'
import Quiz from './Questionare/q1_4'

const Routes = props => {
    return(
     
      <Switch>
      <Route exact path="/" component={Quiz} />
      <Route path="/start" component={Start} />
      <Route path="/selection" component={Selection} />
      </Switch>
      

    )
    

}

export default Routes