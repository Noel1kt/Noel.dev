import profilePhoto from '../assets/img/profile-photo.jpg';
import '../App.css'

export const About = () => {
    return(
        <section className='section-about'>
        <div className='about-me'>
            <h3>Hola, mi nombre es</h3>
            <h1>Noel Mazariegos.</h1>
            <h2>Desarrollador Front-End.</h2>
            <p>Actualmente me especializo en el desarrollo Front-end en el programa ONE de Oracle.
            Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones 
            y la creación de experiencias intuitivas y dinámicas.</p>
        </div>
        <div className='profile-photo'>
            <img className='profile-photo-img' src={profilePhoto} alt="" />
        </div>
        </section>
    )
}