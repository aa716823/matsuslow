import { Star } from 'lucide-react';
import mascotImage from '../../../assets/oba_03.svg';

export default function NightCTA() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      </div>
      <img
        src={mascotImage}
        alt="鷗霸"
        className="absolute bottom-0 right-6 md:right-24 w-40 h-40 md:w-52 md:h-52 object-contain pointer-events-none opacity-80"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-light text-blue-100 leading-relaxed mb-10 animate-breathe">
          把這一夜的光<br />留進你的馬祖記憶裡
        </p>
      </div>
    </section>
  );
}
