import ErrorMessageModal from '../ErrorMessageModal'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

import './styles.css'

export default function EditSupplyModal({id, completeData, handleEditModal, handleEditFetch}){
  
  //SI NO SE SELECCIONADO UN REGISTRO RETORNO ESTE MENSAJE
  if(!id){
    return(
      <ErrorMessageModal text="No ha selecionado ningun insumo" handleErrorModal={handleEditModal} />
    )
  }
  const {register, handleSubmit, formState:{errors}, setValue } =useForm()

  //SE TOMAN LOS DATOS DEL SUPPLY SELECIONADO
  const dataValue = completeData.find((value)=>value.id === id)

  //PONER DATOS POR DEFECTO EN LOS INPUTS
  useEffect(()=>{
    setValue("nombre",dataValue.nombre)
    setValue("cantidad",dataValue.cantidad_disponible)
    setValue("ingreso",dataValue.fecha_ingreso)
    setValue("precio",dataValue.precio)
    setValue("idInventario",dataValue.id_inventario)
    setValue("idCategoria",dataValue.id_categoria)
    setValue("idUnidad",dataValue.id_unidad_medida)
  },[])


  const onSubmit= handleSubmit(
    (data)=>{
      const newData= {
                "nombre": data.nombre,
                "cantidad_disponible": parseFloat(data.cantidad),
                "fecha_ingreso": data.ingreso+"T05:00:00.000Z",
                "precio": parseFloat(data.precio),
                "id_inventario": data.idInventario,
                "id_categoria": data.idCategoria,
                "id_unidad_medida": data.idUnidad
              }
          handleEditFetch(newData)
    } 
  )

  return(
    <div className="supply-popup-bg">
      <div className="supply-popup-edit">
        <header>
          <h4>
            Editar insumo
          </h4>
          </header>
          <main>
            <form className="supply-form-edit" onSubmit={onSubmit}>
              <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder={dataValue.nombre} {...register("nombre",{
                  required:{value:true,message:"El nombre es obligatorio"},
                  minLength:{value:2,message:"El nombre debe tener al menos 2 caracteres"},
                  maxLength:{value:100,message:"El nombre no puede tener más de 100 caracteres"},
                })} />
                {errors.nombre && <span>{errors.nombre.message}</span>}
              </div>
              <div>
                <label htmlFor="cantidad">Cantidad disp</label>
                <input type="text" name="cantidad" placeholder={dataValue.cantidad_disponible} {...register("cantidad",{
                  required:{value:true,message:"La cantidad es obligatoria"},
                  pattern:{value:/^[0-9]+([,][0-9]+)?$/,message:"La cantidad debe ser numerica"},
                })} />
                {errors.cantidad && <span>{errors.cantidad.message}</span>}
              </div>
              <div>
                <label htmlFor="date">F. de Ingreso</label>
                <input type="date" name="ingreso"  {...register("ingreso", {
                  required:{value:true,message:"La fecha es obligatoria"},
                })} />
                {errors.ingreso && <span>{errors.ingreso.message}</span>}
              </div>
              <div>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" placeholder={dataValue.precio} {...register("precio", {
                  required:{value:true,message:"El precio es obligatorio"},
                  pattern:{value:/^[0-9]+([,][0-9]+)?$/,message:"El precio debe ser numerico"},
                })} />
                {errors.precio && <span>{errors.precio.message}</span>}
              </div>
              <div>
                <label htmlFor="inventario">Id Inventario</label>
                <input type="text" name="inventario" placeholder={dataValue.id_inventario} {...register("idInventario",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idInventario && <span>{errors.idInventario.message}</span>}
              </div>
              <div>
                <label htmlFor="categoria">Id Categoria</label>
                <input type="text" name="categoria" placeholder={dataValue.id_categoria} {...register("idCategoria",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idCategoria && <span>{errors.idCategoria.message}</span>}
              </div>
              <div>
                <label htmlFor="unidad">Id U. de medida</label>
                <input type="text" name="unidad" placeholder={dataValue.id_unidad_medida} {...register("idUnidad",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idUnidad && <span>{errors.idUnidad.message}</span>}
              </div>
              <div className='btn-bar'>
                <button className='btn-submit'>
                  Enviar
                </button>
                <button className='btn-cancel' type='button' onClick={handleEditModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </main> 
      </div>
    </div>
  )
} 