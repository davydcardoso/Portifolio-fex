import React from 'react';
import "./styles.css";

const HeaderMenu: React.FC = () => {
    return (
        <div className="container-menu" >
            <h1 className="title-menu" >Faxina Express</h1>
            <ul>
                <li>Inicio</li>
                <li>Sobre Nós</li>
                <li>Blog</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}

export default HeaderMenu;