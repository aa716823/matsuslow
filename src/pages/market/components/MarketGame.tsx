import { Gamepad2, CheckCircle } from 'lucide-react';
import game1 from '../../../assets/game_1.png';
import game2 from '../../../assets/game_2.png';
import game3 from '../../../assets/game_3.png';
import lotteryImg from '../../../assets/lottery.svg';

const games = [
  { name: '海浪圈圈', img: game1 },
  { name: '潮汐投擲', img: game2 },
  { name: '深海敲敲樂', img: game3 },
];

const rules = [
  '指定貼文留言畫面',
  '留言中上傳之打卡照片',
  '本人身分證明文件',
  '馬祖旅遊證明',
];

export default function MarketGame() {
  return (
    <section className="pt-24 px-6 bg-gradient-to-b from-slate-900 to-indigo-950/60">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">Game</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">完成任務，收集屬於慢語時光的活動記憶</h2>
        <div className="h-px bg-gradient-to-r from-indigo-500 to-transparent mb-8" />

        <p className="text-violet-100 leading-relaxed mb-10">
          活動現場可至服務台領取闖關卡，完成 3 個遊戲章，即可取得兌換資格。完成闖關後，還可依現場規則參加
          <span className="text-white font-semibold"> 藍光星夜皂 </span>抽獎，中獎者可參與現場手作體驗。
        </p>

        {/* 指定遊戲 */}
        <div className="mb-10">
          <h3 className="text-white font-semibold mb-5 text-lg">指定遊戲 3 項</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {games.map((g, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <img src={g.img} alt={g.name} className="w-full aspect-square object-cover" />
                <p className="text-white text-center py-3 font-medium">{g.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 消費任務 + 兌換規則 + 抽獎 合併區塊 */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 overflow-visible">
          {/* 肥皂圖片：桌機絕對定位疊在右側，手機移至下方 */}
          <img
            src={lotteryImg}
            alt="藍光星夜皂"
            className="hidden md:block absolute object-contain drop-shadow-2xl pointer-events-none"
            style={{ right: 0, bottom: 0, width: '30em' }}
          />

          {/* 文字內容：桌機右側留出圖片空間 */}
          <div className="md:pr-56 lg:pr-64 space-y-8">
            {/* 消費任務 */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-lg">消費或住宿任務 1 項</h3>
              <p className="text-violet-300 text-sm mb-3">以下擇一完成即可：</p>
              <ul className="space-y-2 text-violet-100 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />於指定合作店家或活動攤位完成 1 次消費，可獲得 1 章</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />芹壁場次期間，於指定合作民宿住宿者，可認列 1 章</li>
              </ul>
            </div>

            {/* 出示驗證資料 */}
            <div>
              <h3 className="text-white font-semibold mb-1 text-lg">兌換規則</h3>
              <ul className="space-y-2 text-violet-100 text-sm">
                {[
                  '每人每場次限兌換特色點心 1 次',
                  '集章卡僅限當日當場次使用，不得跨日累計',
                  '集章卡遺失、毀損或污損致無法辨識者，恕不補發',
                  '如有偽造、重複使用、轉借他人等情形，主辦單位得取消兌換資格',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 抽獎說明 */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-lg">藍光星夜皂抽獎</h3>
              <p className="text-violet-100 text-sm leading-relaxed">
                完成指定闖關內容後，可立即參加抽獎；中獎者得參與「藍光星夜皂」現場手作體驗。每場次名額限 20 人，額滿為止。
              </p>
            </div>

            {/* 手機版：圖片顯示於文字下方 */}
            <div className="md:hidden flex justify-center pt-4">
              <img src={lotteryImg} alt="藍光星夜皂" className="w-3/4 max-w-xs object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
