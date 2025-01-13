import './styles.css'

export default function BeginEndBar(){
    return(
        <div className="season-actions">
            <h2 className='season-number-text'>Temporada NªXX</h2>
            <div className="begin-button">Comenzar</div>
            <div className="end-button">Terminar</div>
        </div>
    )
}