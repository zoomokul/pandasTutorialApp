// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; // Create a HomePage component
import Chapter1 from './chapters/Chapter1';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import Chapter4 from './chapters/Chapter4';
import Chapter6 from './chapters/Chapter6';
import Chapter7 from './chapters/Chapter7';
import Chapter8 from './chapters/Chapter8';
import Chapter5 from './chapters/Chapter5';
import Chapter9 from './chapters/Chapter9';
import Chapter10 from './chapters/Chapter10';
import Chapter11 from './chapters/Chapter11';
import Chapter12 from './chapters/Chapter12';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Chapter1" component={Chapter1} />
        <Stack.Screen name="Chapter2" component={Chapter2} />
        <Stack.Screen name="Chapter3" component={Chapter3} />
        <Stack.Screen name="Chapter4" component={Chapter4} />
        <Stack.Screen name="Chapter5" component={Chapter5} />
        <Stack.Screen name="Chapter6" component={Chapter6} />
        <Stack.Screen name="Chapter7" component={Chapter7} />
        <Stack.Screen name="Chapter8" component={Chapter8} />
        <Stack.Screen name="Chapter9" component={Chapter9} />
        <Stack.Screen name="Chapter10" component={Chapter10} />
        <Stack.Screen name="Chapter11" component={Chapter11} />
        <Stack.Screen name="Chapter12" component={Chapter12} />
       
        {/* Add screens for other chapters */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
