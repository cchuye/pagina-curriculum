import Layout from "./Layout"; // Importa el componente Layout
import Titulos from "../Components/Titulos/Titulos";
import './Contacto.css';
import email from '../images/email.png';
import telefono from '../images/telefono.png';
import casa from '../images/casa.png';
import facebook from '../images/facebook.png';
import insta from '../images/instagram.png';
import twitter from '../images/twitter.png';

const Contacto = () => {

  function abrirRedSocial(url) {
    // Abre la URL en una nueva ventana
    window.open(url, '_blank');
  }

  return(
    <div>
        <Layout />
        <Titulos
          titulo="CONTÁCTAME"
          letra="C"
          texto1=""
          />
        
        <div className="divcontacto">
        <h3 className="info">Info</h3>
          <div className="divitem">
            <img src={email} className="icon" alt="Email icono"/>
            <h5 className="item">carol.escobar.1116@gmail.com</h5> 
          </div>

          <div className="divitem">
          <img src={telefono} className="icon" alt="Teléfono icono" />
          <h5 className="item">+502 58638874</h5>
          </div>

          <div className="divitem">
          <img src={casa} className="icon" alt="Casa icono" />
          <h5 className="item">32av "A" 27-79 zona 5</h5>
          </div>
        </div>

        <div className="circulo-amarillo"></div>

        <div class="botonesred">
        <button onClick={() => abrirRedSocial('https://www.facebook.com/profile.php?id=100011186324063')} class="botonred">
        <img src={facebook} alt="Botón Face" class="imagenred"/>
        </button>
        <button onClick={() => abrirRedSocial('https://www.instagram.com/carol_chuy/')} class="botonred">
          <img src={insta} alt="Botón Insta" class="imagenred"/>
        </button>
        <button onClick={() => abrirRedSocial('https://twitter.com/CarolChuyE')} class="botonred">
          <img src={twitter} alt="Botón Twitter" class="imagenred"/>
        </button>
</div>

      <br/><br/><br/><br/>

        <br/><br/><br/><br/>
    </div>
  );
};
  
  export default Contacto;