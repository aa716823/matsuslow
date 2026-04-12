import { MapPin, Users, Moon, Music, Palette } from 'lucide-react';
import mascot02 from '../assets/oba_02.svg';

const activities = [
  {
    id: 1,
    title: '慢島時間收集・鷗霸拼圖行動',
    icon: MapPin,
    color: 'from-sky-400 to-blue-500',
    description: '走訪六大亮點，收集專屬的島嶼記憶',
    url: 'collection'
  },
  {
    id: 2,
    title: '芹壁慢慢走・鷗霸夥伴行動',
    icon: Users,
    color: 'from-cyan-400 to-teal-500',
    description: '漫步聚落巷弄，感受時光靜止的美好',
    url: '#'
  },
  {
    id: 3,
    title: '慢島夜行・追星追淚體驗',
    icon: Moon,
    color: 'from-slate-600 to-blue-700',
    description: '夜幕低垂時，與星空和藍眼淚相遇',
    url: '/nightexplore'
  },
  {
    id: 4,
    title: '藍調時光市集－慢語時光',
    icon: Music,
    color: 'from-blue-400 to-cyan-500',
    description: '在市集與音樂中，品味島嶼的聲音',
    url: '#'
  },
  {
    id: 5,
    title: '藍調手作體驗所',
    icon: Palette,
    color: 'from-teal-400 to-emerald-500',
    description: '親手創作，把馬祖的溫度帶回家',
    url: '#'
  }
];

export default function ActivityMenu() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <img
        src={mascot02}
        alt="鷗霸登船"
        className="absolute bottom-0 z-10 right-0 md:right-[12rem] w-[15rem] h-[15rem] object-contain pointer-events-none"
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            五種方式，慢遊馬祖
          </h2>
          <p className="text-xl text-gray-600">
            選擇你的島嶼時光
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <a
                key={activity.id}
                href={activity.url}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${activity.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-200 leading-none">
                      {activity.id}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight flex-1">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all duration-300">
                    <span>了解更多</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
