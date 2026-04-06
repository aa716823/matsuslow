import mascotImage from '../assets/oba_01.svg';

export default function IntroSection() {
  return (
    <section id="intro" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              收集風景，也收集時間
            </h2>
          </div>
        </div>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed relative">
          <img
            src={mascotImage}
            alt="歐霸"
            className="absolute -top-[8rem] -left-[2rem] md:-left-[0rem] w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] object-contain pointer-events-none"
          />
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <p className="text-xl mb-6 text-center">
              來到馬祖，不只是走訪景點，<br />
              而是在海風、聚落與島嶼光影之間，慢慢收集一段屬於自己的旅程。
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-8"></div>

            <p className="text-lg leading-loose text-gray-600">
              《馬祖．慢島時間收集所》串聯<span className="font-semibold text-blue-700">第二屆台灣觀光100亮點</span>：芹壁聚落、大浦聚落、北海坑道，以及<span className="font-semibold text-blue-700">第一屆台灣觀光100亮點</span>：馬祖地質公園、坤坵沙灘、大坵島，透過打卡蒐集、聚落串聯、追星追淚、市集活動與手作體驗，邀請旅人一步一步走進馬祖，把看見的風景、留下的感受，拼成一段完整的慢島記憶。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
