import React, { useEffect, useState } from 'react';
import {
  ViewBase,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

import Button from '../../components/button';

import { styles } from './styles';

const Posts = () => {
  const [state, setState] = useState(null);
  const [count, setCount] = useState(null);

  //useEffect(), cuando no tiene un parametro actua como un componentDidMount(), tambien trabaja como componentDidUpdate()
  useEffect(() => {
    //console.log('Hello');
    console.log('update');

    //ejecuta la funcion que estoy retornando despues lo que esta dentro de useEfectt
    return () => console.log('prev'); // se ejecuta antes de que se haga un update de estado, antes de hacer un cambio en los estados
  });

  // como un componentDidMount()
  useEffect(() => {
    console.log('Mount');
  }, []);

  //cuando cambia los parametros que estan como state
  useEffect(() => {
    console.log('update state');
  }, [state, count]);

  return (
    <View style={styles.container}>
      <Button
        title="use"
        action={() => {
          setState(1 + state);
        }}
      />
      <Button
        title="count"
        action={() => {
          setCount(1 + count);
        }}
      />
    </View>
  );
};

export default Posts;
