import "./Projects.css"
import { Link } from "react-router-dom"
import RoiKidsPic from '../assets/images/roi-kids-homepage.png'

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">PROJECTS</h2>
        <div className="title-underline"></div>

        <p className="projects-intro">
          Here you will find some of the personal and clients projects that I created with each project containing its
          own case study
        </p>

        <div className="projects-list">
          {/* Project 1 */}
          <div className="project-item">
            <div className="project-image">
              <div className="laptop-mockup">
                <img
                  src={RoiKidsPic}
                  alt="RoiKids Project"
                  className="project-screenshot"
                />
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">ROI Kids</h3>
              <p className="project-description">
              ROI Kids is an interactive educational platform I built with HTML, CSS, JavaScript, 
              and React to help children explore technology in a fun, engaging way. It showcases modern, responsive design and clean user experience.
              </p>
              <Link to ="/roikids" className="case-study-button">
                CASE STUDY
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item">
            <div className="project-image">
              <div className="laptop-mockup">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project2"
                  className="project-screenshot"
                />
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Project2</h3>
              <p className="project-description">
                To be Continued.
              </p>
              <a href="#" className="case-study-button">
                CASE STUDY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
