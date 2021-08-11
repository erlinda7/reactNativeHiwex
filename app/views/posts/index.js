/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import Button from '../../components/button';

import { styles } from './styles';

const Posts = () => {
  const arr = [
    { name: 'name 1' },
    { name: 'name 2' },
    { name: 'name 3' },
    { name: 'name 4' },
    { name: 'name 5' },
    { name: 'name 6' },
    { name: 'name 7' },
    { name: 'name 8' },
    { name: 'name 9' },
    { name: 'name 10' },
    { name: 'name 11' },
    { name: 'name 12' },
  ];
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
      />
    </View>
  );
};

export default Posts;
