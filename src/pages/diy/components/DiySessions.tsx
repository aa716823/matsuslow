import { Calendar, MapPin, User } from 'lucide-react';

const sessionGroups = [
  {
    title: '北竿｜慢味學堂',
    sessions: [
      { date: '2026/5/1', item: '馬蔥餅', time: '15:00－16:30' },
      { date: '2026/5/2', item: '地瓜餃', time: '15:00－16:30' },
      { date: '2026/5/3', item: '龜桃', time: '15:00－16:30' },
      { date: '2026/6/6', item: '地瓜餃', time: '14:00－15:30' },
    ],
    instructor: '王春萍',
    location: '北竿塘岐村 273 之 6 號',
  },
  {
    title: '慢島微醺日・老酒與島嶼故事',
    warning: '限年滿 18 歲者參加',
    sessions: [
      { date: '2026/5/30', time: '10:30－11:30' },
      { date: '2026/5/31', time: '10:30－11:30' },
    ],
    instructor: '王詩傑',
    location: '家適咖啡／芹壁食屋區',
  },
  {
    title: '馬祖記憶護身符吊飾',
    sessions: [
      { date: '2026/5/30', time: '14:40－15:40' },
      { date: '2026/5/31', time: '14:40－15:40' },
    ],
    instructor: '王春萍',
    location: '坂里慢語時光音樂會場域',
  },
];

export default function DiySessions() {
  return (
    <section id="sessions" className="pt-24 px-6 bg-gradient-to-b from-slate-900 to-teal-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">Sessions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">依照日期，選一場屬於你的藍調手作時光</h2>
        <div className="h-px bg-gradient-to-r from-teal-500 to-transparent mb-10" />

        <div className="space-y-6">
          {sessionGroups.map((group, gi) => (
            <div key={gi} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-white font-semibold text-lg">{group.title}</h3>
                {group.warning && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    ⚠ {group.warning}
                  </span>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {group.sessions.map((s, si) => (
                  <div key={si} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold text-center leading-tight">
                      {s.date.slice(5)}
                    </div>
                    <div>
                      {'item' in s && <p className="text-white text-sm font-medium">{(s as { item: string }).item}</p>}
                      <p className="text-teal-300 text-xs">{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 text-sm text-teal-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  講師：{group.instructor}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {group.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm mt-8 px-2">
          本活動依各場次於北竿塘岐、芹壁聚落及坂里活動場域辦理，實際活動地點、報到位置、場域配置及動線安排，依官方公告及現場指示為準。
        </p>
      </div>
    </section>
  );
}
