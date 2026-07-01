import { Store } from 'lucide-react';

const shops = [
  '芹壁休閒渡假村',
  '芹境飲食店（芹沃咖啡）',
  '芹壁愛情海',
  '芹壁家適海景民宿',
  '雲記商店',
  '芹壁水漾民宿（預約）',
  '鏡沃小吃店',
  '花草間咖啡坊',
  '蔚在行工作室',
];

export default function MarketShops() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-indigo-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
            <Store className="w-5 h-5 text-white" />
          </div>
          <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Shops</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">走進芹壁，也走進聚落日常</h2>
        <div className="h-px bg-gradient-to-r from-violet-500 to-transparent mb-8" />

        <p className="text-violet-100 leading-relaxed mb-8">
          《藍調時光市集－慢語時光》除現場活動外，也串聯芹壁聚落合作店家與民宿，讓旅人可以一邊參與活動、一邊走進聚落生活。完成指定消費或住宿條件，亦可配合集章活動使用，讓停留不只是看見風景，也成為真正的參與。
          <br /><span className="text-white/50 text-sm">合作店家、合作攤位與合作民宿，以主辦單位公告名單為準。</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {shops.map((shop, i) => (
            <div key={i} className="bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all rounded-xl px-5 py-3 text-violet-100 text-sm">
              {shop}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
