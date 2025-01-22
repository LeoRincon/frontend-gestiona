import "./styles.css"

export default function DeleteSupplyModal({handleOpenModal}) {
  return(
    <div className='supply-popup-bg'>
      <div className="supply-popup-delete">
        <header>
          <h4>Eliminar</h4>
        </header>
        <main>
            <p>¿Está seguro que desea eliminar este elemento?</p>
        </main>
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