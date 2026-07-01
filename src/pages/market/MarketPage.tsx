import Navbar from '../../components/Navbar';
import Organization from '../../components/Organization';
import Footer from '../../components/Footer';
import MarketHero from './components/MarketHero';
import MarketSessions from './components/MarketSessions';
import MarketPerformers from './components/MarketPerformers';
import MarketShops from './components/MarketShops';
import MarketGame from './components/MarketGame';
import MarketFood from './components/MarketFood';
import MarketCTA from './components/MarketCTA';

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <MarketHero />
      <MarketSessions />
      <MarketPerformers />
      <MarketShops />
      <MarketGame />
      <MarketFood />
      <MarketCTA />
      <Organization />
      <Footer />
    </div>
  );
}
