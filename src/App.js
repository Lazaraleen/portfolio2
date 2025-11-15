import './App.css';
import { Accueil } from './components/Accueil';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Accueil />
    </div>
  );
}

export default App;
