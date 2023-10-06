import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

export const Skills = () => {
    return(
        <section className="section-skills">
            <h1>Habilidades</h1>
            <p>A lo largo de mi aprendizaje he usado muchas herramentas y lenguajes de programación, aquí te mustro mis preferidos</p>
            <div className="lists-skills">
                <ul>
                    <h2>Frontend</h2>
                    <li><FontAwesomeIcon icon={faReact} />ReactJS</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Figma</li>
                </ul>
                <ul>
                    <h2>Backend</h2>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                </ul>
                <ul>
                    <h2>DevOps</h2>
                    <li>Git</li>
                    <li>AWS</li>
                    <li>Oracle Cloud</li>
                </ul>
            </div>
            
        </section>
    )
}