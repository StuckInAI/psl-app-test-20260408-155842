import Link from 'next/link';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>
          Pakistan Super League 2025
        </div>
        <h1 className="hero-title">The Greatest
T20 League</h1>
        <p className="hero-subtitle">
          Experience the thrill of Pakistan Super League — world-class cricket, iconic rivalries, and unforgettable moments.
        </p>
        <div className="hero-buttons">
          <Link href="/matches" className="btn-primary">View Live Matches</Link>
          <Link href="/standings" className="btn-secondary">Points Table</Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          {[
            { value: '6', label: 'Teams' },
            { value: '34', label: 'Matches' },
            { value: '10', label: 'Season' },
            { value: '200+', label: 'Players' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
