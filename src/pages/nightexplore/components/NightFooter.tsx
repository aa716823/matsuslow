import { Waves } from 'lucide-react';

export default function NightFooter() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Waves className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
          <span className="font-bold text-blue-200">慢島時間收集所</span>
        </div>
        <p className="text-blue-400 text-sm">
          &copy; 2026 小青鑫 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
