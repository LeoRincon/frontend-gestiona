export async function fetchSupplies() {
  const url = "http://localhost:3000/api/v1/supplies"

  const response = await fetch(url,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const {data} = await response.json()
  const newData =data.map((supply) => {
    return {
      id: supply.id,
      nombre: supply.nombre,
      cantidad_disponible: supply.cantidad_disponible,
      fecha_ingreso: supply.fecha_ingreso,
      precio: supply.precio,
      id_inventario: supply.id_inventario,
      id_categoria: supply.id_categoria,
      id_unidad_medida: supply.id_unidad_medida,
    }
  })
  return newData
}

// "id": "b6789012-8def-1234-5678-abc456789abc",
//       "nombre": "Semillas de Maíz",
//       "cantidad_disponible": 200,
//       "fecha_ingreso": "2024-01-01T05:00:00.000Z",
//       "precio": 50,
//       "id_inventario": "a5678901-8abc-1234-5678-abc456789abc",
//       "id_categoria": "e3456789-8abc-1234-5678-abc456789def",
//       "id_unidad_medida": "e2345678-9def-1234-5678-abc456789012"
//     }