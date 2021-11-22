import Navigate from './components/navbar';
import Features from './components/features';
import About from './components/about';
// import Projects from './components/projects';
// import Skills from './components/skills';
// import Contact from './components/contact';
// import './App.css';
// import FadeIn from 'react-fade-in';


function App() {
  return (
    <div className="App">
      <style> {`body { background-color: black; }`} </style>
      <header className="App-header">
        <Navigate />
      </header>
      <Features />
      <About />
        {/* <Projects />
        <Skills />
        <Contact />  */}
    </div>
  );
}

export default App;
