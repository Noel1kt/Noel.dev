import profilePhoto from '../assets/img/profile-photo.jpg';
import { ContactNav } from '../Components/ContactNav';
import '../App.css'

export const About = () => {
    return(
        <section className='section-about'>
        <ContactNav/>
        <div className='about-me'>
            <h3>Hola, mi nombre es</h3>
            <h1>Noel Mazariegos.</h1>
            <h2>Desarrollador Front-End.</h2>
            <p>Actualmente me especializo en el desarrollo Front-end en el programa ONE de Oracle.
            Me inteteza la creación de efectos de interfaz de usuario, las animaciones 
            y la creación de experiencias intuitivas y dinámicas.</p>
        </div>
        <div className='profile-photo' >
            <div className="center">
                <div className="ball"></div>
                <div className="blubb-1"></div>
                <div className="blubb-2"></div>
                <div className="blubb-3"></div>
                <div className="blubb-4"></div>
                <div className="blubb-5"></div>
                <div className="blubb-6"></div>
                <div className="blubb-7"></div>
                <div className="blubb-8"></div>
                <div className="sparkle-1"></div>
                <div className="sparkle-2"></div>
                <div className="sparkle-3"></div>
                <div className="sparkle-4"></div>
                <div className="sparkle-5"></div>
                <div className="sparkle-6"></div>
                <div className="sparkle-7"></div>
                <div className="sparkle-8"></div>
                <div className="sparkle-9"></div>
                <div className="sparkle-10"></div>
                <img className='profile-photo-img' src={profilePhoto} alt="" />
            </div>
           
        </div>
        </section>
    )
}