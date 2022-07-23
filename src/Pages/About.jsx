import React from 'react'
import '../Styles/Navbarstyle.css'



const About = () => {
  return (
    <div className='about center'>

      <h1>Hi, I am <span className="about__name">Kevin Valladares.</span></h1>
      <h2 className="about__role">A Front end Developer.</h2>
      <p className="about__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam possimus magni.
        Esse est rerum tempore adipisci voluptate deleniti eligendi mollitia. Minima, temporibus?
        Commodi error repellat unde inventore. Nisi, voluptate.
      </p>

      <div className="about__contact center">
        <a href="https://example.com">
          <span class="btn btn--outline">Resume</span>
        </a>

        <a href="https://github.com/KevinValladares"
          aria-label="github"
          className="link link--icon">
          <i aria-hidden="true" className="fab fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/kevin-valladares-262692225/"
          aria-label="linkedin"
          className="link link--icon">
          <i aria-hidden="true" className="fab fa-linkedin"></i>
        </a>
      </div>


    </div>
  )
}

export default About