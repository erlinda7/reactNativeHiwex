/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import CustomButton from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
  }

  handleDown() {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1});
  }

  render() {
    const {counter} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subcontanier}>
          <CustomButton label="-" action={this.handleDown} />
          <View style={styles.counterContanier}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <CustomButton label="+" action={this.handleUp} />
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
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  btnTxt: {
    fontSize: 25,
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
});

export default App;
