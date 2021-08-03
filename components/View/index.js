import React from 'react';
import {View, StyleSheet} from 'react-native';

function Viewer() {
  return <View style={styles.contanier} />;
}
const styles = StyleSheet.create({
  contanier: {
    height: 45,
    width: '100%',
  },
})

export default Viewer;