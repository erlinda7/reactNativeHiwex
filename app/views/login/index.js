import React, { Component } from 'react';
import { View, Image, Touchable, TouchableOpacity, Text } from 'react-native';

import Loading from '../../components/loading';
import Button from '../../components/button';
import Input from '../../components/input';

import userImg from '../../assets/icons/usuario.png';

import { styles } from './styles';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: null,
      Password: null,
    };
  }

  render() {
    const { Email, Password } = this.state;
    return (
      <Loading loading={false}>
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Image source={userImg} style={styles.img} />
          </View>

          <View style={styles.subcontainer}>
            <Input
              title="Email"
              custom={{
                value: { Email },
                onChangeText: em => this.setState({ Email: em }),
              }}
            />
            <Input
              title="Password"
              custom={{
                value: { Password },
                onChangeText: psw => this.setState({ Password: psw }),
                secureTextEntry: true,
              }}
            />
            <Button
              title="Login"
              action={() => {
                console.log({ Email, Password });
                this.props.navigation.navigate('CreateUser', { ID: 1 });
                /* auth()
                  .signInWithEmailAndPassword(Email, Password)
                  .then(usr => this.props.navigation.navigate('CreateUser'))
                  .catch(err => console.log({ err })); */
              }}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CreateUser')}>
              <Text
                style={{ color: '#fff', fontWeight: 'bold', marginTop: 10 }}>
                Create An Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Loading>
    );
  }
}

export default Login;
