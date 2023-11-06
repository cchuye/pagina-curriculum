import React from "react";
import './Porcentaje.css';

function Porcentaje({colorfondo,colorletratitulo,titulo,colorletra,programa1, colorlinea,porcentaje, colorrelleno,programa2, porcentaje2,programa3, porcentaje3,programa4, porcentaje4,programa5, porcentaje5}){
    return(
        <div>
           <div className="cuadro" style={{ backgroundColor: colorfondo}}>
            <h2 id="programa" style={{ color: colorletra}}>{titulo}</h2><br/>
            <h2 className="nomProgramas" style={{ color: colorletra}}>{programa1}</h2>
            <div className="linea" style={{backgroundColor: colorlinea}}>
            <div className="relleno" style={{ width: porcentaje, backgroundColor: colorrelleno }}></div>
            <div className="circulo" style={{backgroundColor: colorrelleno}}></div>
            </div>
            <h2 className="nomProgramas" style={{ color: colorletra}}>{programa2}</h2>
            <div className="linea" style={{backgroundColor: colorlinea}}>
            <div className="relleno" style={{ width: porcentaje2, backgroundColor: colorrelleno }}></div>
            <div className="circulo" style={{backgroundColor: colorrelleno}}></div>
            </div>
            <h2 className="nomProgramas" style={{ color: colorletra}}>{programa3}</h2>
            <div className="linea" style={{backgroundColor: colorlinea}}>
            <div className="relleno" style={{ width: porcentaje3, backgroundColor: colorrelleno }}></div>
            <div className="circulo" style={{backgroundColor: colorrelleno}}></div>
            </div>
            <h2 className="nomProgramas" style={{ color: colorletra}}>{programa4}</h2>
            <div className="linea" style={{backgroundColor: colorlinea}}>
            <div className="relleno" style={{ width: porcentaje4, backgroundColor: colorrelleno }}></div>
            <div className="circulo" style={{backgroundColor: colorrelleno}}></div>
            </div>
            <h2 className="nomProgramas" style={{ color: colorletra}}>{programa5}</h2>
            <div className="linea" style={{backgroundColor: colorlinea}}>
            <div className="relleno" style={{ width: porcentaje5, backgroundColor: colorrelleno }}></div>
            <div className="circulo" style={{backgroundColor: colorrelleno}}></div>
            </div>
           </div>
        </div>
    );
}

export default Porcentaje;