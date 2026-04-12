import { ClipboardList } from 'lucide-react';

const steps = [
  '於指定地點拍照打卡',
  '於社群平台發布公開貼文',
  '以本人帳號出示打卡照片、指定 Hashtag 與公開貼文畫面',
  '經現場工作人員確認後辦理兌換',
];

export default function CollectionHow() {
  return (
    <section className="pt-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">How to Join</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">參加方式</h2>
        <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent mb-8" />

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-5">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                {i + 1}
              </div>
              <p className="text-blue-100 leading-relaxed pt-1.5">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
