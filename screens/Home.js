import React from 'react'
import { Button, View, Text } from 'react-native';
import {
    createMaterialTopTabNavigator
  } from '@react-navigation/material-top-tabs';

  import 'react-native-gesture-handler';
import AudioBooks from './AudioBooks';
import EBooks from './EBooks';


  const Tab = createMaterialTopTabNavigator();
export default function Home({ navigation: { navigate } }) {
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor:'#cdcdcd',
        tabBarLabelStyle: {
            textAlign: "center",
          },
          tabBarIndicatorStyle: {
              borderBottomColor : "white",
              borderBottomWidth : 2,
            },
          tabBarStyle: {
            backgroundColor: "#4a4d4b",
            margin :10,
            borderRadius : 10
            
          }
        }}>
        <Tab.Screen
          name="EBooks"
          component={EBooks}
          options={{
            tabBarLabel: 'E Books',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //       name="home"
            //       color={color}
            //       size={size}
            //     />
            // ),
          }}  />
        <Tab.Screen
          name="AudioBooks"
          component={AudioBooks}
          options={{
            tabBarLabel: 'Audio Books',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //       name="settings"
            //       color={color}
            //       size={size}
            //     />
            // ),
          }} />
      </Tab.Navigator>
    )
}
