import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" 
import { faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"
import '../App.css'

export const Contact = () => {
    return(
        <section className="section-contact">
            <h1>Contáctame</h1>
            <p>Aunque actualmente no estoy buscando nuevas oportunidades,
            pero puedes mandarme un mensaje en cualquiera de mis redes, ¡te contestaré lo antes posible!</p>
            <ul>
                <li><a href=""><FontAwesomeIcon className="icon-list" size="3x"  icon={faSquareGithub} /></a></li>
                <li><a href=""><FontAwesomeIcon className="icon-list" size="3x"  icon={faEnvelope} /></a></li>
                <li><a href=""><FontAwesomeIcon className="icon-list" size="3x"  icon={faLinkedin} /></a></li>
                <li><a href=""><FontAwesomeIcon className="icon-list" size="3x"  icon={faSquareInstagram} /></a></li>
                <li><a href=""><FontAwesomeIcon className="icon-list" size="3x"  icon={faSquareWhatsapp} /></a></li>
            </ul>
        </section>
    )
}