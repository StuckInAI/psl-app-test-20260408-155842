import { allMatches } from '@/lib/data';
import MatchCard from '@/components/MatchCard';
import Link from 'next/link';

export default function FeaturedMatches() {
  const featured = allMatches.slice(0, 3);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Matches</h2>
        <Link href="/matches" style={{ color: 'var(--primary)', fontSize: '0.88rem', fontWeight: 600 }}>View All →</Link>
      </div>
      <div className="grid-3">
        {featured.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
