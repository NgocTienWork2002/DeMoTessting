/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Header, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import Movie from './Component_Exercise/Movie';
import DetailMovie from './Component_Exercise/Component/DetailMovie';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Movie"
        screenOptions={{
          headerStyle: {backgroundColor: 'tomato'},
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{title: 'Movie Explorer'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailMovie}
          options={{headerShown: false}}
          // options={{
          //   title: 'Movie Detail',
          //   headerBackTitle: 'Back',
          //   headerBackTitleStyle: {color: 'white'},
          //   headerTintColor: 'white',
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
