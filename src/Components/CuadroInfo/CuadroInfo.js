import React from "react";
import './CuadroInfo.css';

function CuadroInfo({ color, colorletra, anio,colegio,ciclo,descripcion}) {
    return (
        <div className="container">
            <div className="lineaVertical" style={{ backgroundColor: color, color:colorletra}}>
                <h3 className="anio">{anio}</h3>
            </div>
            <div className="container2">
                <h3 className="titulo">{colegio}</h3>
                <h4 className="subtitulo">{ciclo}</h4>
                <p className="texto">{descripcion}</p>
            </div>
        </div>
    );
}

export default CuadroInfo;
