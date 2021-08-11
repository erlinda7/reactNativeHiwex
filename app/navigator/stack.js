import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screen
import Routes from './stackRoutes';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Routes.Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="CreateUser" component={Routes.CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
