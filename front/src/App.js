import './App.css';
import Home from './components/home/Home';
import LoginAdmin from './components/Loginadmin/LoginAdmin';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/')

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        {route === '#/admin' ? <LoginAdmin /> : <Home />}
      </main>
    </div>
  );
}

export default App;
