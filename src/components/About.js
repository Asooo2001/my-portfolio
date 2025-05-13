import "./About.css"

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">ABOUT ME</h2>
        <div className="title-underline"></div>

        <p className="about-intro">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming
          and technology
        </p>

        <div className="about-content">
          <div className="about-me">
            <h3>Get to know me!</h3>
            <p>
              Hi, I'm <span className="highlight">Argjend Sokoli</span>, a front-end developer based in Prishtina, Kosovo.
              I specialize in crafting responsive, user-friendly websites using HTML, CSS, JavaScript, and React.
               My journey into web development has been shaped by a strong academic background, hands-on internships,
             and intensive full-stack courses where I’ve also worked with Node.js, Express, MongoDB, and REST APIs.
            </p>
            <p>
                I’ve built projects from scratch—like{" "}<a href="https://asooo2001.github.io/roi-kids/" target="_blank" className="social-link">Roi Kids</a>{" "}
                 with a focus on clean design, smooth interactions, and accessibility across all devices.
                I’m a strong believer in continuous learning, clean code, and collaboration.
                When I’m not coding, I’m exploring new tech tools, solving development challenges, or sketching out ideas for my next project. Feel
                free to Connect on my{" "}
              <a href="https://www.linkedin.com/in/argjend-sokoli-6a7439254" target="_blank" className="social-link">
                Linkedin
              </a>.{" "}
             
            </p>
            <p>
              I'm open to <span className="highlight">Job</span> opportunities where I can contribute, learn and grow.
              If you have a good opportunity that matches my skills and experience then don't hesitate to{" "}
              <span className="highlight">contact</span> me.
            </p>
            <a href="#contact" className="contact-button">
              CONTACT
            </a>
          </div>

          <div className="skills">
            <h3>My Skills</h3>
            <div className="skills-container">
              <div className="skill-tag">HTML</div>
              <div className="skill-tag">CSS</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">GIT</div>
              <div className="skill-tag">Github</div>
              <div className="skill-tag">Responsive Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
