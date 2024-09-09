import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import SacarTurno from './Turno';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Nosotros from './Contactanos';

export default function PantallaPrincipal({navigation}) {
  return (
    <View style={styles.container1}>
      <ScrollView>
        <View style={styles.containerImagen}>
          <Image
            source={require('../Images/Logo.jpeg')}
            style={styles.imagen}
          />
          <Text style={styles.nombreEmpresa}> {'\u200B'} DMOTOR'S</Text>
        </View>
        <Text>{'\n'}</Text>
        <Text style={styles.styleText}>Servicios</Text>

        <Text style={styles.instructions}>
          Los servicios que les ofrecemos a nuestros clientes son: Cambio y
          reparacion en la direccion, cambio de extremo de direccion,
          reparacion y cambio de bomba hidraulica,
        </Text>

        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate(SacarTurno)}>
            <Text style={styles.buttonText}>
              <Image
                source={require('../Images/turno.png')}
                style={styles.icon}
              />
              {'\u200B'}  Presione aqui para sacar el turno
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate(Nosotros)}>
            <Text style={styles.buttonText}>
              <Image
                source={require('../Images/info.jpg')}
                style={styles.icon}
              />
              {'\u200B'} Presione aqui saber sobre Nosotros
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
  },
  instructions: {
    color: 'black',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 30,
  },
  sub: {
    color: 'black',
  },
  container1: {
    backgroundColor: '#FDFEFE',
    paddingTop: 0,
    margin: 0,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  container2: {
    backgroundColor: '#ECEFF1',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 30,
    marginTop: 10,
    borderRadius: 130,
  },
  buttonText: {
    padding: 20,
    color: 'black',
    fontSize: 20,
    paddingLeft: 10,
  },
  containerImagen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  nombreEmpresa: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Color del texto
    marginLeft: 10, // Espacio entre la imagen y el nombre
    textAlign: 'center',
  },
  imagen: {
    width: 80,
    height: 80,
  },
});
