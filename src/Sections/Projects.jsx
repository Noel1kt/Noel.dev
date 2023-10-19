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
            <a href="https://github.com/Noel1kt" target="_blank"> Github <FontAwesomeIcon icon={faGithubAlt} /></a>
            </p>
            <div>
                <ul>
                    <li>
                        <div className='image-project'><img src={serpientesgt} alt="serpientesGT" /></div>
                        <div className="description-projects">
                            <h2>SerpientesGt</h2>
                            <div className="text-project">
                                <p className="paragraph-project">Este proyecto surge como una iniciativa para la educación hambiental en Guatemala. 
                                    Se utilizó la librería React-Router-Dom para que la página sea una single-page application (SPA),
                                    además de simular una API con Vercel para obtener la información de las especies. 
                                    <a href="">Ver Proyecto<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='image-project'><img  src={avicolaimage} alt="avicolaweb" /></div>
                        <div className="description-projects">
                            <h2>Control de Avicola</h2>
                            <div className="text-project">
                                <p className="paragraph-project">
                                    La creación de esta web first mobile surge como solución a la necesidad de hacer cuentas más rapidas
                                    y precisas de una producción avicola, cuenta con los datos de Hy-Line International con los que se consiguió
                                    adaptar las operaciones necesarias que realiza esta web. 
                                    <a href="">Ver Proyecto<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></a>
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
                                    funcional para los usuarios. 
                                    <a href="">Ver Proyecto<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x"/></a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}