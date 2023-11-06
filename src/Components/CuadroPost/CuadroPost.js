import React from "react";
import './CuadroPost.css';

function CuadroPost({titulo,informacion,foto,nombre}){
    return(
        <div className="divContenedor">
            <div className="divInfo">
                <div>
                    <div className="imagenClass">
                        <img src={foto} alt="Imagen" id="imgIcono"/>
                    </div> 
                </div>    
            </div>
            <div className="divInfo2">
                <div>
                    <h2>{titulo}</h2>
                </div>
                <div>
                    <p className="parrafo">{informacion}</p>
                    <a href="Contacto">
                    <button className="sobre-mi-button3">CONTÁCTO</button>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default CuadroPost;