import Layout from "./Layout"; // Importa el componente Layout
import CuadroPost from "../Components/CuadroPost/CuadroPost";
import yo from '../images/yo6.png'; 
import './Sobremi.css';
import Titulos from "../Components/Titulos/Titulos";
import CuadroInfo from "../Components/CuadroInfo/CuadroInfo";
import Porcentaje from "../Components/Porcentaje/Porcentaje";
import gym from '../images/gym.png';
import cantar from '../images/cantar.png';
import piano from '../images/piano1.png';
import crear from '../images/diseñar1.png'
const Sobremi = () => {
    return(
      <div>
          <Layout />
          <CuadroPost
          titulo="ACERCA DE MÍ"
          informacion="Actualmente estoy estudiando Ingeniería en Sistemas de la Información y Ciencias de la Computación para lograr 
          una de mis metas personales. Una de las áreas que más me gustan de mi carrera es el diseño UX/UI, me considero una persona muy
          creativa y me gusta mucho implementar nuevas cosas. También el área de análisis de sistemas me gusta mucho porque hay bastante 
          interacción con los usuarios por el proceso de requerimientos. "
          foto={yo}
          nombre="Carol"
          />
          <div>
          <Titulos
          titulo="EDUCACIÓN"
          letra="E"
          texto1="A lo largo de mi vida he estudiado en diferentes colegios, de cada uno aprendí mucho y siempre he 
          tratado de dar lo mejor de mí "
          />
          </div>
          <br/><br/><br/><br/><br/>
        <div className="contenedor-cuadros">
        <CuadroInfo
          color="#252525"
          colorletra="#D5D5D5"
          anio="2007-2017"
          colegio="Colegio Mixto San Agustín"
          ciclo="Primaria y básicos"
          descripcion="En este colegio pasé la mayor parte de mi vida. Participé en las olimpiadas de física y matemática por mi destreza con números, además me premiaron de parte de la municipalidad y me gradué con honores."
        />

        <CuadroInfo
          color="#F2F052"
          colorletra="#111111"
          anio="2018-2019"
          colegio="Centro de Estudios Diversificados CED"
          ciclo="Bachillerato"
          descripcion="Me gradué de bachillerato en ciencias y letras con orientación en computación, la carrera 
          llamó mucho mi atención que decidí enfocarme en esa área."
        />

        <CuadroInfo
          color="#252525"
          colorletra="#D5D5D5"
          anio="2020-2023"
          colegio="Universidad Mariano Gálvez"
          ciclo="Nivel Universitario"
          descripcion="Actualmente estoy en el cuarto año de la carrera de ingeniería en sistemas de la información y ciencias de la computación"
        />

        <CuadroInfo
          color="#252525"
          colorletra="#D5D5D5"
          anio="2021-2023"
          colegio="Direct English"
          ciclo="Inglés"
          descripcion="Hoy en día estoy en el nivel avanzado de esta academia que me ha ayudado a mejorar mucho mi inglés"
        />
      </div>
      <br/><br/>
      <div>
          <Titulos
          titulo="HABILIDADES"
          letra="H"
          texto1="Me considero una persona habilidosa en distintas áreas, una de ellas es mi capacidad de aprender rápido "
          />
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="contenedorPorcentaje">
      <div className="porcentaje">
        <Porcentaje
        colorfondo="#111111"
        titulo="Programas"
        programa1="Java"
        colorlinea="#0E0C0F"
        porcentaje="85%"
        colorrelleno="#B7B7B7"
        programa2="C#"
        porcentaje2="65%"
        programa3="C++"
        porcentaje3="83%"
        programa4="Python"
        porcentaje4="60%"
        programa5="JavaScript"
        porcentaje5="50%"
        />
        </div>
        <div className="porcentaje">
        <Porcentaje
        colorfondo="#F2F052"
        titulo="Aplicaciones Web y BD"
        colorletra="#111111"
        programa1="HTML"
        colorlinea="#FFFFFF"
        porcentaje="90%"
        colorrelleno="#111111"
        programa2="CSS"
        porcentaje2="80%"
        programa3="Oracle y SQL SERVER"
        porcentaje3="65%"
        programa4="MySQL"
        porcentaje4="80%"
        programa5="Microsoft Office"
        porcentaje5="90%"
        />
        </div>
    </div>
    <br/><br/><br/>
    <Titulos
    titulo="INTERESES"
    letra="I"
    texto1="En mi vida tengo muchos hobbies porque siempre me ha gustado hacer actividades para despejar la mente y tomarme un tiempo para mi. "
    />

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="contenedor-imagenes">
      <div className="contenedor-imagen">
        <img src={cantar} alt="Imagen Canto" className="imagenIntereses"/>
        <h4 className="subinteres">Cantar</h4>
      </div>  
      <div className="contenedor-imagen2">
        <img src={crear} alt="Imagen Canto" className="imagenIntereses"/>
        <h4 className="subinteres">Diseñar</h4>
      </div> 
      <div className="contenedor-imagen">
        <img src={gym} alt="Imagen Canto" className="imagenIntereses"/>
        <h4 className="subinteres">Gym</h4>
      </div> 
      <div className="contenedor-imagen2">
        <img src={piano} alt="Imagen Canto" className="imagenIntereses"/>
        <h4 className="subinteres">Tocar piano</h4>
      </div> 
    </div>

    <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    
  );
  };
  
  export default Sobremi;