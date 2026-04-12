import { Store } from 'lucide-react';

const shops = [
  {
    no: '01',
    name: '芹壁地中海民宿',
    desc: '面海而居的石屋住宿空間，保留聚落風貌，也讓旅人在停留之間感受芹壁的慢節奏。',
  },
  {
    no: '02',
    name: '海風小食堂',
    desc: '提供在地風味餐點與輕食，是散步途中適合停下來坐坐的小店。',
  },
  {
    no: '03',
    name: '慢慢咖啡',
    desc: '結合住宿與旅行體驗的空間，讓旅人用更慢的方式進入北竿的生活節奏。',
  },
];

export default function ChinbiShops() {
  return (
    <section id="shops" className="pt-24 px-6 bg-gradient-to-b from-slate-950 to-amber-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
            <Store className="w-5 h-5 text-white" />
          </div>
          <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">Partner Shops</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">走進芹壁，和聚落慢慢認識</h2>
        <div className="h-px bg-gradient-to-r from-amber-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 mb-8">
          <p className="text-amber-100 leading-relaxed mb-8">
            《芹壁慢慢走・鷗霸夥伴行動》以北竿芹壁聚落為主場域，串聯在地合作店家、民宿與聚落空間，邀請旅人透過停留、消費與散步，感受芹壁獨有的石屋風景、聚落紋理與生活節奏。活動期間內，旅客可於合作店家參與消費兌換，收集限定的鷗霸夥伴徽章，讓每一次停留，都成為旅途中被記住的一部分。
          </p>

          <div className="space-y-4">
            {shops.map((shop) => (
              <div key={shop.no} className="flex gap-5 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-amber-400 font-bold text-lg flex-shrink-0">{shop.no}</span>
                <div>
                  <p className="text-white font-semibold mb-1">{shop.name}</p>
                  <p className="text-amber-100 text-sm leading-relaxed">{shop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-sm px-2">
          合作店家名單與優惠內容將依實際公告為準，後續可於此區更新正式店家資訊。
        </p>
      </div>
    </section>
  );
}
