import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screen
import Routes from './stackRoutes';
import { TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();

const Header = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{ width: '100%', height: 45, backgroundColor: 'red' }} />
);

const Button = () => (
  <TouchableOpacity
    style={{ width: 20, height: 20, backgroundColor: '#000' }}
    onPress={() => console.log('hello')}
  />
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
        <Stack.Screen name="CreateUser" component={Routes.CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
