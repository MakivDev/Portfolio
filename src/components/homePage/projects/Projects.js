import ProjecImgGarageHub from "./img/Project1.png"
import ProjecImgMyPhoto from "./img/Project2.png"
import "./projects.css"
import { Link, useLocation } from 'react-router-dom';
const Projects = () => {
  return (
    <div className="projects">
      <div className="container">

        <div className="projects-header">
          <div className="projects-header-text">
            <p><span className="special-text">#</span>Проекти</p>
            <div className="limit-line-projects" id="limit-line-projects"></div>
          </div>
          <div>
          <Link className="all-projects" to="/about" >всі → </Link>
           
          </div>
        </div>

        <div className="projects-frame">
          <div className="projects-item">
            <div className="projects-item-img bode project-border">
              <img src={ProjecImgGarageHub} alt="Project1" />
            </div>
            <div className="projects-item-language project-border">
              HTML, CSS, Django (Python), Bootstrap
            </div>
            <div className="projects-item-description project-border">
              <p className="project-name">GarageHub</p>
              <p className="project-description">
                Онлайн магазин продажу автозапчастин
              </p>
              <button className="project-info">Детальніше ←→</button>
            </div>
          </div>



          <div className="projects-item">
            <div className="projects-item-img bode project-border">
              <img src={ProjecImgMyPhoto} alt="Project1" />
            </div>
            <div className="projects-item-language project-border">
              HTML, CSS, JavaScript, React
            </div>
            <div className="projects-item-description project-border">
              <p className="project-name">Портфоліо</p>
              <p className="project-description">
                Власне портфоліо, створене з метою почати вивчення React та розповісти про себе
              </p>
              <button className="project-info"> Детальніше ←→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;