import { useForm } from 'react-hook-form'

import './styles.css'

export default function AddSupplyModal({handleOpenModal}){

  const {register, handleSubmit} =useForm() 

  const onSubmit= handleSubmit((data)=> console.log(data))

  return(
    <div className='popup-bg'>
      <div className="popup-add">
        <header>
          <h4>
            Ingresar Insumo
          </h4>
          </header>
          <body>
            <form onSubmit={onSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <label htmlFor="cantidad">Cantidad disp</label>
              <input type="text" name="nombre" placeholder="Ingrese el nombre del insumo" {...register("nombre")} />
              <input type="text" name="cantidad" placeholder="Ingrese la Cantidad" {...register("cantidad")} />
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
            </form>
          </body> 
      </div>
    </div>
  )
}