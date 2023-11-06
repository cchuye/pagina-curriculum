import React from "react";
import './Titulos.css';

function Titulos({titulo,letra,texto1}){
    return(
        <div>
            <h1 id="titulo">{titulo}</h1>
            <hr className="lineahorizontal"/>
            <h1 id="letra">{letra}</h1>
            <p className="textos">{texto1}</p>
        </div>
    );
}

export default Titulos;