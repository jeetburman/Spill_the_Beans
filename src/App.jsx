import { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Banner from './components/Banner';

function App() {
  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 700,
      easing : 'ease-in',
      delay : 100
    });
  });

  return (
    <>
      <div className='overflow-x-hidden'>
        <NavBar/>
        <Home/>
        <Services/>
        <Banner/>
      </div>
    </>
  );
}

export default App;

