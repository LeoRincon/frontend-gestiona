import BackButton from "../BackButton";

import "./styles.css"

export default function BeginEndBar({crop}){
    return(
        <div className="season-actions">
            <BackButton />
            <h2 className="season-number-text">Cultivo:  {crop} </h2> 
        </div>
    )
}