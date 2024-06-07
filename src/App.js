import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Certificates } from "./components/Certificates";
import { Internship } from './components/Internship';
import { About } from './components/About';
import TrackVisibility from 'react-on-screen';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const internshipRef = useRef(null);

  const [activeLink, setActiveLink] = useState('home');

  const setActiveSection = (section) => {
    setActiveLink(section);
  };

  return (
    <div className="App">
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <TrackVisibility partialVisibility>
        {({ isVisible }) => {
          if (isVisible) setActiveSection('home');
          return <div ref={homeRef}><Banner /></div>;
        }}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => {
          if (isVisible) setActiveSection('about');
          return <div ref={aboutRef}><About /></div>;
        }}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => {
          if (isVisible) setActiveSection('skills');
          return <div ref={skillsRef}><Skills /></div>;
        }}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => {
          if (isVisible) setActiveSection('projects');
          return <div ref={projectsRef}><Projects /></div>;
        }}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => {
          if (isVisible) setActiveSection('certificates');
          return <div ref={certificatesRef}><Certificates /></div>;
        }}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => {
          if (isVisible) setActiveSection('internship');
          return <div ref={internshipRef}><Internship /></div>;
        }}
      </TrackVisibility>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
