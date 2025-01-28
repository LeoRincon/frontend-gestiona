import { useForm } from "react-hook-form";
import React, { forwardRef, useEffect, useState } from "react";
import { CloseButton, PrimaryButton, SecondaryButton } from "../Buttons";
import "./styles.css";
import { fetchSeasons } from "../../../services/seasonServices";
import { fetchUnitMeasurement } from "../../../services/unitMeasurementService";
import { createSale } from "../../../services/saleService";
// import { createSales } from "../../../services/apiSales"

const InsertSalesModal = forwardRef(({ onClose }, ref) => {
  const { register, handleSubmit, reset } = useForm();
  const [seasons, setSeasons] = useState([]);
  const [units, setUnits] = useState([{
    "id": "f1234567-8abc-1234-5678-defabc456789",
    "nombre": "mt2",
    "descripcion": "Unidad de medida para terrenos"
  }]);

  //Se hace un useEffect que se ejecuta al renderizarse el componente
  useEffect(() => {
    //Se crea una función para conectarse a la base de datos y actualizar el estado de las temporadas
    const getSeasons = async () => {
      const response = await fetchSeasons();

      setSeasons(response);
    };

    //Se crea una función para conectarse a la base de datos y actualizar el estado de las unidades de medida
    const getUnits = async () => {
      const data = await fetchUnitMeasurement();

      setUnits(data);
    };

    //se ejecutan las funciones creadas anteriormente
    getSeasons();
    getUnits();
  }, []);

  //funcion que se ejecuta cuando se envía el formulario

  const onSubmit = async (data) => {
    console.log(data);
    //Se están desestructurando todos los datos del formulario en variales independientes
    const {
      temporada,
      fecha_venta: fechaVenta,
      cantidad_vendida: cantidadVendida,
      precio_unitario: precioUnitario,
      precio_total: precioTotal,
      observaciones,
      unidad_medida: unidadMedida,
    } = data;

    //Se esta buscando la temporada en el listado de temporadas, donde el nombre es igual al de los datos del formulario
    const season = seasons.find((season) => season.nombre === temporada);
    //Se esta buscando la unidad de medida en el listado de unidades, donde el nombre es igual al de los datos del formulario
    const unit = units.find((unit) => unit.nombre === unidadMedida);

    //Se esta creando el objeto con los datos necesarios para almacenarlos en la base de datos en la tabla ventas
    const newData = {
      cantidad_vendida: Number(cantidadVendida),
      precio_total: Number(precioTotal),
      fecha_venta: fechaVenta,
      id_temporada: season.id,
      observaciones,
      id_unidad_medida: unit.id,
      precio_unitario: Number(precioUnitario),
    };

    console.log(newData);
    try {
      const newSale = await createSale(newData);

      reset();
      onClose();
    } catch (error) {
      console.error("error creating sale", error);
    }
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <dialog className="insert-modal" ref={ref}>
      <CloseButton onClick={handleCancel} className={"insert-modal__close"} />
      <h2 className="insert-modal__title">Añadir venta</h2>
      <form className="insert-modal__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="insert-modal__form__inputs">
          <label
            className="insert-modal__form__label--temporada"
            htmlFor="temporada"
          >
            Temporada
          </label>
          <select
            list="temporadaList"
            placeholder="Seleccionar Temporada"
            name="temporada"
            id="temporada"
            {...register("temporada")}
          >
            {seasons.map((season, index) => {
              return (
                <option key={season.id} value={season.nombre}>
                  {season.nombre}
                </option>
              );
            })}
          </select>
          <label
            className="insert-modal__form__label--venta"
            htmlFor="fechaVenta"
          >
            Fecha Venta
          </label>
          <input
            type="date"
            name="fecha_venta"
            id="fechaVenta"
            {...register("fecha_venta")}
          />
          <label
            className="insert-modal__form__label--cantidad"
            htmlFor="cantidadVendida"
          >
            Cantidad Vendida
          </label>
          <input
            type="number"
            name="cantidad_vendida"
            id="cantidadVendida"
            placeholder="Ingresa la cantidad vendida"
            {...register("cantidad_vendida")}
          />
          <label htmlFor="unidadMedida">Unidad de medida</label>
          <select
            name="unidad_medida"
            id="unidadMedida"
           
 
            {...register("unidad_medida")}
          >
            {units.map((unit, index) => {
              return (
                <option key={unit.id}   value={unit.nombre}>
                  {unit.nombre}
                </option>
              );
            })}
          </select>
          <label
            className="insert-modal__form__label--unitario"
            htmlFor="precioUnitario"
          >
            Precio Unitario
          </label>
          <input
            type="number"
            id="precioUnitario"
            name="precio_unitario"
            placeholder="Ingrese el valor unitario"
            {...register("precio_unitario")}
          />
          <label
            className="insert-modal__form__label--total"
            htmlFor="precioTotal"
          >
            Precio Total
          </label>
          <input
            type="number"
            id="precioTotal"
            name="precio_total"
            placeholder="Ingrese el precio total"
            {...register("precio_total")}
          />
          <label
            className="insert-modal__form__label--observaciones"
            htmlFor="observaciones"
          >
            Observaciones
          </label>
          <textarea
            rows={3}
            id="observaciones"
            name="observaciones"
            {...register("observaciones")}
          />
        </div>
        <div className="insert-modal__form--buttons">
          <SecondaryButton onClick={handleCancel}>Cancelar</SecondaryButton>
          <PrimaryButton
            className={"insert-modal__form--addButton"}
            type="submit"
          >
            Añadir
          </PrimaryButton>
        </div>
      </form>
    </dialog>
  );
});

InsertSalesModal.displayName = "InsertSales";

export default InsertSalesModal;
