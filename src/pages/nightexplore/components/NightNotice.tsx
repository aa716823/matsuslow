import { AlertTriangle } from 'lucide-react';

export default function NightNotice() {
  return (
    <section className="px-6 bg-blue-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">Notice</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">報名前，請先確認這些事項</h2>
        <div className="h-px bg-gradient-to-r from-amber-500 to-transparent mb-8" />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <p className="text-blue-100 leading-relaxed mb-8">
            本活動為夜間戶外行程，實際前往地點將視當日星況、淚況、天候與安全條件彈性調整。為維護整體行程品質與參與安全，請於報名前詳閱注意事項，並確認可配合活動時間與地點後再行報名。
          </p>

          <div className="grid md:grid-cols-1 gap-3 mb-8">
            {[
              '藍眼淚與觀星皆屬自然現象，無法保證每場皆可見',
              '活動將依天候、海況及安全考量進行調整',
              '本活動不提供住宿及往返指定集合地點之交通',
              '限 12 歲（含）以上、70 歲（含）以下之非馬祖籍遊客參加',
              '報到時須出示身分證明文件及馬祖交通證明供工作人員核對',
              '每日活動於 19:15－19:30 開放報到，逾時未報到者視同自行放棄',
              '活動期間請遵守導覽人員及工作人員指引，切勿脫隊或私自行動',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                <span className="mt-0.5 text-amber-400 font-bold text-sm flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-blue-100 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-blue-200 text-sm leading-relaxed italic">
              夜間活動請穿著方便行走之服裝與鞋履，並留意海岸地形與現場動線，和我們一起在安全的前提下，看見馬祖最發光的夜。
            </p>
            <p className="text-blue-400 text-xs mt-3">
              ※ 實際活動內容與安全規範，依主辦單位最新公告為準。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
