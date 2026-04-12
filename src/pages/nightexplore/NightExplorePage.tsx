import Navbar from '../../components/Navbar';
import Organization from '../../components/Organization';
import Footer from '../../components/Footer';
import NightHero from './components/NightHero';
import NightRegister from './components/NightRegister';
import NightNotice from './components/NightNotice';
import NightTransportation from './components/NightTransportation';
import NightWaitlist from './components/NightWaitlist';
import NightCTA from './components/NightCTA';
import NightFooter from './components/NightFooter';

export default function NightExplorePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <NightHero />
        <NightRegister />
        <NightNotice />
        <NightTransportation />
        <NightWaitlist />
        <NightCTA />
        <Organization />
        <Footer />
    </div>
  );
}
