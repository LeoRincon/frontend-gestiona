import "./styles.css"

export default function DeleteSupplyModal({handleOpenModal}) {
  return(
    <div className='popup-bg'>
      <div className="popup-delete">
        <header>
          <h4>Eliminar</h4>
        </header>
        <body>
            <p>¿Está seguro que desea eliminar este elemento?</p>
        </body>
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