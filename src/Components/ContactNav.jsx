import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" 
import { faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"
import '../App.css'

export const ContactNav = () => {
    return(
        <nav className="section-contactnav"> 
            <ul className="ul-contactnav">
                <li className="li-contact"><a href="https://github.com/Noel1kt" target="_blank"><FontAwesomeIcon className="icon-contact-nav" icon={faSquareGithub} /></a></li>
                <li className="li-contact"><a href="mailto:noelmazariegospc@gmail.com" target="_blank"><FontAwesomeIcon className="icon-contact-nav"  icon={faEnvelope} /></a></li>
                <li className="li-contact"><a href="https://www.linkedin.com/in/noel-mazariegos/" target="_blank"><FontAwesomeIcon className="icon-contact-nav"  icon={faLinkedin} /></a></li>
                <li className="li-contact"><a href="https://www.instagram.com/noel1kt" target="_blank"><FontAwesomeIcon className="icon-contact-nav"  icon={faSquareInstagram} /></a></li>
                <li className="li-contact"><a href="https://wa.me/58485797" target="_blank"><FontAwesomeIcon className="icon-contact-nav"  icon={faSquareWhatsapp} /></a></li>
            </ul>
        </nav>
    )
}