import React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SingleHome from './screens/SingleHome';
import About from './components/About';
import ContactUs from './components/ContactUs';
import BestServices from './components/BestServices';
import {Icon} from 'react-native-elements';
import AudioBooks from './screens/AudioBooks';
import EBooks from './screens/EBooks';

const Tab = createMaterialTopTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#cdcdcd',
        tabBarLabelStyle: {
          textAlign: 'center',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2,
        },
        tabBarStyle: {
          backgroundColor: '#4a4d4b',
          margin: 10,
          borderRadius: 10,
        },
      }}>
      <Tab.Screen
        name="All Ebooks"
        component={EBooksPage}
        options={{
          tabBarLabel: 'E Books',
          // tabBarIcon: ({color, size}) => (
          //   <Icon name="g-translate" color="#00aced" />
          // ),
        }}
      />
      <Tab.Screen
        name="Audio Books"
        component={AudioBooks}
        options={{
          tabBarLabel: 'Audio Books',
          // tabBarIcon: ({color, size}) => <Icon name="rowing" />,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function EBooksPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="E Books"
        component={EBooks}
        //  options={{headerShown: false}}
      />
      <Stack.Screen name="SingleHome" component={SingleHome} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <Icon name="search" type="ionicon" color="#000" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{headerTitleAlign: 'center'}}
        />
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{headerTitleAlign: 'center'}}
        />
        <Drawer.Screen
          name="BestServices"
          component={BestServices}
          options={{headerTitleAlign: 'center'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
