import Navbar from '../../components/Navbar';
import Organization from '../../components/Organization';
import Footer from '../../components/Footer';
import DiyHero from './components/DiyHero';
import DiyItems from './components/DiyItems';
import DiyRegister from './components/DiyRegister';
import DiyMaterials from './components/DiyMaterials';
import DiySessions from './components/DiySessions';
import DiyCTA from './components/DiyCTA';

export default function DiyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <DiyHero />
      <DiyItems />
      <DiyRegister />
      <DiyMaterials />
      <DiySessions />
      <DiyCTA />
      <Organization />
      <Footer />
    </div>
  );
}
