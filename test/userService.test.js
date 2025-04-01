import { describe, expect, test, vi } from 'vitest';
import { createUser } from '../src/services/userService';

describe('createUser service', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('debería crear un usuario y devolver una respuesta exitosa', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );

    const response = await createUser({
      nombre: 'Juan Perez',
      email: 'juan@example.com',
      password: 'password123',
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: "Juan Perez",
        email: "juan@example.com",
        password: "password123",
      }),
    });

    expect(response).toEqual({ success: true });
  });

  test('debería manejar errores de red correctamente', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("Error de red")));

    await expect(createUser({
      nombre: "Juan Perez",
      email: "juan@example.com",
      password: "password123",
    })).rejects.toThrow("Error de red");
  });

  test('debería manejar error por datos incompletos', async () => {
    await expect(createUser({})).rejects.toThrow("Incomplete data");
    await expect(createUser({ nombre: "Juan" })).rejects.toThrow("Incomplete data");
    await expect(createUser({ email: "juan@example.com" })).rejects.toThrow("Incomplete data");
    await expect(createUser({ password: "password123" })).rejects.toThrow("Incomplete data");
  });
});
