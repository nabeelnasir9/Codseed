/* eslint-disable react/no-unknown-property */
import AboutCard from '../components/AboutCard';
import AboutIconCard from '../components/AboutIconCard';
import AboutMain from '../components/AboutMain';
import AboutSecData from '../components/AboutSecData';
import AboutSwiper from '../components/AboutSwiper';
import '../styles/AboutMain.css';
const About = () => {
  return (
   <div className='About_Main_section' id='about'>
   <AboutMain/>
   <AboutSecData/>
   <AboutCard/>
   <AboutSwiper/>
   <AboutIconCard/>
   </div>
  )
}

export default About