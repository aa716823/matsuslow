import { Waves, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Waves className="w-8 h-8" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold">慢島時間收集所</h3>
            </div>
            <p className="text-blue-200 leading-relaxed">
              在馬祖，收集屬於你的島嶼時光
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">活動單位</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">交通部觀光署</a></li>
              <li><a href="#" className="hover:text-white transition-colors">台灣觀光 100 亮點</a></li>
              <li><a href="#" className="hover:text-white transition-colors">連江縣交通旅遊局</a></li>
              <li><a href="#" className="hover:text-white transition-colors">接受交通部觀光屬補助 [廣告]</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2026 小青鑫 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
