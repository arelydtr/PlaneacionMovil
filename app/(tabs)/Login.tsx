import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de instalar react-native-vector-icons
const logo = require('../../assets/images/logo.png'); 

const LoginForm = () => {
  const router = useRouter();

  const handlePrivacyPolicyPress = () => {
    router.push({ pathname: '/Registro' });
  };

  const handlePasswordResetPress = () => {
    router.push({ pathname: '/PasswordReset' });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    if (email && password) {
      setIsLoggedIn(true);
      Alert.alert('¡Inicio de sesión exitoso!');
    } else {
      Alert.alert('Error', 'Por favor, ingrese el correo y la contraseña.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo fuera del card */}
      <Image source={logo} style={styles.logo} />

      <View style={styles.card}>
        <Text style={styles.header}>Inicia Sesión</Text>
        <Text style={styles.subheader}>Hola de nuevo</Text>

        <Text style={styles.label}>Usuario:</Text>
        <View style={styles.inputWrapper}>
          <Icon name="user" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Ingrese su nombre de usuario"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Contraseña:</Text>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión →</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handlePrivacyPolicyPress}>
            <Text style={styles.footerLink}>¿No tienes una cuenta? <Text style={styles.link}>Regístrate</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePasswordResetPress}>
            <Text style={styles.footerLink}>¿Olvidaste tu contraseña? <Text style={styles.link}>Actualízala</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    position: 'absolute',
    top: 50,
    width: 380,
    height: 100,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#F3CCAA',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: 'rgb(139, 101, 30)',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: '#007BFF',
  },
});

export default LoginForm;
