import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BrandRibbon from './components/BrandRibbon.jsx';
import LashStyles from './components/LashStyles.jsx';
import Studio from './components/Studio.jsx';
import LashCare from './components/LashCare.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandRibbon />
        <LashStyles />
        <Studio />
        <LashCare />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
