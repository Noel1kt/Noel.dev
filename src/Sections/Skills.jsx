import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact,faSquareJs,faCss3Alt,faFigma,faNode,faPython,faGitAlt } from "@fortawesome/free-brands-svg-icons"
import { faDatabase,faCloud,faFileImport } from "@fortawesome/free-solid-svg-icons"



export const Skills = () => {
   
    return(
        <section className="section-skills">
            <h1>Habilidades</h1>
            <p>A lo largo de mi aprendizaje he usado muchas herramientas y lenguajes de programación, puedes ver mis certificaciones 
                <a className="ancor-one" target="_blank" href="https://app.aluracursos.com/emprega-one/profile/noelmazariegospc"> aquí <FontAwesomeIcon icon={faFileImport} /></a>. </p>
            <div className="lists-skills">
                <ul className="ul-skills">
                    <h2>Frontend</h2>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faReact} />ReactJS</li>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faSquareJs} />JavaScript</li>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faCss3Alt} />CSS</li>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faFigma} />Figma</li>
                </ul>
                <ul className="ul-skills">
                    <h2>Backend</h2>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faNode} />Node.js</li>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faDatabase} />MySQL</li>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faPython} />Python</li>
                </ul>
                <ul className="ul-skills">
                    <h2>DevOps</h2>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faGitAlt} />Git</li>
                    <li className="li-skills animated-element"><FontAwesomeIcon className="icon-list" size="2x" icon={faCloud} />Oracle Cloud</li>
                </ul>
            </div>
            
        </section>
    )
}