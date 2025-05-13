import { Link } from "react-router-dom"
import "./RoiKids.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SocialSidebar from "../components/SocialSidebar"
import RoiKidsPic from '../assets/images/roi-kids-homepage.png'

const RoiKids = ()=> {
  return (
    <div className="case-study-page">
      <Header />
      <SocialSidebar/>

      <main className="case-study-content">
        <div className="case-study-container">
          <h1 className="case-study-title">ROI KIDS</h1>

          <p className="case-study-description">
            This page contains the case study of Roi Kids Website which includes the Project Overview, Tools Used and
            Live Links to the official product.
          </p>
          <div className="live-link-container">
          <a
            href="https://asooo2001.github.io/roi-kids/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link-hero-button"
          >
            LIVE LINK
          </a>
          </div>

          <div className="project-image-container">
            <div className="laptop-mockup">
              <img
                src={RoiKidsPic}
                alt="RoiKids Project"
                className="project-screenshot"
              />
            </div>
          </div>

          <div className="project-details">
            <div className="project-overview">
              <h2>Project Overview</h2>
              <p>
              This is a responsive landing page for ROI Kids, an educational platform designed to 
              introduce children to the world of technology through interactive and engaging content.
              Built using HTML, CSS, JavaScript, and React,
              it features a modern UI with dynamic form handling and smooth navigation.
              </p>
              <p>
                I took their website idea by visiting different types of websites of the same industry and each added
                platform has enabled to get inspiration for building a great-looking website.
              </p>
              <p>Feel free to check out the Project by visiting the Live Link.</p>
            </div>

            <div className="tools-used">
              <h2>Tools Used</h2>
              <div className="tools-list">
                <span className="tool-tag">HTML</span>
                <span className="tool-tag">CSS</span>
                <span className="tool-tag">JavaScript</span>
                <span className="tool-tag">React</span>
                <span className="tool-tag">GIT</span>
                <span className="tool-tag">GitHub</span>
                
              </div>
            </div>

            <div className="see-live">
              <h2>See Code</h2>
              <div className="live-buttons">
                <a
                  href="https://github.com/Asooo2001/roi-kids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link-button"
                >
                  CODE
                </a>
                <Link to="/" className="go-back-button">
                  GO BACK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
    </div>
  )
}

export default RoiKids
