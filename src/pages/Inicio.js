import Layout from "./Layout"; // Importa el componente Layout
import './Inicio.css';
import yo from '../images/yo2.jpeg';
import yo2 from '../images/yo3.jpeg';
import yo3 from '../images/yo4.jpeg';
import Titulos from "../Components/Titulos/Titulos";
import dedicacion from "../images/dedicacion.png";
import talento from "../images/talento2.png";
import auto from "../images/autoaprendizaje.png";
import honestidad from "../images/Honestidad1.png"

const Inicio = () => {
    return (
        <div>
        <div className="container">
                <div className="cuadro-negro">
                    <div className="nombre-texto">
                    <p>MI NOMBRE ES</p>
                    <p>CAROL CECILIA CHUY</p>
                    <a href="sobremi">
                    <button className="sobre-mi-button">MÁS SOBRE MÍ</button>
                    </a>
                    </div>
            </div>

            <div className="layout-container">
                    <Layout />
                    <div className="imagen-container">
                    <img src={yo} alt="Mi foto" />
                    <img src={yo2} alt="Mi foto" />
                    <img src={yo} alt="Mi foto" />
                    </div>
            </div>
        </div>

        <div className="div-contenedor">
            <div className="inclined-line"></div>
            <div className="cuadro-pequeño">
            <img src={yo3} alt="Mi foto" id="yo"/>
            <h1>HOLA</h1>
                <div className="heart">
                    <span role="img" aria-label="Heart">💛​</span>
                </div>
            <div className="div-info">
                <p>
                    Soy Carol Cecilia Chuy Escobar. Tengo 21 años y soy de Guatemala. 
                    Soy una apasionada de la tecnología y la música, toco el piano y canto en mis tiempos libres.
                    Aunque soy una persona de pocas palabras, valoro profundamente a mis amigos cercanos y 
                    disfruto pasar tiempo en familia. La fe en Dios es fundamental en mi vida. 
                </p>
            </div>
            </div>
        </div>

        <br/><br/><br/><br/>
        <Titulos
          titulo="FORTALEZAS"
          letra="F"
          texto1="Me considero una persona con muchas capacidades, capaz de lograr cualquier cosa que me proponga."
          />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="contenedor-imagenes">
            <div className="contenedor-imagen">
                <img src={dedicacion} alt="Imagen Canto" className="imagenIntereses"/>
                <h4 className="subinteres">Dedicación</h4>
            </div>  
            <div className="contenedor-imagen2">
                <img src={talento} alt="Imagen Canto" className="imagenIntereses"/>
                <h4 className="subinteres">Talento</h4>
            </div> 
            <div className="contenedor-imagen">
                <img src={auto} alt="Imagen Canto" className="imagenIntereses"/>
                <h4 className="subinteres">Autoaprendizaje</h4>
            </div> 
            <div className="contenedor-imagen2">
                <img src={honestidad} alt="Imagen Canto" className="imagenIntereses"/>
                <h4 className="subinteres">Honestidad</h4>
            </div> 
            </div>

        <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
};

export default Inicio;