import '../App.css'
import  serpientesgt from '../assets/img/serpientesgt.png';
import  avicolaimage from '../assets/img/avicola.png';
import  alurageek from '../assets/img/alurageek.png';


export const Projects = () => {
    return(
        <section className="section-work">
            <h1>Proyectos</h1>
            <p className="p-title">Aquí te muestro en lo que he estado trabajando, puedes ver más proyectos en mi Github </p>
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
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}