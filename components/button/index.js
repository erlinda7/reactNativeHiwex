import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

/* class Button extends Component {
  render() {
    const {label, action} = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnTxt}>{label}</Text>
      </TouchableOpacity>
    );
  }
} */

function Button(props) {
  const {label, action} = props;
  return (
    <TouchableOpacity style={styles.btn} onPress={action}>
      <Text style={styles.btnTxt}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});

export default Button;
