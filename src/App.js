import './App.css';
import { About } from './components/About';
import { Accueil } from './components/Accueil';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Accueil />
        <About />
    </div>
  );
}

export default App;
