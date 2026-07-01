export default function DiyCTA() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-teal-950/50 to-slate-950">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">選一場手作，把馬祖帶回日常</h2>
        <p className="text-teal-200 text-lg leading-relaxed mb-10">
          從地方飲食到文化創作，<br />
          把一段在馬祖的停留，慢慢做成可以收藏的作品。<br />
          選一場喜歡的手作課程，留下屬於你的慢島記憶。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#sessions"
            className="inline-block px-7 py-3 rounded-full border border-teal-400 text-teal-300 font-semibold hover:bg-teal-400/10 transition-colors"
          >
            查看場次資訊
          </a>
          <a
            href="https://survey.hotaigroup.com.tw/s/7RmQq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            立即報名
          </a>
          <a
            href="#diy-items"
            className="inline-block px-7 py-3 rounded-full border border-white/20 text-white/60 font-semibold hover:bg-white/5 transition-colors"
          >
            查看注意事項
          </a>
        </div>
      </div>
    </section>
  );
}
