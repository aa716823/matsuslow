import Navbar from '../../components/Navbar';
import Organization from '../../components/Organization';
import Footer from '../../components/Footer';
import MediaVideos from './components/MediaVideos';

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <MediaVideos />
      <Organization />
      <Footer />
    </div>
  );
}
