import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact,faSquareJs,faCss3Alt,faFigma,faNode,faPython,faGitAlt } from "@fortawesome/free-brands-svg-icons"
import { faDatabase,faCloud } from "@fortawesome/free-solid-svg-icons"

export const Skills = () => {
    return(
        <section className="section-skills">
            <h1>Habilidades</h1>
            <p>A lo largo de mi aprendizaje he usado muchas herramentas y lenguajes de programación, aquí te mustro mis preferidos</p>
            <div className="lists-skills">
                <ul className="ul-skills">
                    <h2>Frontend</h2>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faReact} />ReactJS</li>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faSquareJs} />JavaScript</li>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faCss3Alt} />CSS</li>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faFigma} />Figma</li>
                </ul>
                <ul>
                    <h2>Backend</h2>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faNode} />Node.js</li>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faDatabase} />MySQL</li>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faPython} />Python</li>
                </ul>
                <ul>
                    <h2>DevOps</h2>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faGitAlt} />Git</li>
                    <li><FontAwesomeIcon className="icon-list" size="2x" icon={faCloud} />Oracle Cloud</li>
                </ul>
            </div>
            
        </section>
    )
}