/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import CustomButton from './components/button';
import ActionButtons from './components/actionButtons';

//PureComponent es una extension que permite renderizar o no dependiendo si el valor cambio o no
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      flag: false,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePlus10 = this.handlePlus10.bind(this);
  }

  handleUp() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
  }

  handleDown() {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1});
  }

  handleReset() {
    this.setState({counter: 0});
  }

  handlePlus10() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 10});
  }

  //evitar rerenders
  /* shouldComponentUpdate(nextProps, nextState) {
    const {counter} = this.state;
    if (nextState.counter === counter) return false;
    return true;
  } */

  render() {
    const {counter} = this.state;
    console.log('render');
    return (
      <View style={styles.container}>
        <View style={styles.subcontanier}>
          <CustomButton label="-" action={this.handleDown} />
          <View style={styles.counterContanier}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <CustomButton label="+" action={this.handleUp} />
        </View>
        <View style={styles.subcontanierReset}>
          <ActionButtons reset={this.handleReset} plus={this.handlePlus10} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontanier: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  subcontanierReset: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  btnTxt: {
    fontSize: 18,
    color: '#95a5a6',
    fontWeight: 'bold',
  },
  counterContanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  btnReset: {
    height: 50,
    width: '80%',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
