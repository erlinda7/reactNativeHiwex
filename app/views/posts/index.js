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

  return (
    <View style={styles.container}>
      <Button
        title="use"
        action={() => {
        }}
      />
      <Button
        title="count"
        action={() => {
        }}
      />
    </View>
  );
};

export default Posts;
