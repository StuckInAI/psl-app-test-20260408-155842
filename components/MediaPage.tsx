export default function MediaPage() {
  const highlights = [
    { id: 1, title: 'Shaheen Afridi destroys top order with 4/22', match: 'LQ vs MS', duration: '3:45', emoji: '🎯' },
    { id: 2, title: 'Fakhar Zaman smashes 89 off 52 balls', match: 'LQ vs IU', duration: '4:12', emoji: '💥' },
    { id: 3, title: 'Babar Azam elegant century - full highlights', match: 'PZ vs KK', duration: '8:30', emoji: '🏏' },
    { id: 4, title: 'Super Over thriller - Sultans vs Zalmi', match: 'MS vs PZ', duration: '5:22', emoji: '🔥' },
    { id: 5, title: 'Rizwan keeps & bats brilliantly for 76*', match: 'MS vs PZ', duration: '6:10', emoji: '🧤' },
    { id: 6, title: 'Haris Rauf yorker masterclass - 4 wickets', match: 'LQ vs QG', duration: '3:55', emoji: '⚡' },
  ];

  const photos = [
    { id: 1, title: 'Opening Ceremony - PSL 2025', emoji: '🎆' },
    { id: 2, title: 'Lahore Qalandars squad photo', emoji: '📸' },
    { id: 3, title: 'Fans at Gaddafi Stadium', emoji: '🏟️' },
    { id: 4, title: 'Trophy unveiling ceremony', emoji: '🏆' },
    { id: 5, title: 'Best catches of the season', emoji: '🤿' },
    { id: 6, title: 'Behind the scenes - dressing room', emoji: '🎽' },
    { id: 7, title: 'Night match atmosphere', emoji: '🌙' },
    { id: 8, title: 'Player of the match presentations', emoji: '⭐' },
  ];

  return (
    <div className="page-container">
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Media Centre</h1>

      <div style={{ marginBottom: '3rem' }}>
        <h2 className="section-title">🎥 Match Highlights</h2>
        <div className="grid-3">
          {highlights.map((item) => (
            <div key={item.id} className="highlight-card">
              <div className="highlight-thumb">
                <span>{item.emoji}</span>
                <div className="play-btn">▶</div>
              </div>
              <div className="highlight-info">
                <div className="highlight-title">{item.title}</div>
                <div className="highlight-meta">
                  <span>{item.match}</span>
                  <span>⏱ {item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 className="section-title">📸 Photo Gallery</h2>
        <div className="grid-4">
          {photos.map((photo) => (
            <div key={photo.id} className="highlight-card" style={{ cursor: 'pointer' }}>
              <div className="highlight-thumb" style={{ height: 120, fontSize: '2.5rem' }}>
                <span>{photo.emoji}</span>
              </div>
              <div className="highlight-info">
                <div className="highlight-title" style={{ fontSize: '0.85rem' }}>{photo.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">📻 Press Releases</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { date: '2025-02-14', title: 'PCB announces enhanced prize money for PSL 2025', tag: 'Official' },
            { date: '2025-02-12', title: 'PSL 2025 breaks viewership records in opening week', tag: 'Media' },
            { date: '2025-02-10', title: 'Fan experience upgrades announced for all PSL venues', tag: 'Fans' },
            { date: '2025-02-08', title: 'International broadcaster rights extended for PSL 2025', tag: 'Broadcasting' },
          ].map((release, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span className="badge badge-primary" style={{ marginRight: '0.75rem' }}>{release.tag}</span>
                  <span style={{ fontWeight: 600 }}>{release.title}</span>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{release.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
