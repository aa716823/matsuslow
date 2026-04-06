import backgroundImage from '../assets/background.png';

export default function Tagline() {
  return (
    <section
      className="py-24 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight animate-breathe">
            慢慢走，把時間留在馬祖
          </p>
        </div>
      </div>
    </section>
  );
}
