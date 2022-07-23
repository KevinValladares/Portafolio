import React, { useContext, useState } from 'react'
import '../Styles/Navbarstyle.css'
import { themeContext } from '../Context'
import { Link } from 'react-scroll'
const Navbar = () => {

    const { data, setData } = useContext(themeContext)
    const [hamburger, setHamburger] = useState('fa-bars')

    const changetheme = () => {
        setData({
            theme: (data.theme === 'light' ? 'dark' : 'light')
            , btntheme: (data.btntheme === 'fa-sun' ? 'fa-moon' : 'fa-sun')
        })
    }
    const clickHamburger = () => {
        setHamburger(hamburger === 'fa-bars' ? 'fa-times' : 'fa-bars')
    }


    return (

        <div className='header center'>
            <h3>
                <a href="/" className="link link--nav">KV.</a>
            </h3>

            <nav className="nav center">
                {hamburger === 'fa-bars'
                    ?
                    <ul className="nav__list center">
                       <li className="nav__list-item ">
                        <Link className="link link--nav" to='projects' spy={true} smooth={true} offset={35} duration={400} >
                        Project
                        </Link>
                        </li>
                        <li className="nav__list-item">
                        <Link  className="link link--nav" to='skills' spy={true} smooth={true} offset={25} duration={400}>Skills
                        </Link>
                        </li>
                        <li className="nav__list-item">
                        <Link className="link link--nav" to='contact' spy={true} smooth={true} offset={35} duration={400} >
                            Contact</Link>
                        </li>
                       
                    </ul>
                    :
                    <ul className="nav__list center display-nav-list">
                        <li className="nav__list-item">
                            <a className="link link--nav" href="#projects">Projects</a>
                        </li>
                        <li className="nav__list-item">
                            <a className="link link--nav" href="#skills">Skills</a>
                        </li>
                        <li className="nav__list-item">
                            <a className="link link--nav" href="#contact">Contact</a>
                        </li>
                    </ul>
                }

                <button
                    type="button"
                    aria-label="toggle theme"
                    className="btn btn--icon"
                    onClick={changetheme}>
                    <i aria-hidden="true" id="btn-theme" className={`fas ${data.btntheme}`}></i>
                </button>

                <button
                    type="button"
                    aria-label="toggle navigation"
                    className="btn btn--icon nav__hamburger"
                    onClick={clickHamburger}
                >
                    <i aria-hidden="true" className={`fas ${hamburger}`}></i>
                </button>
            </nav>



        </div>

    )
}

export default Navbar