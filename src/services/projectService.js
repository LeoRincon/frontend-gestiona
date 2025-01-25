import {
  API_URL,
  PROJECTS_PATH,
  USERS_HAS_PATH,
  USERS_PATH,
  ROLES_PATH,
} from "../utils/const";
import { isUUIDv4 } from "../utils/validations";

const url = API_URL + PROJECTS_PATH;
const roleUrl = API_URL + ROLES_PATH;
const userHasUrl = API_URL + USERS_HAS_PATH;

export async function fetchProjects() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

export async function createProject(project, userId) {
  if (!project || typeof project !== "object")
    throw new Error("The project must be an object");
  if (!userId || typeof userId !== "string")
    throw new Error("The project must be an string");
  if (!isUUIDv4(userId)) throw new Error("The userId is not a valid UUIDv4");

  const fetchCreateProject = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  const fetchGetRoles = fetch(roleUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [createProjectRes, rolesRes] = await Promise.all([
    fetchCreateProject,
    fetchGetRoles,
  ]);
  if (!createProjectRes.ok) throw new Error("Error al crear el proyecto");
  if (!rolesRes.ok) throw new Error("Error al obtener los roles");

  const [projectData, rolesData] = await Promise.all([
    createProjectRes.json(),
    rolesRes.json(),
  ]);

  const adminRoleId = rolesData.find(
    (role) => role.nombre === "Administrador"
  ).id;

  const userHasData = {
    usuario_id: userId,
    proyecto_id: projectData.id,
    id_rol: adminRoleId,
  };

  const userHasProjectRes = await fetch(userHasUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userHasData),
  });

  if (!userHasProjectRes.ok)
    throw new Error("Error al asignar el proyecto al usuario");

  const userHasProjectData = await userHasProjectRes.json();

  return projectData;
}

export async function getProjectsByUserId(userId) {
  if (!userId) throw new Error("The userId is required");
  if (typeof userId !== "string")
    throw new Error("The userId must be a string");
  if (!isUUIDv4(userId)) throw new Error("The userId is not a valid UUIDv4");

  const urls = {
    userProjectsUrl: `${API_URL}${USERS_PATH}/${userId}${USERS_HAS_PATH}`,
    projectUrl: url,
  };

  const [userProjectsRes, projectsRes] = await Promise.all(
    Object.values(urls).map((url) =>
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    )
  );

  if (![userProjectsRes, projectsRes].every((res) => res.ok)) {
    throw new Error("Error al obtener los proyectos");
  }

  const [userProjectsData, projectsData] = await Promise.all([
    userProjectsRes.json(),
    projectsRes.json(),
  ]);

  const idsUserProjects = userProjectsData.data.map(
    (project) => project.proyecto_id
  );

  const userProjects = projectsData.filter((project) =>
    idsUserProjects.includes(project.id)
  );

  return userProjects;
}
