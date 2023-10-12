import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" 
import { faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const Contact = () => {
    return(
        <>
            <h1>Contáctame</h1>
            <p>Aunque actualmente no estoy buscando nuevas oportunidades,
            pero puedes mandarme un mensaje en cualquiera de mis redes, ¡te contestaré lo antes posible!</p>
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faSquareGithub} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faSquareWhatsapp} /></a></li>
            </ul>
        </>
    )
}