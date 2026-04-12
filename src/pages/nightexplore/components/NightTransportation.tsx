import { Bus, MapPin } from 'lucide-react';

export default function NightTransportation() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
            <Bus className="w-5 h-5 text-white" />
          </div>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">Transportation</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">先抵達集合地，再一起走進夜色裡</h2>
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <p className="text-blue-100 leading-relaxed mb-8">
            本活動不提供參加者往返馬祖及指定集合地點之交通，請旅客自行安排交通後，依公告時間前往集合地點報到。各島預計集合地點如下，惟實際集合地點及活動地點，仍須視當日場次安排、天候、海況及現場狀況調整，並以主辦單位公告為準。
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              { island: '南竿', location: '北海坑道' },
              { island: '北竿', location: '芹壁沙灘' },
              { island: '東莒', location: '東莒村辦公室前' },
              { island: '西莒', location: '青帆港碼頭' },
              { island: '東引', location: '中柱港' },
            ].map((item) => (
              <div key={item.island} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{item.island}</p>
                  <p className="text-blue-300 text-sm">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-900/30 border border-teal-500/20 rounded-xl px-5 py-4">
            <p className="text-teal-200 text-sm leading-relaxed">
              請於活動開始前 <span className="font-semibold text-white">15 分鐘</span>抵達指定集合地點，避免影響整體出發時間與體驗流程。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
