import React from "react";
import './Header.scss';
//import './imagens/banner.png';
import  mao from './imagens/mao.png';
import android from './imagens/icone-android.png';
import windows from './imagens/icone-windows.png';
import ios from './imagens/icone-ios.png';


const Header = () => {
    return(
        <div className = "Header">
            <div>
                <h1>Notify<span>.</span></h1>
                <p>A great new free psd theme to showcase</p>
                <p>your new application.</p>

                <div className="icone">
                    <span><a>< img src={android} alt="android"/></a></span>
                    <span><a><img src={windows} alt="windows"/></a></span>
                    <span><a><img src={ios} alt="ios"/></a></span>

                </div>
                
            </div>
            <div className="mao">
                <img src={mao} alt="mao"/> 
            </div>

       
        </div>
    )
}

export default Header;