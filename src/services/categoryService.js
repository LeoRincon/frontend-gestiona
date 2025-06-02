import { API_URL, CATEGORIES_PATH } from "../utils/const.js";

const categoryUrl = API_URL + CATEGORIES_PATH;

export async function getCategories() {
  try {
    const categoriesRes = await fetch(categoryUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!categoriesRes.ok) throw new Error("Error fetching categories");

    const categoriesData = await categoriesRes.json();

    const newCategories = categoriesData.map((category) => {
      const { id, nombre: name, descripcion: description } = category;

      return {
        id,
        name,
        description,
      };
    });

    return newCategories;
  } catch (error) {
    console.error("There was an error retrieving the categories.", error);
    return [];
  }
}
