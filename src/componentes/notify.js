import React from "react";
import './notify.scss' ;
import Aside from "./componentes/Aside"
import settings from "./imagens/icone1.png"
import planet  from "./imagens/icone3.png"
import estrela from "./imagens/icone2.png"


const notify = () => {


    return(
        <div className = "Aside">
            <Aside titulo="Editable Theme" imagem={settings}/>
            <Aside titulo="Flat Design" imagem={estrela}/>
            <Aside titulo="Reach your audience" imagem={planet}/>

       
        </div>
    )
}

export default notify;