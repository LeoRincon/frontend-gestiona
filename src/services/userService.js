import { API_URL, USERS_PATH, LOGIN_PATH } from "../utils/const";

const url = API_URL + USERS_PATH;
const loginUrl = API_URL + LOGIN_PATH

export async function fetchUsers() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();

  const newdata = data.map((user) => {
    return {
      name: user.nombre,
      email: user.email,
    };
  });
  return newdata;
}

export async function createUser(data) {
  if (!data || !data.nombre || !data.email || !data.password) {
    throw new Error("Incomplete data");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
}

export async function loginUser(data){
  if (!data || !data.email || !data.password) {
    throw new Error("Incomplete data");
  }
  
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();
  if(result.error) throw new Error(result.error)
  
  return result
}
