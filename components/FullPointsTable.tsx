import { pointsTable } from '@/lib/data';

export default function FullPointsTable() {
  return (
    <div className="card">
      <div style={{ overflowX: 'auto' }}>
        <table className="points-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>NR</th>
              <th>Pts</th>
              <th>NRR</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((entry) => (
              <tr key={entry.teamId} className={entry.qualifier ? 'qualifier-row' : entry.eliminator ? 'eliminator-row' : ''}>
                <td className="team-rank">{entry.rank}</td>
                <td>
                  <div className="team-info-cell">
                    <div className={`team-badge-sm ${entry.colorClass}`}>{entry.teamShort}</div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{entry.team}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                        {entry.qualifier ? '✅ Qualifier' : entry.eliminator ? '⚡ Eliminator' : ''}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{entry.played}</td>
                <td style={{ color: 'var(--success)', fontWeight: 700 }}>{entry.won}</td>
                <td style={{ color: 'var(--danger)', fontWeight: 700 }}>{entry.lost}</td>
                <td>{entry.noResult}</td>
                <td style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1.1rem' }}>{entry.points}</td>
                <td style={{ color: parseFloat(entry.nrr) >= 0 ? 'var(--success)' : 'var(--danger)', fontWeight: 600 }}>{entry.nrr}</td>
                <td>
                  <div className="form-dots">
                    {entry.form.map((f, i) => (
                      <div key={i} className={`form-dot ${f.toLowerCase() === 'w' ? 'w' : f.toLowerCase() === 'l' ? 'l' : 'nr'}`}>
                        {f}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
        <span><span style={{ color: 'var(--success)' }}>■</span> Qualify for Qualifier</span>
        <span><span style={{ color: 'var(--warning)' }}>■</span> Qualify for Eliminator</span>
      </div>
    </div>
  );
}
