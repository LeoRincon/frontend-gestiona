const url = "http://localhost:3000/api/v1/seasons"

//GET ALL SEASON
export async function fetchSeasons() {
  const response = await fetch(url,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json()
  return data
}

//POST SEASON
export async function createSeason(season) {
  if (!season || typeof season !== "object")
    throw new Error("The SEASON must be an object");
  const response = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(season)
  })
  const data = await response.json()
  return data
}

//PUT SEASON
export async function editSeason(id,season) {
  if(!id || typeof id !== "string")
    throw new Error("The ID must be an string");
  if(!season || typeof season !== "object")
    throw new Error("The SEASON must be an object");
  const response = await fetch(url+"/"+id,{
    method:"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(season)
  })
  const data = response.json()
  return data
}

//DELETE SEASON
export async function deleteSeason(id){
  if(!id || typeof id !== "string")
    throw new Error("The ID must be an string");
  const response = await fetch(url+"/"+id,{
    method:"DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
  const data = response.json()
  return data
}

