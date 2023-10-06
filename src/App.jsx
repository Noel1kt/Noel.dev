import profilePhoto from './assets/img/profile-photo.jpg';
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <section className='section-about'>
      <div className='about-me'>
        <h3>Hola, mi nombre es</h3>
        <h1>Noel Mazariegos.</h1>
        <h2>Desarrollador Front-End</h2>
        <p>Actualmente me especializo en el desarrollo Front-end en el programa ONE de Oracle.
          Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones 
          y la creación de experiencias intuitivas y dinámicas.</p>
      </div>
      <div className='profile-photo'>
        <img className='profile-photo-img' src={profilePhoto} alt="" />
        <div className='profile-contacto'>
          <a className="curriculum" href="https://github.com/tu_usuario_de_github">
            Curriculum Vitae
            <FontAwesomeIcon icon={faFile} 
            className='contact-icon' 

            />
          </a>
        </div>
        
      </div>
    </section>
  
  )
}

export default App