import chicTripImage from '../../../assets/chicTrip.png';

export default function ChinbiChicTrip() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-slate-900 to-amber-950/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H6m6 6a4 4 0 014-4h2M9 21h6" />
            </svg>
          </div>
          <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">Exclusive Offers</span>
        </div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">專屬優惠 看去趣</h2>
          <img src={chicTripImage} alt="去趣 ChicTrip" className="h-10 object-contain flex-shrink-0" />
        </div>
        <div className="h-px bg-gradient-to-r from-amber-500 to-transparent mb-8" />

        <a
          href="https://www.chictrip.com.tw/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
            <div className="p-8 flex items-center justify-between gap-4">
              <p className="text-amber-100 leading-relaxed">前往去趣，探索更多馬祖專屬優惠</p>
              <span className="text-amber-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">
                前往 →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
