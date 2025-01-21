import { API_URL, PROJECTS_PATH } from "../utils/const";

export async function fetchProjects() {
  const url = API_URL + PROJECTS_PATH;

  const response = await fetch(url, {
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  })

  const data = await response.json()
  
  return data
}

export async function createProject(project) {
  const url = API_URL + PROJECTS_PATH;

  if (!project || typeof project !== "object")
    throw new Error("The project must be an object");
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  const data = await response.json();
  return data;
}
