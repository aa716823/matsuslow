import { Package } from 'lucide-react';

const materials = [
  { title: '慢味學堂', desc: '依課程主題使用在地食材與傳統飲食材料' },
  { title: '燒酒與島嶼故事', desc: '依課程安排使用燒酒體驗相關內容與導入材料' },
  { title: '馬祖記憶護身符吊飾', desc: '依現場提供之手作材料進行創作與製作' },
];

export default function DiyMaterials() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-teal-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">Materials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">從材料開始，慢慢認識馬祖</h2>
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-8" />

        <p className="text-teal-100 leading-relaxed mb-8">
          各場次課程將由專業講師帶領進行，內容包含主題介紹、材料說明、文化背景分享及實作體驗。
          實際課程流程、使用材料及完成作品內容，得依講師教學安排及現場狀況調整。
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {materials.map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-teal-400 text-xs font-medium mb-2">0{i + 1}</p>
              <h3 className="text-white font-semibold mb-2">{m.title}</h3>
              <p className="text-teal-200 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-teal-500/20 rounded-2xl p-6 text-center">
          <p className="text-teal-100 leading-relaxed">
            每一場手作課程，都不只是做出作品，<br className="hidden md:block" />
            也是透過材料、味道與手感，重新感受馬祖的生活節奏。
          </p>
        </div>
      </div>
    </section>
  );
}
