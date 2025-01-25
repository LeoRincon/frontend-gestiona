export async function getInformation() {
  const urls = {
    expenses: "http://localhost:3000/api/v1/expenses",
    sales: "http://localhost:3000/api/v1/sales",
    production: "http://localhost:3000/api/v1/product",
    supplies: "http://localhost:3000/api/v1/supplies",
    activitiesManagement: "http://localhost:3000/api/v1/activities-management",
    units: "http://localhost:3000/api/v1/units",
  };

  try {
    const [
      expensesRes,
      salesRes,
      productionRes,
      suppliesRes,
      activitiesManagementRes,
      unitRes,
    ] = await Promise.all(
      Object.values(urls).map((url) =>
        fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
      )
    );

    if (
      ![
        expensesRes,
        salesRes,
        productionRes,
        suppliesRes,
        activitiesManagementRes,
        unitRes,
      ].every((res) => res.ok)
    ) {
      throw new Error("Una o más respuestas de las APIs no fueron exitosas");
    }

    const [
      expensesData,
      salesData,
      productionData,
      suppliesData,
      activitiesManagementData,
      unitData,
    ] = await Promise.all([
      expensesRes.json(),
      salesRes.json(),
      productionRes.json(),
      suppliesRes.json(),
      activitiesManagementRes.json(),
      unitRes.json(),
    ]);

    const expenses = expensesData.map((element, index) => {
      const units = unitData?.units?.find(
        (unit) => unit.id === element.id_unidad_medida
      );
      const supplies = suppliesData?.data?.find(
        (supply) => supply.id === element.id_insumo
      );

      return {
        id: index + 1,
        suppliesName: supplies?.nombre || "No disponible",
        usedQuantity: element.cantidad_usada,
        totalPrice: element.precio_total,
        unit: units?.nombre || "No disponible",
        idSeason: element.id_temporada,
      };
    });

    const sales =
      salesData?.sale?.map((element, index) => {
        const units = unitData?.units?.find(
          (unit) => unit.id === element.id_unidad_medida
        );

        return {
          id: index + 1, // Incremental para el # en la tabla
          soldQuantity: element.cantidad_vendida || 0, // Cantidad vendida
          unitPrice: element.precio_unitario || 0, // Precio unitario
          totalPrice: element.precio_total || 0, // Precio total
          saleDate: element.fecha_venta || "", // Fecha de venta
          observations: element.observaciones || "Sin observaciones", // Observaciones
          unit: units?.nombre || "No disponible", // Unidad de medida
        };
      }) || [];

    const production = 
    productionData?.data?.map((element, index) => {
      const units = unitData?.units?.find(
        (unit) => unit.id === element.id_unidad_medida
      );

      return {
        id: index + 1,
        name: element.nombre,
        harvestedQuantity: element.cantidad_recolectada,
        harvestDate: element.fecha_recoleccion,
        unit: units?.nombre || "No disponible",
      };
    });


    const activityManagements = 
    activitiesManagementData?.data?.map((element, index) => {
      return {
        id: index + 1,
        idActivity: element.id_actividad,
        idSeason: element.id_temporada,
        cost: element.costo,
        supplyExpenseId: element.gasto_insumo_id,
      };
    })
    ;

    return {
      expenses,
      sales,
      production,
      activityManagements,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      expenses: [],
      sales: [],
      production: [],
      activityManagements: [],
    };
  }
}
