import "./styles.css"

export default function BeginEndBar(){
    return(
        <div className="season-actions">
            <h2 className="season-number-text">Temporada NªXX</h2> 
            <a className="begin-button" href="#">
                Comenzar
            </a>
            <a className="end-button" href="#">Terminar</a>
        </div>
    )
}