import { UtensilsCrossed } from 'lucide-react';
import foodImg from '../../../assets/food_1.png';

const items = [
  { name: '慢島金光', desc: '油菊花枸杞茶' },
  { name: '海風桔香', desc: '淡菜桔醬' },
  { name: '島嶼煙花', desc: '炸魚麵佐紅糟醬' },
  { name: '時光暖心', desc: '地瓜餃湯圓粄' },
  { name: '慢島手作', desc: '繼光餅比薩＋鹹豬肉風味' },
];

export default function MarketFood() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-950/60 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Special Snacks</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">完成闖關後，兌換一份慢語時光限定滋味</h2>
        <div className="h-px bg-gradient-to-r from-violet-500 to-transparent mb-8" />

        <div className="relative mb-10">
          {/* 桌機：圖片絕對定位於右下角 */}
          <img
            src={foodImg}
            alt="特色點心"
            className="hidden md:block absolute object-contain drop-shadow-2xl pointer-events-none"
            style={{ right: 0, bottom: 0, width: '22em' }}
          />

          {/* 文字內容：桌機右側留出圖片空間 */}
          <div className="md:pr-96">
            <p className="text-violet-100 leading-relaxed mb-6">
              活動特色點心結合地方風味與活動主題設計，參加者完成闖關卡指定內容，集滿
              <span className="text-white font-semibold"> 遊戲章 3 個＋消費章 1 個 </span>後，即可至服務台兌換特色點心 1 份。每場次限量 100 份，數量有限，兌完為止。
            </p>
            <div className="space-y-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-violet-500 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-violet-300 text-sm">（{item.desc}）</span>
                </div>
              ))}
            </div>

            {/* 手機版圖片 */}
            <div className="md:hidden flex justify-center pt-6">
              <img src={foodImg} alt="特色點心" className="w-3/4 max-w-xs object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>

        <p className="text-white/40 text-sm px-2">
          獎品、點心或活動贈品均以現場實際庫存為準，恕不得挑選、保留、更換或折換現金。
        </p>
      </div>
    </section>
  );
}
