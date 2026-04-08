import { players } from '@/lib/data';

export default function TopPlayers() {
  const topBatsmen = [...players].sort((a, b) => b.batting.runs - a.batting.runs).slice(0, 4);
  const topBowlers = [...players].sort((a, b) => b.bowling.wickets - a.bowling.wickets).slice(0, 4);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 className="section-title">Top Performers</h2>
      <div className="grid-2">
        <div className="card">
          <div className="card-header">🏏 Top Run Scorers</div>
          <div className="card-body" style={{ padding: 0 }}>
            {topBatsmen.map((player, idx) => (
              <div key={player.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderBottom: idx < topBatsmen.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem', color: 'var(--primary)', flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <div className={`team-badge-sm ${player.teamColorClass}`}>{player.teamShort}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{player.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{player.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--primary)' }}>{player.batting.runs}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>SR: {player.batting.strikeRate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">🎯 Top Wicket Takers</div>
          <div className="card-body" style={{ padding: 0 }}>
            {topBowlers.map((player, idx) => (
              <div key={player.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderBottom: idx < topBowlers.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem', color: 'var(--primary)', flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <div className={`team-badge-sm ${player.teamColorClass}`}>{player.teamShort}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{player.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{player.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--primary)' }}>{player.bowling.wickets}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Econ: {player.bowling.economy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
