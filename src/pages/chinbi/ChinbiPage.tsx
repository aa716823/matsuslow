import Navbar from '../../components/Navbar';
import Organization from '../../components/Organization';
import Footer from '../../components/Footer';
import ChinbiHero from './components/ChinbiHero';
import ChinbiShops from './components/ChinbiShops';
import ChinbiBadge from './components/ChinbiBadge';
import ChinbiRoute from './components/ChinbiRoute';
import ChinbiChicTrip from './components/ChinbiChicTrip';
import ChinbiClosing from './components/ChinbiClosing';

export default function ChinbiPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <ChinbiHero />
      <ChinbiShops />
      <ChinbiBadge />
      <ChinbiRoute />
      <ChinbiChicTrip />
      <ChinbiClosing />
      <Organization />
      <Footer />
    </div>
  );
}
