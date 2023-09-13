import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import FooterMain from './pages/FooterMain';
import { Element } from 'react-scroll';
import ParticlesHome from './components/ParticlesHome';


function App() {

  return (
    <>
    <ParticlesHome/>
      <Navbar/>
      <Element name="home-section">
                <Home />
            </Element>

            <Element name="about-section">
                <About />
            </Element>

            <Element name="expertise-section">
                <Expertise />
            </Element>
            <Element name="contact-section">
                <Contact />
            </Element>
      <FooterMain/>
    </>
  )
}

export default App
