import * as React from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/Home';
import SingleHome from './screens/SingleHome';
import {Icon} from 'react-native-elements';

const Drawer = createDrawerNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="All Books"
          component={Home}
          options={({navigation}) => ({
            drawerLabel: 'All Books',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Icon raised name="search" type="ionicon" color="#000" />
            ),
          })}
        />
        <Drawer.Screen
          name="SingleHome"
          component={SingleHome}
          options={{
            drawerLabel: 'Single Book',
            headerTitleAlign: 'center',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
