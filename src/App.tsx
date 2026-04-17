import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdmissionBanner from './components/AdmissionBanner';
import About from './components/About';
import Stats from './components/Stats';
import Rankings from './components/Rankings';
import Facilities from './components/Facilities';
import Events from './components/Events';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AdmissionBanner />
      <About />
      <Stats />
      <Rankings />
      <Facilities />
      <Events />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
