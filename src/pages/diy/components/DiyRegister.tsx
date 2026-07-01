import { ClipboardList, CheckCircle } from 'lucide-react';

const methods = [
  '採線上或公告方式報名',
  '每人每場次限報名 1 次',
  '如重複報名同一場次，以主辦單位認定之有效報名資料為準',
  '報名結果將於報名日起 7 日內，以電子郵件、簡訊、電話或其他公告方式通知',
  '如報名超過名額，得依情況列候補名單並依序通知遞補',
];

export default function DiyRegister() {
  return (
    <section className="pt-24 px-6 bg-teal-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">Register</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">免費報名，額滿為止</h2>
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-8" />

        <p className="text-teal-100 leading-relaxed mb-10">
          本活動採<span className="text-white font-semibold"> 報名制 </span>辦理，每場次開放報名名額，額滿為止。
          報名者須依主辦單位公告方式填寫報名資料，報名資料不完整、資訊不正確或無法辨識者，主辦單位得不予受理。
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* 報名方式 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4 text-lg">報名方式</h3>
            <ul className="space-y-3">
              {methods.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-teal-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* 費用說明 */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">費用說明</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                本活動為<span className="text-emerald-400 font-semibold"> 免費體驗</span>，參加者無須支付報名費用。
                每位完成報到並參與體驗者，皆可免費參與該場次課程，並依課程內容完成作品或體驗成果。
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-red-400 font-semibold mb-3 text-lg">⚠ 特別提醒</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                「慢島微醺日・燒酒與島嶼故事」因涉及酒類體驗，限<span className="text-red-400 font-semibold"> 年滿 18 歲者 </span>參加；
                報到時須出示身分證、健保卡或其他足資證明年齡之文件供現場查驗。
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://survey.hotaigroup.com.tw/s/7RmQq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            立即報名
          </a>
        </div>
      </div>
    </section>
  );
}
