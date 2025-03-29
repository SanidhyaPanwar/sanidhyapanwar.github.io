import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interest';
import Skill from './components/Skill';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OsiFarming from './components/project/OsiFarming';
import Verizon from './components/project/Verizon';
import Indrapal from './components/project/Indrapal';
import SanidhyaInsta from './components/project/SanidhyaInsta';
import Covid from './components/project/Covid';
import BreakingBad from './components/project/BreakingBad';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/sanidhyapanwar.github.io">
    <Navbar/>
    <Route exact path="/" >
      <Home />
    </Route>
    <Route path="/home" >
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/experience">
      <Experience />
    </Route>
    <Route path="/education">
      <Education />
    </Route>
    <Route path="/interests">
      <Interests />
    </Route>
    <Route exact path="/skill">
      <Skill />
    </Route>
    <Route path="/skills">
      <Skills />
    </Route>
    <Route path="/projects">
      <Projects />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    {/* Project routing start */}
    <Route path="/project/verizon">
      <Verizon />
    </Route>
    <Route path="/project/osi-farming">
      <OsiFarming />
    </Route>
    <Route path="/project/sanidhya-insta">
      <SanidhyaInsta />
    </Route>
    <Route path="/project/breaking-bad">
      <BreakingBad />
    </Route>
    <Route path="/project/indrapal">
      <Indrapal />
    </Route>
    <Route path="/project/covid">
      <Covid />
    </Route>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
