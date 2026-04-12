import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ActivityMenu from './components/ActivityMenu';
import NewsSection from './components/NewsSection';
import CTASection from './components/CTASection';
import Tagline from './components/Tagline';
import Footer from './components/Footer';
import Organization from './components/Organization';
import CameraPage from './pages/camera/CameraPage';
import NightExplorePage from './pages/nightexplore/NightExplorePage';
import CollectionPage from './pages/collection/CollectionPage';
import ChinbiPage from './pages/chinbi/ChinbiPage';

function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/nightexplore" element={<NightExplorePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/chinbi" element={<ChinbiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
