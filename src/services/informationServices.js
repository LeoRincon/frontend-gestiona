export async function getInformation() {
  const url = "http://localhost:3000/api/v1/expenses";
  const urlSales = "http://localhost:3000/api/v1/sales";
  const urlProduction = "http://localhost:3000/api/v1/product";
  const urlSupplies = "http://localhost:3000/api/v1/supplies";
  const urlActivitiesManagement = "http://localhost:3000/api/v1/activity_management";

  const response = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
  const data = await response.json();

  const responseVentas = await fetch(urlSales, { method: "GET", headers: { "Content-Type": "application/json" } });
  const salesData = await responseVentas.json();

  const responseProduccion = await fetch(urlProduction, { method: "GET", headers: { "Content-Type": "application/json" } });
  const productionData  = await responseProduccion.json();

  const responseInsumos = await fetch(urlSupplies, { method: "GET", headers: { "Content-Type": "application/json" } });
  const suppliesData = await responseInsumos.json();

  const responseGestionActividades = await fetch(urlActivitiesManagement, { method: "GET", headers: { "Content-Type": "application/json" } });
  const activityManagementData = await responseGestionActividades.json();

  return {
      expenses: data,
      sales: salesData,
      production: productionData,
      supplies: suppliesData,
      activityManagements: activityManagementData,
  };
}