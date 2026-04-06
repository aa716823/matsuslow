import bannerImage from '../assets/banner.jpg';
import titleImage from '../assets/title_02.svg';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* 漸層遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 animate-shimmer02" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6 relative">
          <img src={titleImage} alt="慢島時間收集所" className="w-[24rem] h-[24rem]" />
        </div>
        {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          馬祖．慢島時間收集所
        </h1> */}

        <p className="text-2xl md:text-3xl text-blue-50 mb-8 font-light">
          這一趟，時間留在島上
        </p>

        <div className="max-w-3xl mx-auto text-lg md:text-xl text-white leading-relaxed space-y-4 animate-float mt-20">
          <p>
            走進馬祖，不只是看風景，
          </p>
          <p>
            而是在島嶼的節奏裡，慢慢收集一段屬於自己的時間。
          </p>
          <p className="pt-4">
            從六大亮點打卡、聚落慢遊、夜間追星追淚，到市集音樂與手作體驗，<br />
            把每一次停留、每一段風景、每一個正在發生的瞬間，<br />
            都變成旅程裡值得帶走的記憶。
          </p>
        </div>

        <div className="mt-12">
          <button
            onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-blue-100 transition-colors"
          >
            <svg className="w-8 h-8 animate-bounce mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
