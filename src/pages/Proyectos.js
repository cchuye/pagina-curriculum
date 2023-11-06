
import './Proyectos.css';
import Layout from "./Layout";
import pro1 from "../images/Imagen1.png"
import pro2 from "../images/Imagen2.jpg"
import pro3 from "../images/Imagen5.png"
import pro4 from "../images/Imagen6.png"
import Titulos from "../Components/Titulos/Titulos";

const Proyectos = () => {

  function abrirRedSocial(url) {
    // Abre la URL en una nueva ventana
    window.open(url, '_blank');
  }

  return (
    <div>
        <div className='contenedorgeneral'>
        <Layout />
        <Titulos
          titulo="MIS PROYECTOS"
          letra="M"
          texto1=""
          />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/>
        <div className='contenedorfotos'>
        <div className='divVertical'>     
        <img src={pro2} alt='proyecto 1' id='foto1'/>
        <img src={pro1} alt='proyecto 2' id='foto2'/>
        <img src={pro3} alt='proyecto 4' id='foto4'/>
        </div>   
        <img src={pro4} alt='proyecto 3' id='foto3'/>
        </div>
        <br/><br/>
        <button onClick={() => abrirRedSocial('https://github.com/cchuye')} className="sobre-mi-button2">GitHub</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/>
        </div>
    </div>
  );
};

export default Proyectos;
