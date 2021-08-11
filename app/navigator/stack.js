/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screen
import Routes from './stackRoutes';
import { TouchableOpacity, Text, Image } from 'react-native';

import back from '../assets/icons/back.png';

const Stack = createStackNavigator();

const getButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ flexDirection: 'row' }}
    onPress={() => navigation.goBack()}>
    <Image
      source={back}
      style={{
        width: 15,
        height: 15,
        tintColor: '#FFF',
        marginLeft: 5,
        marginRight: 5,
      }}
    />
    <Text style={{ color: '#FFF' }}>Back</Text>
  </TouchableOpacity>
);

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Routes.Login}
          options={{
            headerShown: false, //para que se muestre la barra de arriba
            // headerShown: true,
            //title: 'Lang',
            // headerTitleAlign: 'center', // left
            // header: Header,  // tener una barra personalizada
            // headerRight: Button,
            // headerLeft: Button,
          }}
        />
        <Stack.Screen
          name="Post"
          component={Routes.Posts}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateUser"
          component={Routes.CreateUser}
          options={nav => ({
            title: 'Create User',
            headerStyle: { backgroundColor: '#6685a4' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeft: () => getButton(nav),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
