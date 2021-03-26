import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@modules/Home';
import PageTest from '@modules/PageTest';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="pageTest" component={PageTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
