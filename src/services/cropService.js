import { API_URL, CROPS_PATH } from "../utils/const";

export async function fetchCrops() {
  const url = API_URL + CROPS_PATH;

  const response = await fetch(url, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  })

  const {crops} = await response.json()
  console.log("cropservice", crops)

  const newData =crops.reduce ((acumulador, crop)=>{
    const {nombre, tipo_siembra, fecha_inicio, area_terreno} = crop

    const newCrop = {
      nombre,
      tipo_siembra,
      fecha_inicio,
      area_terreno
    }
    acumulador.push(newCrop)
    return acumulador
    
  },[])

  console.log("newData", newData)
  return crops
}