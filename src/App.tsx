import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import WhatWeDo from './components/WhatWeDo';
import BrandPotential from './components/BrandPotential';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <Header />
      <Hero />
      <Clients />
      <WhatWeDo />
      <BrandPotential />
      <Services />
      <Work />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
