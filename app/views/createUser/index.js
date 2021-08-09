import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: 'Hello',
      Password: null,
      Phone: null,
    };
  }

  componentDidMount() {
    const _path = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json';
    const _pathInst = 'https://pokemon-go1.p.rapidapi.com/';
    const _headers = {
      'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
      'x-rapidapi-key': 'cfa115aad1msh305ef3ffc77f4c4p15fe57jsn6029c6a90445',
      useQueryString: true,
    };
    //forma 1
    axios
      .get(_path, {
        headers: _headers,
      })
      .then(res1 => console.log({ res1 }));

    //forma 2
    axios({
      method: 'get',
      headers: _headers,
      url: _path,
    }).then(res2 => console.log({ res2 }));

    //forma 3
    const instAxios = axios.create({
      baseURL: _pathInst,
      headers: _headers,
    });
    instAxios({
      method: 'get',
      url: 'pokemon_stats.json',
    }).then(res3 => console.log({ res3 }));
  }

  render() {
    const { Email, Password, Phone } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Email: </Text>
        <TextInput
          style={styles.text}
          value={Email}
          onChangeText={val => this.setState({ Email: val })}
        />
        <Text style={styles.title}>Password: </Text>
        <TextInput
          secureTextEntry
          style={styles.text}
          value={Password}
          onChangeText={val => this.setState({ Password: val })}
        />
        <Text style={styles.title}>Phone: </Text>
        <TextInput
          style={styles.text}
          value={Phone}
          onChangeText={val => this.setState({ Phone: val })}
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
