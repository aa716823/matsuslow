import { Users } from 'lucide-react';

export default function NightWaitlist() {
  return (
    <section className="pt-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
            <Users className="w-5 h-5 text-white" />
          </div>
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">Waitlist</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">額滿後，仍可等待釋出名額</h2>
        <div className="h-px bg-gradient-to-r from-purple-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <p className="text-blue-100 leading-relaxed">
            若活動場次報名額滿，可開放候補登記。若因交通異動、天候因素或其他因素有名額釋出，將依候補順序通知遞補；如因活動調整、延期或取消，亦將依主辦單位公告辦理。
          </p>
        </div>
      </div>
    </section>
  );
}
