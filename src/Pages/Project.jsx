import React from 'react'
import '../Styles/Navbarstyle.css'


const Project = () => {
  return (

    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">


        <div className="project">
          <h3>Job Search</h3>
          <div className='Project__information'>
            <p className="project__description">
              El usuario empleador puede crear ofertas de trabajo y
              el usuario solicitante puede postularse a las ofertas existentes.
            </p>
            <div className='project__components'>
              <ul className="project__stack">
                <li className="project__stack-item">Styled components</li>
                <li className="project__stack-item">Javascripts</li>
                <li className="project__stack-item">React</li>
              </ul>
              <section className='button__information'>
                <a href="https://github.com/KevinValladares/JobSearch" aria-label="source code" className="link link--icon">
                  <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <a href="https://example.com" aria-label="live preview" className="link link--icon">
                  <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                </a>
              </section>
            </div>
          </div>
        </div>

        <div className="project">
          <h3>Eccomerce</h3>
          <div className='Project__information'>
            <p className="project__description">
              El usuario vendedor agregar los productos que va a ofrecer,
              mientras que el usuario comprador le permite buscar productos y agregarlos al carrito de compra
              y realizar la compra
            </p>
            <div className='project__components'>
              <ul className="project__stack">
                <li className="project__stack-item">UseContext</li>
                <li className="project__stack-item">Javascripts</li>
                <li className="project__stack-item">React</li>
              </ul>
              <section className='button__information'>
                <a href="https://github.com/KevinValladares/Ecommerce" aria-label="source code" className="link link--icon">
                  <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <a href="https://example.com" aria-label="live preview" className="link link--icon">
                  <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                </a>
              </section>
            </div>
          </div>
        </div>

        <div className="project">
          <h3>Pokedex</h3>
          <div className='Project__information'>
            <p className="project__description">
              Aplicación que permite buscar pokemons por nombre, 
              tambien tiene una seccion para la lista de pokemons.
            </p>
            <div className='project__components'>
              <ul className="project__stack">
                <li className="project__stack-item">Styled components</li>
                <li className="project__stack-item">Javascripts</li>
                <li className="project__stack-item">React</li>
              </ul>
              <section className='button__information'>
                <a href="https://github.com/KevinValladares/PokedexK" aria-label="source code" className="link link--icon">
                  <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <a href="https://example.com" aria-label="live preview" className="link link--icon">
                  <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                </a>
              </section>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Project