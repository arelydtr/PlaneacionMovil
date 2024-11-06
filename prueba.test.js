import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Prueba from './prueba';

test('renders text and button correctly', () => {
  const { getByTestId } = render(<Prueba />);

  // Verificar que el texto está en el componente usando testID
  expect(getByTestId('text-element')).toBeTruthy();
  
  // Verificar que el botón está en el componente usando testID
  expect(getByTestId('button-element')).toBeTruthy();
});

test('button press works correctly', () => {
  const onPressMock = jest.fn();
  const { getByTestId } = render(<Prueba onPress={onPressMock} />);

  // Presionar el botón usando testID
  fireEvent.press(getByTestId('button-element'));

  // Verificar que se llamó a la función `onPress`
  expect(onPressMock).toHaveBeenCalledTimes(1);
});
