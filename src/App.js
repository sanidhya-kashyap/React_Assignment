import './App.css';
import './style.css'
import { Page3 } from './components/Page3';
import { Section4 } from './components/Section4';
import { Section5 } from './components/Section5';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { Training } from './components/Training';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Training/>
      <Page3/>
      <Section4/>
      <Section5/>
      <Footer/>

    </div>
  );
}

export default App;
