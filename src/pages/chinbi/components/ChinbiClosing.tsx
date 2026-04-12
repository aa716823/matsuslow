import { Waves } from 'lucide-react';

export default function ChinbiClosing() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-950/30 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <Waves className="w-10 h-10 text-amber-400 mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-2xl md:text-3xl font-light text-white animate-breathe">
          把北竿的慢，收進旅程裡。
        </p>
      </div>
    </section>
  );
}
