import { API_URL, CROPS_PATH } from "../utils/const";

export async function fetchCrops() {
  const sessionUser = sessionStorage.getItem("user_data");

  if (!sessionUser) {
    console.log("Invalid project ID"); // volver al user a la vista de projects
  }

  const { projectId } = JSON.parse(sessionUser);
  const url = `${API_URL}${CROPS_PATH}/project/${projectId}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { crops } = await response.json();

  const newData = crops.reduce((acumulador, crop, index) => {
    const { nombre, tipo_siembra, fecha_inicio, area_terreno, unit } = crop;

    const newCrop = {
      id: index + 1,
      nombre,
      tipo_siembra,
      fecha_inicio,
      area_terreno,
      unidad: unit.unidad,
      descripcion: unit.nombre,
    };
    acumulador.push(newCrop);
    return acumulador;
  }, []);

  return newData;
}

export async function createCrop(data) {
  const sessionUser = sessionStorage.getItem("user_data");

  if (!sessionUser) throw new Error("Invalid session");

  const { projectId } = JSON.parse(sessionUser);

  if (!projectId) throw new Error("Invalid Project ID");
  if (!data || typeof data !== "object") throw new Error("Data is required");

  data["proyecto_id"] = projectId;
  data["area_terreno"] = Number(data.area_terreno);

  const url = API_URL + CROPS_PATH;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Error creating Crop at service");

  const { crop } = await response.json();
  const { nombre, tipo_siembra, fecha_inicio, area_terreno, unit } = crop;

  return {
    nombre,
    tipo_siembra,
    fecha_inicio,
    area_terreno,
    unidad: unit.unidad,
    descripcion: unit.nombre,
  };
}

export async function deleteCropByName(nameCrop) {
  if (!nameCrop) throw new Error("ID Crop is required");
  if (typeof nameCrop !== "string") throw new Error("ID Crop must be a string");

  const queryUrl = API_URL + "/query";

  const query = {
    key: "nombre",
    value: nameCrop,
    returnValue: "id",
    table: "cultivo",
  };

  const queryRes = await fetch(queryUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  if (!queryRes.ok) throw new Error("Error Fetching Id");

  const queryData = await queryRes.json();

  const idCrop = queryData.data.id;

  const url = `${API_URL}${CROPS_PATH}/${idCrop}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Error Deleting crop");

  return {
    success: true,
  };
}
