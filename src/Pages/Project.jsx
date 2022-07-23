import React from 'react'
import '../Styles/Navbarstyle.css'


const Project = () => {
  return (
    
    <section id="projects" className="section projects">
    <h2 className="section__title">Projects</h2>

    <div className="projects__grid">
      <div className="project">
        <h3>Project 1</h3>
        <p className="project__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam possimus magni. 
       Esse est rerum tempore adipisci voluptate deleniti eligendi mollitia. Minima, temporibus? 
       Commodi error repellat unde inventore. Nisi, voluptate.
        </p>
        <ul className="project__stack">
          <li className="project__stack-item">SASS</li>
          <li className="project__stack-item">TypeScript</li>
          <li className="project__stack-item">React</li>
        </ul>

        <a href="https://github.com" aria-label="source code" className="link link--icon">
          <i aria-hidden="true" className="fab fa-github"></i>
        </a>
        <a href="https://example.com" aria-label="live preview" className="link link--icon">
          <i aria-hidden="true" className="fas fa-external-link-alt"></i>
        </a>
      </div>

      <div className="project">
        <h3>Project 2</h3>
        <p className="project__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam possimus magni. 
       Esse est rerum tempore adipisci voluptate deleniti eligendi mollitia. Minima, temporibus? 
       Commodi error repellat unde inventore. Nisi, voluptate.
        </p>
        <ul className="project__stack">
          <li className="project__stack-item">SASS</li>
          <li className="project__stack-item">TypeScript</li>
          <li className="project__stack-item">React</li>
        </ul>

        <a href="https://github.com" aria-label="source code" className="link link--icon">
          <i aria-hidden="true" className="fab fa-github"></i>
        </a>
        <a href="https://example.com" aria-label="live preview" className="link link--icon">
          <i aria-hidden="true" className="fas fa-external-link-alt"></i>
        </a>
      </div>

      <div className="project">
        <h3>Project 3</h3>
        <p className="project__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam possimus magni. 
       Esse est rerum tempore adipisci voluptate deleniti eligendi mollitia. Minima, temporibus? 
       Commodi error repellat unde inventore. Nisi, voluptate.
        </p>
        <ul className="project__stack">
          <li className="project__stack-item">SASS</li>
          <li className="project__stack-item">TypeScript</li>
          <li className="project__stack-item">React</li>
        </ul>

        <a href="https://github.com" aria-label="source code" className="link link--icon">
          <i aria-hidden="true" className="fab fa-github"></i>
        </a>
        <a href="https://example.com" aria-label="live preview" className="link link--icon">
          <i aria-hidden="true" className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Project