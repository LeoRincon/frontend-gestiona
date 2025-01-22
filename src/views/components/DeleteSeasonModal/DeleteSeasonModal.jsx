import "./styles.css"

export default function DeleteSeasonModal({handleOpenModal}) {
  return(
    <div className='season-popup-bg'>
      <div className="season-popup-delete">
        <header>
          <h4>Eliminar</h4>
        </header>
        <section>
            <p>¿Está seguro que desea eliminar este elemento?</p>
        </section>
        <footer className='btn-bar'>
          <button className='btn-submit'>
            Aceptar
          </button>
          <button className='btn-cancel' onClick={handleOpenModal}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  )
}