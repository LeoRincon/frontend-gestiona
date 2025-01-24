import { useForm } from 'react-hook-form'

import './styles.css'

export default function AddSeasonModal({handleOpenModal,handleAddFetch}){

  const {register, handleSubmit, formState:{errors}} =useForm() 

  const onSubmit= handleSubmit(
    (data)=>{
      const newData= {
                "nombre": data.nombre,
                "duracion": 1,
                "fecha_inicio": data.inicio+"T05:00:00.000Z",
                "fecha_fin": data.inicio+"T05:00:00.000Z",
                "id_cultivo": data.idCultivo,
                "novedades_id": data.idNovedades
              }
      handleAddFetch(newData)
    } 
  )

  return(
    <div className='season-popup-bg'>
      <div className="season-popup-add">
        <header>
          <h4>
            Ingresar Temporada
          </h4>
          </header>
          <main>
            <form className='season-form-add' onSubmit={onSubmit}>
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
                <label htmlFor="inicio">Fecha Inicio</label>
                <input type="date" name="inicio"  {...register("inicio", {
                  required:{value:true,message:"La fecha es obligatoria"},
                })} />
                {errors.inicio && <span>{errors.inicio.message}</span>}
              </div>
              <div>
                <label htmlFor="idCultivo">ID Cultivo</label>
                <input type="text" name="idCultivo" placeholder="Ingrese el id del cultivo" {...register("idCultivo",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idCultivo && <span>{errors.idCultivo.message}</span>}
              </div>

              <div>
                <label htmlFor="idNovedades">ID Novedades</label>
                <input type="text" name="idNovedades" placeholder="Ingrese el id de novedades" {...register("idNovedades",{
                  required:{value:true,message:"El campo es obligatorio"},
                  pattern:{value:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,message:"El campo debe ser un 'uuid'"}
                })} />
                {errors.idNovedades && <span>{errors.idNovedades.message}</span>}
              </div>
              <div className='btn-bar'>
                <button className='btn-submit'>
                  Comenzar
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