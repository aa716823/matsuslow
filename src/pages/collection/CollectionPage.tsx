import Navbar from '../../components/Navbar';
import Organization from '../../components/Organization';
import Footer from '../../components/Footer';
import CollectionHero from './components/CollectionHero';
import CollectionIntro from './components/CollectionIntro';
import CollectionTime from './components/CollectionTime';
import CollectionSpots from './components/CollectionSpots';
import CollectionHow from './components/CollectionHow';
import CollectionRedeem from './components/CollectionRedeem';
import CollectionPrize from './components/CollectionPrize';
import CollectionRules from './components/CollectionRules';
import CollectionGroup from './components/CollectionGroup';

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <CollectionHero />
      <CollectionIntro />
      <CollectionTime />
      <CollectionSpots />
      <CollectionHow />
      <CollectionRedeem />
      <CollectionPrize />
      <CollectionRules />
      <CollectionGroup />
      <Organization />
      <Footer />
    </div>
  );
}
