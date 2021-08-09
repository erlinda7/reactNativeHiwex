import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function CreateUser() {
  const [Email, setEmail] = useState('Hello');
  const [Password, setPassword] = useState(null);
  const [Phone, setPhone] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email: </Text>
      <TextInput
        style={styles.text}
        value={Email}
        onChangeText={val => setEmail(val)}
      />
      <Text style={styles.title}>Password: </Text>
      <TextInput
        secureTextEntry
        style={styles.text}
        value={Password}
        onChangeText={val => setPassword(val)}
      />
      <Text style={styles.title}>Phone: </Text>
      <TextInput
        style={styles.text}
        value={Phone}
        onChangeText={val => setPhone(val)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          console.log({ Email, Password, Phone });
        }}>
        <Text style={styles.title}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
    color: '#fff',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 45,
    width: '100%',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateUser;
