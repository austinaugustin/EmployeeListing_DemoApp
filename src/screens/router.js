
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Profile from './profile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerTitle:''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;