import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import TabLayout from './_layout'; // Importa el componente de las tabs
const logo = require('../../assets/images/logo.png'); // Asegúrate de que la ruta sea correcta



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    // Lógica para enviar los datos del formulario al servidor y realizar el inicio de sesión
    if (email && password) {
      setIsLoggedIn(true);
      Alert.alert('¡Inicio de sesión exitoso!');
    } else {
      Alert.alert('Error', 'Por favor, ingrese el correo y la contraseña.');
    }
  };

  return (
    

    
    <View style={styles.container}>
                    {/* Aquí inserta el logo */}
                    <Image source={logo} // Usa el logo
                style={styles.logo} // Aplica el estilo que desees
            />

             {/* Aquí inserta el texto descriptivo */}
             <Text style={styles.description}>Inicia Sesión</Text>
        
      <Text style={styles.label}>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {isLoggedIn && <Text style={styles.successMessage}>¡Inicio de sesión exitoso!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    position: 'absolute', // Hace que el logo sea estático
    top: 50,              // Ajusta la posición desde la parte superior
    width: 380,           // Ajusta el ancho del logo
    height: 100,          // Ajusta el alto del logo
},
description: {
    fontSize: 25,         // Tamaño de la fuente
    fontWeight: 'bold',   // Peso de la fuente
    color: '#333',        // Color del texto
    marginTop: 150,       // Espacio desde la parte superior hasta el texto
    textAlign: 'center',  // Centra el texto
},
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});

export default LoginForm;
