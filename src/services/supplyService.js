const url = "http://localhost:3000/api/v1/supplies"

//GET ALL SUPLLIES
export async function fetchSupplies() {
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

//POST SUPPLY
export async function createSupply(supply){
  if (!supply || typeof supply !== "object")
    throw new Error("The SUPPLY must be an object");
  const response = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(supply),
  })
  const data = await response.json();
  return data;
}

//PUT SUPPLY
export async function editSupply(id,supply) {
  if(!id || typeof id !== "string")
    throw new Error("The ID must be an string");
  if(!id || typeof supply !== "object")
    throw new Error("The SUPPLY must be an object");
  const response = await fetch(url+"/"+id,{
    method:"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(supply)
  })
  const data = await response.json()
  return data
}

//DELETE SUPPLY
export async function deleteSupply(id) {
  if(!id || typeof id !== "string")
    throw new Error("The ID must be an string");
  const response = await fetch(url+"/"+id,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
  return data
}