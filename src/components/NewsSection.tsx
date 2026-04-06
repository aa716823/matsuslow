import { Bell, Calendar, MapPin, AlertCircle } from 'lucide-react';

const news = [
  {
    id: 1,
    icon: Bell,
    title: '活動開放報名',
    description: '慢島時間收集・鷗霸拼圖行動現已開放報名，限額50組參與者'
  },
  {
    id: 2,
    icon: Calendar,
    title: '場次公告',
    description: '追星追淚體驗場次已公布，5月-10月每月兩場'
  },
  {
    id: 3,
    icon: MapPin,
    title: '交通提醒',
    description: '6月開始，北海坑道進行維護工程，預計7月底完成'
  },
  {
    id: 4,
    icon: AlertCircle,
    title: '兌換資訊',
    description: '集滿6大亮點可兌換限定紀念品，詳情見活動章程'
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            最新消息
          </h2>
          <p className="text-xl text-gray-600">
            活動開放報名、場次公告、兌換資訊、交通提醒與最新活動消息，
            都會在這裡持續更新，陪你掌握每一段慢島時間。
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-8"></div>

        <ul className="divide-y divide-gray-100">
          {news.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="flex items-center gap-5 py-5 group hover:bg-blue-50 transition-colors duration-300 px-4 rounded-xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-gray-900 mr-3">{item.title}</span>
                  <span className="text-gray-600">{item.description}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
