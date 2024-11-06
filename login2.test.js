import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Prueba from './login2';

describe('Prueba - Formulario de Login', () => {
  it('muestra un mensaje de error cuando el usuario o contraseña son incorrectos', async () => {
    const { getByTestId, findByText } = render(<Prueba />);

    fireEvent.changeText(getByTestId('usernameInput'), 'usuario_incorrecto');
    fireEvent.changeText(getByTestId('passwordInput'), 'contraseña_incorrecta');
    fireEvent.press(getByTestId('loginButton'));

    const errorMessage = await findByText('Usuario o contraseña incorrectos');
    expect(errorMessage).toBeTruthy();
  });

  it('muestra un mensaje de éxito cuando el usuario y la contraseña son correctos', async () => {
    const { getByTestId, findByText } = render(<Prueba />);

    fireEvent.changeText(getByTestId('usernameInput'), 'usuario');
    fireEvent.changeText(getByTestId('passwordInput'), 'contraseña');
    fireEvent.press(getByTestId('loginButton'));

    const successMessage = await findByText('¡Bienvenido!');
    expect(successMessage).toBeTruthy();
  });
});
