import './App.css';
import { About } from './components/About';
import { Accueil } from './components/Accueil';
import { Navbar } from './components/Navbar';
import { Experience } from './components/Experience';
import { Competences } from './components/Competences';
// import { Projects } from './components/Projects';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Accueil />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Competences />
    </div>
  );
}

export default App;
