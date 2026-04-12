import { Medal } from 'lucide-react';

const redeemSteps = [
  '於合作店家完成消費或住宿',
  '符合活動條件即可兌換鷗霸夥伴徽章乙枚',
  '徽章款式隨機發放，不可挑選',
];

const rules = [
  '每人每次限兌換一次',
  '住宿與消費可各兌換一次',
  '數量有限，發完為止',
  '不得轉售或重複領取',
];

export default function ChinbiBadge() {
  return (
    <section className="pt-24 px-6 bg-amber-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
            <Medal className="w-5 h-5 text-white" />
          </div>
          <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">Badge Redeem</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">慢慢走，也慢慢收集</h2>
        <div className="h-px bg-gradient-to-r from-orange-500 to-transparent mb-8" />

        <p className="text-amber-100 leading-relaxed mb-8">
          活動期間於北竿芹壁聚落合作店家消費或住宿，即可參與《芹壁慢慢走・鷗霸夥伴行動》。符合條件者，可兌換
          <span className="text-white font-semibold"> 鷗霸夥伴徽章乙枚</span>。
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-amber-300 font-semibold text-lg mb-5">兌換方式</h3>
            <ul className="space-y-3">
              {redeemSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-amber-100">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-amber-300 font-semibold text-lg mb-5">兌換規則</h3>
            <ul className="space-y-3">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-amber-100">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
