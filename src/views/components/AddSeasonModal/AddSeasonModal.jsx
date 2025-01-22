import { useForm } from 'react-hook-form'

import './styles.css'

export default function AddSeasonModal({handleOpenModal}){

  const {register, handleSubmit} =useForm() 

  const onSubmit= handleSubmit((data)=> console.log(data))

  return(
    <div className='season-popup-bg'>
      <div className="season-popup-add">
        <header>
          <h4>
            Ingresar Insumo
          </h4>
          </header>
          <section>
            <form onSubmit={onSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <label htmlFor="fecha_inicio">Fecha Inicio</label>
              <input type="text" name="nombre" placeholder="Ingrese el nombre del insumo" {...register("nombre")} />
              <input type="date" name="fecha_inicio"  {...register("fecha_inicio")} />
              <label htmlFor="id_cultivo">ID Cultivo</label>
              <label htmlFor="id_novedades">ID Novedades</label>
              <input type="text" name="id_cultivo" placeholder="Ingrese el id del cultivo" {...register("id_cultivo")} />
              <input type="text" name="id_novedades" placeholder="Ingrese el id de novedades" {...register("id_novedades")} />
              <div className='btn-bar'>
                <button className='btn-submit'>
                  Comenzar
                </button>
                <button className='btn-cancel' type='button' onClick={handleOpenModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </section> 
      </div>
    </div>
  )
}