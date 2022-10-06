import React from 'react'
import '../Styles/Navbarstyle.css'
const Skill = () => {
    return (

        <section className="section skills" id="skills">
            <h2 className="section__title">Skills</h2>
            <ul className="skills__list">
                <li className="skills__list-item btn btn--plain">HTML</li>
                <li className="skills__list-item btn btn--plain">CSS</li>
                <li className="skills__list-item btn btn--plain">SCSS</li>
                <li className="skills__list-item btn btn--plain">JavaScript</li>
                <li className="skills__list-item btn btn--plain">C#</li>
                <li className="skills__list-item btn btn--plain">React</li>
                <li className="skills__list-item btn btn--plain">Redux</li>
                <li className="skills__list-item btn btn--plain">Git</li>
                <li className="skills__list-item btn btn--plain">Material UI</li>
                <li className="skills__list-item btn btn--plain">React Icons</li>
                <li className="skills__list-item btn btn--plain">Use Context</li>
                <li className="skills__list-item btn btn--plain">Styled-Components</li>
            </ul>
        </section>

    )
}

export default Skill