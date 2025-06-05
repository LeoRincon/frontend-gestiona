import { describe, expect, test, vi } from 'vitest';
import { createActivity } from '../src/services/activitiesService';
import * as categoryService from '../src/services/categoryService';

describe('createActivity service', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('debería crear una actividad y devolver una respuesta exitosa', async () => {

    vi.spyOn(categoryService, 'getCatgoryById').mockResolvedValue({
         name: 'Categoría de prueba',
        description: 'Descripción de prueba',
    });

    global.fetch = vi.fn(() =>
       Promise.resolve({
             ok: true,
            status: 200,
            json: () => Promise.resolve({
                    activity: {
                    id: '123',
                    nombre: 'Prueba Post',
                     descripcion: 'Vitest-Prueba Post Activity',
                    id_categoria: 'e3456789-8abc-1234-5678-abc456789def',
                 },
             }),
        })
    );


    const response = await createActivity({
      nombre: 'Prueba Post',
      descripcion: 'Vitest-Prueba Post Activity',
      id_categoria: 'e3456789-8abc-1234-5678-abc456789def',
    });


    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/v1/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: 'Prueba Post',
        descripcion: 'Vitest-Prueba Post Activity',
        id_categoria: 'e3456789-8abc-1234-5678-abc456789def'
        }),
    });

    expect(response).toEqual({
        idActivity: '123',
        name: 'Prueba Post',
        description: 'Vitest-Prueba Post Activity',
        idCategory: 'e3456789-8abc-1234-5678-abc456789def',
        category: 'Categoría de prueba',
        categoryDescription: 'Descripción de prueba',
        });
    });

});