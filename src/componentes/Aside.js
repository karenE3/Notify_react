import React from "react"
import "./Aside.scss"

const Aside = ({titulo , imagem}) => {
    return(
        <div className="Aside">

            <div>
                <img src={imagem} alt=""/>
            </div>
            <h1>{titulo}</h1>
            <p>
                orem ipsum dolor sit ament, consectetur adipisicing elit. Atque labore,odit ad vel perferendis{""}
            </p>

        </div>
    )
}
export default Aside;