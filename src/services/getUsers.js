export async function fetchUsers() {
  const url = "http://localhost:3000/api/v1/users"
  
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const { data } = await response.json()

  const newdata = data.map((user) => {
    return {
      name: user.nombre,
      email: user.email,
    }
  })
  return newdata
}