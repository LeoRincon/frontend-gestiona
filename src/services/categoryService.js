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

export async function getCatgoryById(id){
  if (!id) {
    console.error("No category ID provided");
    return null;
  }
  try {
    const categoryRes = await fetch(`${categoryUrl}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!categoryRes.ok) throw new Error("Error fetching category");

    const categoryData = await categoryRes.json();

    const { id: categoryId, nombre: name, descripcion: description } = categoryData;

    return {
      categoryId,
      name,
      description,
    };
  } catch (error) {
    console.error("There was an error retrieving the category.", error);
    return null;
  }
}