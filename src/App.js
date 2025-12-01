import './App.css';
import { About } from './components/About';
import { Accueil } from './components/Accueil';
import { Navbar } from './components/Navbar';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Accueil />
        <About />
        <Experience />
    </div>
  );
}

export default App;
