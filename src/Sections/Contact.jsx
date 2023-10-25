import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" 
import { faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"
import '../App.css'

export const Contact = () => {
    return(
        <section className="section-contact">
            <h1>Contáctame</h1>
            <p>Actualmente no estoy buscando nuevas oportunidades,
            pero puedes mandarme un mensaje en cualquiera de mis redes, ¡te contestaré lo antes posible!</p>
            <ul>
                <li><a href="https://github.com/Noel1kt" target="_blank"><FontAwesomeIcon className="icon-contact" size="4x" icon={faSquareGithub} /></a></li>
                <li><a href="mailto:noelmazariegospc@gmail.com" target="_blank"><FontAwesomeIcon className="icon-contact" size="4x"  icon={faEnvelope} /></a></li>
                <li><a href="https://www.linkedin.com/in/noel-mazariegos/" target="_blank"><FontAwesomeIcon className="icon-contact" size="4x"  icon={faLinkedin} /></a></li>
                <li><a href="https://www.instagram.com/noel1kt" target="_blank"><FontAwesomeIcon className="icon-contact" size="4x"  icon={faSquareInstagram} /></a></li>
                <li><a href="https://wa.me/58485797" target="_blank"><FontAwesomeIcon className="icon-contact" size="4x"  icon={faSquareWhatsapp} /></a></li>
            </ul>
        </section>
    )
}