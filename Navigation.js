import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-elements/dist/helpers';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import SacarTurno from './src/screens/Turno';
import CallsScreen from './src/screens/Home';
import Nosotros from './src/screens/Contactanos';
import PantallaPrincipal from './src/screens/PantallaInicio';

const Stack = createStackNavigator();

function PantallaInicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla Inicio" component={PantallaPrincipal} />
      <Stack.Screen name="SacarTurno" component={SacarTurno} />
    </Stack.Navigator>
  );
}

function ListaDeTurnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de turnos" component={CallsScreen} />
      {/* Agrega más pantallas si es necesario */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const screenOptions = route => {
    let iconName;
    switch (route.name) {
      case 'Lista de turnos':
        iconName = 'home';
        break;
      case 'Sacar Turno':
        iconName = 'home';
        break;
      case 'Nosotros':
        iconName = 'home';
        break;
    }
    return <Icon type="font-awesome" name={iconName} size={22} color={color} />;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarActiveTintColor="black"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <Tab.Screen
        name="Home"
        component={PantallaInicioStack}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/Images/home.png')}
              style={{width: 30, height: 24}}
            />
          ),
          showLabel: false,
          tabBarLabel: 'Inicio',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Lista de turnos"
        component={CallsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/Images/turnos.png')}
              style={{width: 30, height: 24}}
            />
          ),
          tabBarLabel: 'Inicio',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />

      {/* <Tab.Screen
        name="Sacar Turno"
        component={SacarTurno}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/Images/agregarr.png')}
              style={{width: 30, height: 24}}
            />
          ),
          tabBarLabel: 'Sacar Turno',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#055a90'},
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Nosotros"
        component={Nosotros}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/Images/info2.png')}
              style={{width: 30, height: 24}}
            />
          ),
          tabBarLabel: 'Sobre Nosotros',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
