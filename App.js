/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import CreateUser from './app/views/createUser';
import Login from './app/views/login';
import AppStack from './app/navigator/stack';
class App extends Component {
  render() {
    return <AppStack />;
  }
}

export default App;
