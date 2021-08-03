import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class ButtonCustom extends Component {
  //forma 1
  //static propTypes = {
  //label: PropTypes.string,
  //action: PropTypes.func,
  //}; 
  constructor(props) {
    super(props);

    console.log('hijo constructor');
  }

  componentWillMount() {
    console.log('hijo componentWillMount');
  }

  componentDidMount() {
    console.log('hijo componentDidMount');
  }

  render() {
    const {label, action} = this.props;
    console.log('hijo reder');
    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnTxt}>{label}</Text>
      </TouchableOpacity>
    );
  }
} 
//forma 2
ButtonCustom.prototypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};

/* function ButtonCustom(props) {
  const {label, action} = props;
  return (
    <TouchableOpacity style={styles.btn} onPress={action}>
      <Text style={styles.btnTxt}>{label}</Text>
    </TouchableOpacity>
  );
}

ButtonCustom.defaultProps = {
  label: 'Button',
  action: () => null,
};

ButtonCustom.prototypes = {
  // label: PropTypes.string.isRequired,
  label: PropTypes.string,
  action: PropTypes.func,
}; */

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

export default ButtonCustom;
