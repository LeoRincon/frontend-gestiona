import { API_URL, SALES_PATH, SEASONS_PATH, UNITS_PATH } from "../utils/const";

const salesUrl = API_URL + SALES_PATH;
const seasonsUrl = API_URL + SEASONS_PATH;
const unitsUrl = API_URL + UNITS_PATH;
const urls = [salesUrl, seasonsUrl, unitsUrl];

export async function createSale(sale) {
  try {
    const response = await fetch(salesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sale),
    });
    if (!response.ok) throw new Error("Error creating sale");
    const data = await response.json();

    if (!data.success) throw new Error("Error creating sale");

    return data.sale;
  } catch (error) {
    console.error("Error creating sale: ", error);
  }
}

export async function getSalesData() {
  try {
    const [salesRes, seasonsRes, unitsRes] = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
      )
    );
    if (![salesRes, seasonsRes, unitsRes].every((res) => res.ok)) {
      throw new Error("Una o mas repuestas de la API no fueron exitosas");
    }
    const [salesData, seasonsData, unitsData] = await Promise.all([
      salesRes.json(),
      seasonsRes.json(),
      unitsRes.json(),
    ]);
    const data = salesData.sale.map((sale, index) => {
      const {
        cantidad_vendida: cantidadVendida,
        fecha_venta: fechaVenta,
        id,
        id_temporada: idTemporada,
        id_unidad_medida: idUnidadMedida,
        observaciones,
        precio_total: precioTotal,
        precio_unitario: precioUnitario,
      } = sale;
      const season = seasonsData.find((season) => season.id === idTemporada);
      const unit = unitsData.units.find((unit) => unit.id === idUnidadMedida);

      return {
        id: index + 1,
        temporada: season.nombre,
        fechaVenta,
        cantidadVendida,
        unidadMedida: unit.nombre,
        precioUnitario,
        precioTotal,
        observaciones,
        idSale: id,
        idTemporada,
      };
    });
    return data;
  } catch (error) {
    console.error("error fetching data", error);
    return (data = []);
  }
}
