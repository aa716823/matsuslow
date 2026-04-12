import { Puzzle } from 'lucide-react';

export default function CollectionIntro() {
  return (
    <section id="intro" className="pt-24 px-6 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Puzzle className="w-5 h-5 text-white" />
          </div>
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">About</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">收集六片拼圖，拼出一段慢島旅程</h2>
        <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 space-y-4 text-blue-100 leading-relaxed">
          <p>
            《慢島時間收集・鷗霸拼圖行動》串聯馬祖六大亮點，邀請旅人透過拍照打卡與公開貼文參與活動，完成一站、收集一片拼圖。
          </p>
          <p>
            當六片拼圖慢慢被收集完成，留下的不只是紀念品，更是一段屬於自己的慢島時間。
          </p>
        </div>
      </div>
    </section>
  );
}
