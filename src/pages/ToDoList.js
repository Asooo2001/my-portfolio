import { Link } from "react-router-dom"
import "./ToDoList.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SocialSidebar from "../components/SocialSidebar"
import ToDoListPic from '../assets/images/to-do-list-homepage.png'

const ToDoList = ()=> {
  return (
    <div className="case-study-page">
      <Header />
      <SocialSidebar/>

      <main className="case-study-content">
        <div className="case-study-container">
          <h1 className="case-study-title">To-Do List</h1>

          <p className="case-study-description">
            This page contains the case study of To-Do List Website which includes the Project Overview, Tools Used and
            Live Links to the official product.
          </p>
          <div className="live-link-container">
          <a
            href="https://asooo2001.github.io/todo-list/"
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
                src={ToDoListPic}
                alt="To-Do List Project"
                className="project-screenshot"
              />
            </div>
          </div>

          <div className="project-details">
            <div className="project-overview">
              <h2>Project Overview</h2>
              <p>
              A simple, responsive to-do list application built with HTML, CSS, and JavaScript. Users can add, delete, and mark tasks as complete.
               Tasks are saved using localStorage to persist data across sessions.
              </p>
              <p>Feel free to check out the Project by visiting the Live Link.</p>
            </div>

            <div className="tools-used">
              <h2>Tools Used</h2>
              <div className="tools-list">
                <span className="tool-tag">HTML</span>
                <span className="tool-tag">CSS</span>
                <span className="tool-tag">JavaScript</span>
                <span className="tool-tag">GIT</span>
                <span className="tool-tag">GitHub</span>
                
              </div>
            </div>

            <div className="see-live">
              <h2>See Code</h2>
              <div className="live-buttons">
                <a
                  href="https://github.com/Asooo2001/todo-list"
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

export default ToDoList
