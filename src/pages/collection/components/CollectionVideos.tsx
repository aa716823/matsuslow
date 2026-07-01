import { Play } from 'lucide-react';

const videos = [
  { id: 'w4IPvOnizuw', title: '' },
  { id: 'zrmW1dNNzic', title: '' },
  { id: '9n2Wmt9OP_c', title: '' },
  { id: 'oZ2ETidLFYw', title: '' },
  { id: '46i6hcL8rZg', title: '' },
  { id: 'hV4WN67Sbm8', title: '' },
];

export default function CollectionVideos() {
  return (
    <section className="pt-24 pb-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500">
            <Play className="w-5 h-5 text-white" />
          </div>
          <span className="text-rose-400 text-sm font-medium tracking-widest uppercase">Media</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">影音回顧</h2>
        <div className="h-px bg-gradient-to-r from-rose-500 to-transparent mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video, i) =>
            video.id ? (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title || `影片 ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                {video.title && (
                  <p className="px-4 py-3 text-white text-sm font-medium">{video.title}</p>
                )}
              </div>
            ) : (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-dashed border-white/20 aspect-video flex items-center justify-center">
                <p className="text-white/30 text-sm"></p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
