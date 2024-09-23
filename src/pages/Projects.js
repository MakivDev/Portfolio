import CompleteApps from "../components/projectsPage/complete-apps/CompleteApps"
import SmallProjects from "../components/projectsPage/small-projects/SmallProjects"


import "./../components/projectsPage/styles/ProjectsPage.css"
const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="projects-page-header">
          <div className="projects-page-header-text">
            <p><span className="special-text">/</span>Проекти</p>
          </div>

          <div>
            <p className="project-description">Списки моїх проектів</p>
          </div>
        </div>

        <div className="CompleteAppsHeader">
          <p><span className="special-text">#</span>Повноцінні додатки</p>
        </div>
        <CompleteApps />
        <SmallProjects />
      </div>
    </>
  );
}

export default Projects;