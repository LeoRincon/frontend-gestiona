export async function fetchSeasons() {
  const url = "http://localhost:3000/api/v1/seasons"

  const response = await fetch(url,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await response.json()
  return data
}
