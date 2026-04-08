import { pointsTable } from '@/lib/data';
import Link from 'next/link';

export default function PointsTablePreview() {
  const preview = pointsTable.slice(0, 4);

  return (
    <div className="card">
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>🏆 Points Table</span>
        <Link href="/standings" style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600 }}>View Full →</Link>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="points-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>Pts</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {preview.map((entry) => (
              <tr key={entry.teamId} className={entry.qualifier ? 'qualifier-row' : entry.eliminator ? 'eliminator-row' : ''}>
                <td className="team-rank">{entry.rank}</td>
                <td>
                  <div className="team-info-cell">
                    <div className={`team-badge-sm ${entry.colorClass}`}>{entry.teamShort}</div>
                    <span style={{ fontWeight: 600 }}>{entry.teamShort}</span>
                  </div>
                </td>
                <td>{entry.played}</td>
                <td style={{ color: 'var(--success)', fontWeight: 700 }}>{entry.won}</td>
                <td style={{ color: 'var(--danger)', fontWeight: 700 }}>{entry.lost}</td>
                <td style={{ fontWeight: 900, color: 'var(--primary)' }}>{entry.points}</td>
                <td style={{ color: parseFloat(entry.nrr) >= 0 ? 'var(--success)' : 'var(--danger)', fontWeight: 600 }}>{entry.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
