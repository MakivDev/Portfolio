import ProjecImgGarageHub from "./img/Project1.png"
import "./projects.css"

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
              <a className="all-projects" href="#!">всі →</a>
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
                <button className="project-info"> Детальніше ←→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default Projects;