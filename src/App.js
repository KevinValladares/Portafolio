import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import Project from './Pages/Project';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';
import { useContext } from 'react'
import { themeContext } from './Context'
import './index.css';




function App() {

  const { data } = useContext(themeContext)


  return (
    <div className={`app ${data.theme}`}>

      <ScrollToTop />

      <div className='home'>
        <Navbar />
        <About />
      </div>


      <Project />
      <Skill />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
