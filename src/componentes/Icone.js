import React from "react"

import "./Icone.scss"


const Icone = ({imagem}) => {
    return(

        <div className="Icone">
            <img src={imagem} alt="icones"/>
        </div>

 )
}
export default Icone;