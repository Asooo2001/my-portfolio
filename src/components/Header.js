import "./Header.css"
import ProfilePic from '../assets/images/profile-pic.jpg'
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="profile-image">
          <img src= {ProfilePic} alt="Profile Pic" />
        </div>
        <a href="#home" className="logo-text">ARGJEND SOKOLI</a>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
