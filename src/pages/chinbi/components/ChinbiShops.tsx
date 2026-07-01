import { Store } from 'lucide-react';

const categories = [
  {
    label: '餐飲',
    items: [
      '芹壁休閒渡假村', '芹境飲食店(芹沃咖啡)', '芹壁愛情海',
      '芹壁家適海景民宿', '雲記商店', '芹壁水漾民宿(預約)',
      '鏡沃小吃店', '花草間咖啡坊', '蔚在行工作室',
    ],
  },
  {
    label: '民宿',
    items: [
      '芹壁休閒渡假村', '芹壁地中海民宿', '家適咖啡.民宿',
      '梅好石屋', '芹壁愛情海', '家適咖啡.民宿2館',
      '家適咖啡.民宿3館', '芹壁愛情海2館', '芹壁德順號民宿',
      '芹壁德順號民宿2館', '溫馨民宿', '悠活23海景民宿',
      '芹壁家適海景民宿', '芹壁愛情海3館', '芹壁老時光',
      '芹壁老時光2館', '芹壁水漾', '芹壁幸福海岸民宿',
      '幸福海岸民宿2館', '芹壁幸福海岸民宿3館', '芹壁休閒渡假村二館',
      '芹壁村25號民宿', '芹壁村25號之老村長的漁寮', '美芹居',
      '愛芹小築', '芹壁青年民宿', '芹壁山莊',
      '小玫窩民宿', '小玫窩民宿二館', '芹壁榕樹下民宿',
      '芹壁背包客棧', '芹壁五家村民宿', '芹壁山城民宿',
      '芹壁山城民宿2館', '靜園海岸', '芹壁望海樓民宿',
    ],
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

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <div key={cat.label}>
                {/* 類別標題列 */}
                <div className="bg-amber-800/50 text-amber-100 text-center text-sm font-semibold py-2 tracking-widest border-b border-white/10">
                  {cat.label}
                </div>
                {/* 店家 3 欄網格 */}
                <div className="grid grid-cols-3">
                  {cat.items.map((name, i) => (
                    <div
                      key={i}
                      className={`px-4 py-3 text-amber-100 text-sm border-b border-white/10 border-r last:border-r-0 [&:nth-child(3n)]:border-r-0 ${i % 3 === 0 ? 'bg-amber-800/50' : ''}`}
                    >
                      {name}
                    </div>
                  ))}
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
