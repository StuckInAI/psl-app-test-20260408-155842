import { news } from '@/lib/data';

export default function LatestNews() {
  return (
    <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <h2 className="section-title">Latest News</h2>
      <div className="grid-3">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-img">{item.emoji}</div>
            <div className="news-body">
              <div className="news-category">{item.category}</div>
              <div className="news-title">{item.title}</div>
              <div className="news-meta">{item.date} • {item.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
