import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import BoardingScreen from './src/views/screens/BoardingScreen';
import COLORS from './src/constants/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import CartScreen from './src/views/screens/CartScreen';
import BottomNavigation from './src/views/navigation/BottomNavigation';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardingScreen" component={BoardingScreen} />
        <Stack.Screen name="HomeScreen" component={BottomNavigation} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
