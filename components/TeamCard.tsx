import Link from 'next/link';
import { Team } from '@/lib/data';

interface Props {
  team: Team;
}

export default function TeamCard({ team }: Props) {
  return (
    <Link href={`/teams/${team.id}`} style={{ display: 'block' }}>
      <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
        <div className={`team-badge ${team.colorClass}`} style={{ width: 80, height: 80, fontSize: '1.2rem', margin: '0 auto 1rem' }}>
          {team.shortName}
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.25rem' }}>{team.name}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>{team.city}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>{team.titles}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Titles</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--success)' }}>{team.wins}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Wins</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--danger)' }}>{team.losses}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Losses</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
          <span>👤 {team.captain}</span>
        </div>
      </div>
    </Link>
  );
}
