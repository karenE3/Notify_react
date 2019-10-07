import React from "react";
import './Header.scss';
//import './imagens/banner.png';
import  mao from './imagens/mao.png';
import Icone from './Icone';
import { isObject } from "util";
import android from './imagens/icone-android.png';
import ios from './imagens/icone-ios.png';
import windows from './imagens/icone-windows.png';



const Header = () => {
    return(
        <div className = "Header">
            <div>
                <h1>Notify<span>.</span></h1>
                <p>A great new free psd theme to showcase</p>
                <p>your new application.</p>
            
            
                <Icone imagem={android}/>
                <Icone imagem={ios}/>
                <Icone imagem={windows}/>
            </div>
                
            
            <div className="mao">
                <img src={mao} alt="mao"/> 
            </div>


       
        </div>
    )
}

export default Header;