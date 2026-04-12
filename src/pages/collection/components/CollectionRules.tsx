import { ShieldCheck } from 'lucide-react';

const rules = [
  '每人每點限兌換一次',
  '不得重複領取、轉售或以不正當方式取得',
  '原則不得代領；團體旅客得由領隊統一辦理',
  '兌換資格以現場查驗紀錄及可辨識資料為準',
];

export default function CollectionRules() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Rules</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">兌換規則</h2>
        <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <ul className="space-y-4">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-4 text-blue-100 leading-relaxed">
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
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
    </section>
  );
}
