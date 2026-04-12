import { Navigation } from 'lucide-react';

export default function CollectionRedeem() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Navigation className="w-5 h-5 text-white" />
          </div>
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Redeem Location</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">兌換地點</h2>
        <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
            <Navigation className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-white text-lg font-semibold">南竿福澳候船室旅遊服務櫃檯</p>
        </div>
      </div>
    </section>
  );
}
