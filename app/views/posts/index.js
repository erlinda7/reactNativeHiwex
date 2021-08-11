import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

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
      <ScrollView>
        {arr.map(i => (
          <Button title={i.name} action={() => console.log(i.name)} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Posts;
