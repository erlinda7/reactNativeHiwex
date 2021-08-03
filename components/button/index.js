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

  //deprecated
  componentWillMount() {
    console.log('hijo componentWillMount');
  }

  componentDidMount() {
    console.log('hijo componentDidMount');
  }

  //deprecated
  componentWillReceiveProps() {
    //podemos el props insertar al un state local
    console.log(' hijo componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //si se va actualizar o no nuestro componente
    //actualiazacion de estado o props
    console.log({nextProps, nextState});
    console.log('hijo shouldComponentUpdate');
    return true; // si hago render o no , true hace render y false no hace render
    //nos permite controlar el render si los valores son iguales no hacer render
  }

  //deprecated
  componentWillUpdate() {
    //estoy a punto de hacer update
    //para resetear valores globales
    // no es recomendable usar aqui setState
    console.log('hijo componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    //configuraciones de librerias externas
    // dependiendo del los props antes del cambio hacemos alguna accion
    console.log({prevProps, prevState});
    console.log('hijo componentDidUpdate');
  }

  componentWillUnmount() {
    //cada ves que se desmonte un componente
    // para resetear los estados globales de la aplicacion
    console.log('hijo componentWillUnmount');
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
