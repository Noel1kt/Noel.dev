import '../App.css'
import  serpientesgt from '../assets/img/serpientesgt.png';
import  avicolaimage from '../assets/img/avicola.png';
import  alurageek from '../assets/img/alurageek.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"


export const Projects = () => {
    return(
        <section className="section-work">
            <h1>Proyectos</h1>
            <p className="p-title">Te muestro algunos proyectos en los que he estado trabajando, puedes ver más proyectos en mi  
            <a className="ancor-github" href="https://github.com/Noel1kt" target="_blank"> Github <FontAwesomeIcon icon={faGithubAlt} /></a>
            </p>
            <div>
                <ul>
                    <li>
                        <div className='image-project'><img src={serpientesgt} alt="serpientesGT" /></div>
                        <div className="description-projects">
                            <h2>SerpientesGt</h2>
                            <div className="text-project">
                                <p className="paragraph-project">Este proyecto surge como una iniciativa para la educación ambiental en Guatemala. 
                                    Se utilizó la librería React-Router-Dom para que la página sea una single-page application (SPA),
                                    además de simular una API con Vercel para obtener la información de las especies. <br/>
                                    <a href="https://serpientes-gt.vercel.app/" target="_blank">Ver Proyecto <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='image-project'><img  src={avicolaimage} alt="avicolaweb" /></div>
                        <div className="description-projects">
                            <h2>Control de Avícola</h2>
                            <div className="text-project">
                                <p className="paragraph-project">
                                    La creación de esta web first mobile surge como solución a la necesidad de hacer cuentas más rápidas
                                    y precisas de una producción avícola, cuenta con los datos de Hy-Line International con los que se consiguió
                                    adaptar las operaciones necesarias que realiza esta web. <br/>
                                    <a href="https://avicola.vercel.app/" target="_blank">Ver Proyecto <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></a>
                                </p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className='image-project'><img src={alurageek} alt="e-commerce" /></div>
                        <div className="description-projects">
                            <h2>E-commerce</h2>
                            <div className="text-project">
                                <p className="paragraph-project">
                                    Para la creación de esta web e-commerce se utilizaron conocimientos tanto de Frontend como 
                                    Backend, es un proyecto interesante y retador ya que combina las necesidades de tener una web llamativa y 
                                    funcional para los usuarios. <br/>
                                    <a href="https://noel1kt.github.io/AluraGeek/" target="_blank">Ver Proyecto <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}