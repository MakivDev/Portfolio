import { Link } from 'react-router-dom';
import ProjecImgGarageHub from "./../components/projectsPage/img/Project1.png";
import ProjecImgMyPhoto from "./../components/projectsPage/img/Project2.png";
import "./../components/projectsPage/styles/ProjectsPage.css";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="projects-page-header">
          <div className="projects-page-header-text">
            <p>
              <span className="special-text">/</span>Проекти
            </p>
          </div>
          <p className="project-description">Списки моїх проектів</p>
        </div>

        <div className="complete-apps-header">
          <p>
            <span className="special-text">#</span>Повноцінні додатки
          </p>
        </div>

        <div className="project-container">
          <div className="project-card">
            <div className="project-image bode project-outline">
              <img src={ProjecImgGarageHub} alt="GarageHub Project" />
            </div>
            <div className="project-language project-outline">
              HTML, CSS, Django (Python), Bootstrap
            </div>
            <div className="project-details project-outline">
              <p className="project-title">GarageHub</p>
              <p className="project-description">
                Онлайн магазин продажу автозапчастин
              </p>
              <button className="project-more-info">Детальніше ←→</button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image bode project-outline">
              <img src={ProjecImgMyPhoto} alt="Portfolio Project" />
            </div>
            <div className="project-language project-outline">
              HTML, CSS, React
            </div>
            <div className="project-details project-outline">
              <p className="project-title">Портфоліо</p>
              <p className="project-description">
                Власне портфоліо, створене з метою почати вивчення React та розповісти про себе
              </p>
              <button className="project-more-info">Детальніше ←→</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
