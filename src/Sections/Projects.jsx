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
                        <div className='image-project'><img src={serpientesgt} alt="" /></div>
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
                        <div className='image-project'><img  src={avicolaimage} alt="" /></div>
                        <div className="description-projects">
                            <h2>Control de Avicola</h2>
                            <div className="text-project">
                                <p className="paragraph-project">Este proyecto surge como una iniciativa para la educación hambiental en Guatemala. 
                                    S,
                                    además de simular una API con Vercel para obtener la información de las especies. 
                                </p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className='image-project'><img src={alurageek} alt="" /></div>
                        <div className="description-projects">
                            <h2>E-commerce</h2>
                            <div className="text-project">
                                <p className="paragraph-project">Este proyecto surge como una iniciativa para la educación hambiental en Guatemala. 
                                    Se utilizó la librería React-Router-Dom para 
                                    además de simular una API con Vercel para obtener la información de las especies. 
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}