import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ActivityMenu from './components/ActivityMenu';
import NewsSection from './components/NewsSection';
import CTASection from './components/CTASection';
import Tagline from './components/Tagline';
import Footer from './components/Footer';
import Organization from './components/Organization';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <ActivityMenu />
      <NewsSection />
      <CTASection />
      <Tagline />
      <Organization />
      <Footer />
    </div>
  );
}

export default App;
