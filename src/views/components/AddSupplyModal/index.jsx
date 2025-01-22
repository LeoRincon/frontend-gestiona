import { useForm } from 'react-hook-form'

import './styles.css'

export default function AddSupplyModal({handleOpenModal, handleAddFetch}){

  const {register, handleSubmit, formState:{errors} } =useForm() 
  
  const onSubmit= handleSubmit(
    (data)=>{
      // console.log(data)
      handleAddFetch(data)
    } 
  )

  return(
    <div className="supply-popup-bg">
      <div className="supply-popup-add">
        <header>
          <h4>
            Ingresar Insumo
          </h4>
          </header>
          <main>
            <form className="supply-form-add" onSubmit={onSubmit}>
              <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="Ingrese el nombre del insumo" {...register("nombre",{
                  required:{value:true,message:"El nombre es obligatorio"},
                  minLength:{value:2,message:"El nombre debe tener al menos 2 caracteres"},
                  maxLength:{value:100,message:"El nombre no puede tener más de 100 caracteres"},
                })} />
                {errors.nombre && <span>{errors.nombre.message}</span>}
              </div>
              <div>
                <label htmlFor="cantidad">Cantidad disp</label>
                <input type="text" name="cantidad" placeholder="Ingrese la Cantidad" {...register("cantidad",{
                  required:{value:true,message:"La cantidad es obligatoria"},
                  pattern:{value:/^[0-9]+([,][0-9]+)?$/,message:"La cantidad debe ser numerica"},
                })} />
                {errors.cantidad && <span>{errors.cantidad.message}</span>}
              </div>
              <div>
                <label htmlFor="date">F. de Ingreso</label>
                <input type="date" name="ingreso" {...register("ingreso", {
                  required:{value:true,message:"La fecha es obligatoria"},
                })} />
                {errors.ingreso && <span>{errors.ingreso.message}</span>}
              </div>
              <div>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" placeholder="Ingrese el precio" {...register("precio", {
                  required:{value:true,message:"El precio es obligatorio"},
                  pattern:{value:/^[0-9]+([,][0-9]+)?$/,message:"El precio debe ser numerico"},
                })} />
                {errors.precio && <span>{errors.precio.message}</span>}
              </div>
              <div>
                <label htmlFor="inventario">Id Inventario</label>
                <input type="text" name="inventario" placeholder="Ingrese el inventario" {...register("idInventario",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idInventario && <span>{errors.idInventario.message}</span>}
              </div>
              <div>
                <label htmlFor="categoria">Id Categoria</label>
                <input type="text" name="categoria" placeholder="Ingrese la categoria" {...register("idCategoria",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idCategoria && <span>{errors.idCategoria.message}</span>}
              </div>
              <div>
                <label htmlFor="unidad">Id U. de medida</label>
                <input type="text" name="unidad" placeholder="Ingrese la unidad" {...register("idUnidad",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idUnidad && <span>{errors.idUnidad.message}</span>}
              </div>
              <div className='btn-bar'>
                <button className='btn-submit'>
                  Enviar
                </button>
                <button className='btn-cancel' type='button' onClick={handleOpenModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </main> 
      </div>
    </div>
  )
}


{/* <form onSubmit={onSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <label htmlFor="cantidad">Cantidad disp</label>
              <input type="text" name="nombre" placeholder="Ingrese el nombre del insumo" {...register("nombre")} />
              <input type="number" name="cantidad" placeholder="Ingrese la Cantidad" {...register("cantidad",{
                required:{value:true,message:"Se requiere la cantidad"}
              })} />
              <label htmlFor="date">F. de Ingreso</label>
              <label htmlFor="precio">Precio</label>
              <input type="date" name="ingreso" {...register("ingreso")} />
              <input type="text" name="precio" placeholder="Ingrese el precio" {...register("precio")} />
              <label htmlFor="inventario">Id Inventario</label>
              <label htmlFor="categoria">Id Categoria</label>
              <input type="text" name="inventario" placeholder="Ingrese el inventario" {...register("idInventario")} />
              <input type="text" name="categoria" placeholder="Ingrese la categoria" {...register("idCategoria")} />
              <label htmlFor="unidad">Id U. de medida</label>
              <input type="text" name="unidad" placeholder="Ingrese la unidad" {...register("idUnidad")} />
              <div className='btn-bar'>
                <button className='btn-submit'>
                  Enviar
                </button>
                <button className='btn-cancel' type='button' onClick={handleOpenModal}>
                  Cancelar
                </button>
              </div>
            </form> */}