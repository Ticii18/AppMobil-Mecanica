import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const CallsScreen = () => {
  const [rtData, setRTData] = useState([]);

  async function loadRTData() {
    const suscriber = firestore()
      .collection('Turnos')
      .onSnapshot(QuerySnapshot => {
        const turnos = [];

        QuerySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          const { _seconds, _nanoseconds, ...rest } = data; // Extraer los campos _seconds y _nanoseconds

          turnos.push({
            ...rest,
            key: documentSnapshot.id,
          });
        });

        setRTData(turnos);
      });
    return () => suscriber();
  }

  useEffect(() => {
    loadRTData();
  }, []);

  function renderRTItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => eliminarTurno(item)}
      >
        <View style={styles.callItem}>
          <Text style={styles.text}>Nombre: {item.Nombre}</Text>
          <Text style={styles.text}>Apellido: {item.Apellido}</Text>
          <Text style={styles.text}>DNI: {item.DNI}</Text>
          <Text style={styles.text}>Direccion: {item.Direccion}</Text>
          <Text style={styles.text}>Problema: {item.Problema}</Text>
          <Text style={styles.text}>Telefono: {item.Telefono}</Text>
          <Text style={styles.text}>Turno: {item.Turno}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function eliminarTurno(item) {
    Alert.alert(
      ` Eliminar el turno de : ${item.Nombre} ${item.Apellido}`,
      '¿Esta seguro que desea eliminarlo?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            firestore().collection('Turnos').doc(item.key).delete();
            Alert.alert('El turno se ha eliminado correctamente');
          },
          style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <View style={styles.body}>
      <FlatList
        data={rtData}
        renderItem={renderRTItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#add8e6',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#add8e6',
    paddingTop: 26,
  },
  callItem: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CallsScreen;
 