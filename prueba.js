import React from 'react';
import { Text, Button, View } from 'react-native';

const Prueba = ({ onPress }) => (
  <View>
    <Text testID="text-element">Hola, este es un componente de prueba</Text>
    <Button title="Presionar" onPress={onPress} testID="button-element" />
  </View>
);

export default Prueba;
