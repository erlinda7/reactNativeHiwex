/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import Button from '../../components/button';

import { styles } from './styles';

const Posts = () => {
  const [arr, setArr] = useState([]);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [refreshing, setRefresh] = useState(false);

  const getData = () => {
    const end = counter + 30;
    const slice = data.slice(counter, end);
    setArr([...arr, ...slice]);
    setCounter(end);
  };

  useEffect(() => {
    const _arr = [];
    for (let index = 0; index < 100; index++) {
      _arr.push({ name: `name ${index}` });
    }
    setData(_arr);
    const end = counter + 30;
    const slice = _arr.slice(counter, end);
    setArr(slice);
    setCounter(end);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        renderItem={({ item, index }) => (
          <Button title={item.name} action={() => console.log(item.name)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 10, width: '100%', backgroundColor: 'black' }}
          />
        )}
        //cuando el array es vacio
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text>Empty</Text>
          </View>
        )}
        // para mostrar en forma horizontal la lista y no en vertical
        //horizontal
        onEndReached={getData} // para poder paginar nuestras listas, de 30 en 30 , cuando llegue al final de la lsita cargue otros 30
        refreshing={refreshing} // si se esta refrescando cuando hacemos hacia arriba deslizar, en false no se refresca
        // se ejecuta cuando se hace refresh hacia abajo desliza
        onRefresh={() => {
          setArr([]);
          setCounter(0);
          console.log('hola');
        }}
      />
    </View>
  );
};

export default Posts;
