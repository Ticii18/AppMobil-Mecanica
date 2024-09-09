import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  autoCapitalize,
} from 'react-native';
import { VirtualizedList } from 'react-native';
import firestore from '@react-native-firebase/firestore'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SacarTurno = () => {
  const [nombre, setNombre] = useState('');
  const [nombreError, setNombreError] = useState('');

  const [Apellido, setApellido] = useState('');
  const [apellidoError, setApellidoError] = useState('');

  const [Telefono, setTelefono] = useState('');
  const [telefonoError, setTelefonoError] = useState('');

  const [DNI, setDNI] = useState('');
  const [dniError, setDNIError] = useState('');

  const [fechanacimiento, setfechanacimiento] = useState('');
  const [fechaNacimientoError, setFechaNacimientoError] = useState('');

  const [Direccion, setDireccion] = useState('');
  const [direccionError, setDireccionError] = useState('');

  const [problema, setproblema] = useState('');
  const [problemaError, setProblemaError] = useState('');

  
  const validateNombre = () => {
    if (nombre.trim() === '') {
      return 'El nombre es requerido.';
    }
    return null;
  }

  const validateApellido = () => {
    if (Apellido.trim() === '') {
      return 'El apellido es requerido.';
    }
    return null;
  }

  const validateTelefono = () => {
    const phoneRegex = /^[0-9]{10}$/; // Validación de número de teléfono (10 dígitos)
    if (!Telefono.match(phoneRegex)) {
      return 'Ingrese un número de teléfono válido.';
    }
    return null;
  }

  const validateDNI = () => {
    const dniRegex = /^[0-9]{7,8}$/; // Validación de DNI (7 u 8 dígitos)
    if (!DNI.match(dniRegex)) {
      return 'Ingrese un DNI válido.';
    }
    return null;
  }

  const validateDireccion = () => {
    if (Direccion.trim() === '') {
      return 'La dirección es requerida.';
    }
    return null;
  }

  const validateProblema = () => {
    if (problema.trim() === '') {
      return 'El problema es requerido.';
    }
    return null;
  }

  function validarCampos() {
    let isValid = true;

    if (!nombre) {
      setNombreError('Ingrese su nombre');
      isValid = false;
    } else {
      setNombreError('');
    }

    if (!Apellido) {
      setApellidoError('Ingrese su apellido');
      isValid = false;
    } else {
      setApellidoError('');
    }

    if (!Telefono) {
      setTelefonoError('Ingrese su teléfono');
      isValid = false;
    } else {
      setTelefonoError('');
    }

    if (!DNI) {
      setDNIError('Ingrese su DNI');
      isValid = false;
    } else {
      setDNIError('');
    }

    if (!fechanacimiento) {
      setFechaNacimientoError('Ingrese su fecha de nacimiento');
      isValid = false;
    } else {
      setFechaNacimientoError('');
    }

    if (!Direccion) {
      setDireccionError('Ingrese su dirección');
      isValid = false;
    } else {
      setDireccionError('');
    }

    if (!problema) {
      setProblemaError('Ingrese su problema');
      isValid = false;
    } else {
      setProblemaError('');
    }

    return isValid;
  }

  function subirProducto() {
    const isValid = validarCampos();
  
    if (isValid) {
      try {
        firestore().collection('Turnos').add({
          Nombre: nombre,
          Apellido: Apellido,
          Telefono: Telefono,
          DNI: DNI,
          FechaNacimiento: fechanacimiento,
          Direccion: Direccion,
          Problema: problema,
        });
        // Limpiar los campos después de enviar
        setNombre('');
        setApellido('');
        setTelefono('');
        setDNI('');
        setfechanacimiento('');
        setDireccion('');
        setproblema('');
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert('Error', 'Por favor, complete todos los campos correctamente.', [
        { text: 'OK' },
      ]);
    }
  }
  

  return (
    <View style={styles.body}>
      <ScrollView style={styles.container}>
        <Text style={styles.fieldLabel2}>Rellene el formulario para sacar su turno</Text>
        <Text>{'\n'}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={text => setNombre(text)}
            placeholder="Nombre"
            onBlur={() => setNombreError(validateNombre())}
          />
          {nombreError && <Text style={styles.errorText}>{nombreError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>Apellido:</Text>
          <TextInput
            style={styles.input}
            value={Apellido}
            onChangeText={text => setApellido(text)}
            placeholder="Apellido"
            onBlur={() => setApellidoError(validateApellido())}
          />
          {apellidoError && <Text style={styles.errorText}>{apellidoError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>Teléfono:</Text>
          <TextInput
            style={styles.input}
            value={Telefono}
            onChangeText={text => setTelefono(text)}
            placeholder="Teléfono"
            onBlur={() => setTelefonoError(validateTelefono())}
          />
          {telefonoError && <Text style={styles.errorText}>{telefonoError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>DNI:</Text>
          <TextInput
            style={styles.input}
            value={DNI}
            onChangeText={text => setDNI(text)}
            placeholder="DNI"
            onBlur={() => setDNIError(validateDNI())}
          />
          {dniError && <Text style={styles.errorText}>{dniError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>Fecha de Nacimiento:</Text>
          <TextInput
            style={styles.input}
            value={fechanacimiento}
            onChangeText={text => setfechanacimiento(text)}
            placeholder="Ejemplo 11/11/2023"
            onBlur={() => setFechaNacimientoError()}
          />
          {fechaNacimientoError && <Text style={styles.errorText}>{fechaNacimientoError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>Dirección:</Text>
          <TextInput
            style={styles.input}
            value={Direccion}
            onChangeText={text => setDireccion(text)}
            placeholder="Dirección"
            onBlur={() => setDireccionError(validateDireccion())}
          />
          {direccionError && <Text style={styles.errorText}>{direccionError}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>Problema:</Text>
          <TextInput
            style={styles.input}
            value={problema}
            onChangeText={text => setproblema(text)}
            placeholder="Ingrese su problema"
            onBlur={() => setProblemaError(validateProblema())}
          />
          {problemaError && <Text style={styles.errorText}>{problemaError}</Text>}
        </View>

        <Text>{'\n'}</Text>
        <Button title="Guardar" onPress={subirProducto} style={styles.saveButton} color="black" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#add8e6"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 0,
    backgroundColor: '#add8e6', // Cambia el color de fondo a negro
    width: windowWidth * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: windowHeight * 0.05,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
   // Color de fuente negro
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
    // Color de fuente negro
  }, 
  fieldLabel2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black', // Color de fuente negro
    // backgroundColor: '#87ceeb',
     backgroundColor:'#e0ffff',
  },
  input: {
    height: 40,
    fontWeight: 'bold',
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:'white',
    color: 'black',
    borderWidth: 5, // Ancho del borde en píxeles
    borderColor: '#D8D7D7', // Color de fuente negro
  },
  recordContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Cambia el color de fondo a blanco
    padding: 0,
    marginVertical: 5,
    borderRadius: 5,
  },
  recordText: {
    fontWeight: 'bold',
    color: 'black', // Color de fuente negro
  },
  flatList: {
    maxHeight: windowHeight * 0.3,
  },
  saveButton: {
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: 'black', // Cambia el color de fondo del botón de guardar a negro
  },
  inputContainer: {
    marginBottom: 7, // Espacio entre los campos de entrada
  },
});

export default SacarTurno;