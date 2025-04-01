import { test, describe, beforeEach, vi, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormSignup from '../src/views/components/FormSignup';
import { WrapperTest } from './WrapperTest';
import * as userService from '../src/services/userService';

vi.mock('../src/services/userService', () => ({
 createUser: vi.fn(),
}));

describe('FormSignup Component', () => {
 beforeEach(() => {
  vi.clearAllMocks();
 });

 test('Debe permitir el registro exitoso', async () => {
  userService.createUser.mockResolvedValue({ success: true });

  render(
   <WrapperTest>
    <FormSignup />
   </WrapperTest>
  );

  const nameInput = screen.getByPlaceholderText('Ingrese su nombre completo');
  const emailInput = screen.getByPlaceholderText('Ingrese su correo');
  const passwordInput = screen.getByPlaceholderText('Ingrese su contraseña');
  const signupButton = screen.getByRole('button', { name: /crear cuenta/i });

  await userEvent.type(nameInput, 'Juan Pérez');
  await userEvent.type(emailInput, 'juan@example.com');
  await userEvent.type(passwordInput, 'password123');

  await userEvent.click(signupButton);

  await waitFor(() => {
   expect(userService.createUser).toHaveBeenCalledWith({
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    password: 'password123',
   });
  });
 });

 test('Debe mostrar un error si el registro falla', async () => {
  userService.createUser.mockResolvedValue({
   success: false,
   message: 'Error en el registro',
  });

  render(
   <WrapperTest>
    <FormSignup />
   </WrapperTest>
  );

  const nameInput = screen.getByPlaceholderText('Ingrese su nombre completo');
  const emailInput = screen.getByPlaceholderText('Ingrese su correo');
  const passwordInput = screen.getByPlaceholderText('Ingrese su contraseña');
  const signupButton = screen.getByRole('button', { name: /crear cuenta/i });

  await userEvent.type(nameInput, 'Juan Pérez');
  await userEvent.type(emailInput, 'juan@example.com');
  await userEvent.type(passwordInput, 'password123');

  await userEvent.click(signupButton);

  expect(await screen.findByText(/error en el registro/i)).toBeInTheDocument();
 });
});
