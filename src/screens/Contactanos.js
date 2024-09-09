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

export default function Nosotros() {
  return (
    <View style={styles.container1}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../Images/Logo.jpeg')}
            style={{
              width: 180,
              height: 180,
              marginLeft: 74,
              marginTop: 10,
              borderRadius: 130,
            }}
          />

          <Text style={[styles.styleText]}>Sobre nosotros</Text>

          <Text style={[styles.instructions]}>
            Somos un microemprendimiento de mecanica que se encarga de la reparacion y mantenimiento del sistema de direccion del automovil
          </Text>
        </View>

        <View style={styles.container2}>
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://maps.app.goo.gl/QpAgVKVidYGQ3jqv5');
              }}>
              <Text
                style={{
                  padding: 20,
                  color: 'black',
                  fontSize: 20,
                  paddingLeft: 10,
                }}>
                Donde encontranos
              </Text>
              <Image
                source={require('../Images/ubii.png')}
                style={{
                  width: 300,
                  height: 160,
                  marginLeft: 45,
                  marginTop: 10,
                  borderRadius: 130,
                }}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity >
                            <Text style={{padding: 20,color:'black'}}>
                              <AntDesign name='instagram' style={{fontSize:30,color:'black'}}/>  
                              Optica BV
                            </Text>
                        </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Text style={{padding: 20, color: 'black'}}>
              <Image
                source={require('../Images/whatsapp.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 30,
                  marginTop: 10,
                  borderRadius: 130,
                }}
              />
              : Numero de telefono: 3705010840
            </Text>
            <Text style={{padding: 20, color: 'black'}}>
              <Image
                source={require('../Images/instaa.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 30,
                  marginTop: 10,
                  borderRadius: 130,
                }}
              />
              : Nuestro instagram es: Dmotors.org
            </Text>
            <Text style={{padding: 20, color: 'black'}}>
              <Image
                source={require('../Images/gmail.png')}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 30,
                  marginTop: 10,
                  borderRadius: 130,
                }}
              />
              : Correo electronico de contacto:dmotors@gmail.com
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
    fontSize: 30,
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
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
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
    paddingBottom: 50,
  },
  icono: {
    marginTop: 20,
    marginLeft: -250,
  },
});
