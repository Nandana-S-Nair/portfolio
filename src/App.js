import { Routes, Route, useLocation } from "react-router-dom"
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import './App.scss';
import Navbar from "./components/navbar";
import ParticlesComponent from "./components/particles";

function App() {

  const location = useLocation();
  const renderParticlesInHomepage = location.pathname ==="/";

  return (
    <div className="App">
      {
        renderParticlesInHomepage &&(
          <ParticlesComponent />
        )
      }
      
      <Navbar/>
      <div className="App__main-page-content">
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/myportfolio" element={<Portfolio />} />
        </Routes>
      </div>
       
    </div>
  );
}

export default App;
