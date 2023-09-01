import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='#about' Component={About}/>
        <Route path='/expertise'Component={Expertise}/>
        <Route path='/contact' Component={Contact}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
