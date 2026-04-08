import { Match } from '@/lib/data';
import Link from 'next/link';

interface Props {
  match: Match;
}

export default function MatchDetail({ match }: Props) {
  return (
    <div className="page-container">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/matches" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>← Back to Matches</Link>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          {match.matchNumber} • {match.venue} • {match.date}
          {match.status === 'live' && <span className="match-status-live" style={{ marginLeft: '1rem' }}>LIVE</span>}
          {match.status === 'completed' && <span className="match-status-completed" style={{ marginLeft: '1rem' }}>COMPLETED</span>}
          {match.status === 'upcoming' && <span className="match-status-upcoming" style={{ marginLeft: '1rem' }}>UPCOMING</span>}
        </div>
        <div className="card-body">
          <div className="match-teams" style={{ padding: '2rem 0' }}>
            <div className="match-team">
              <div className={`team-badge ${match.team1ColorClass}`} style={{ width: 70, height: 70, fontSize: '1rem' }}>{match.team1Short}</div>
              <div className="team-name" style={{ fontSize: '1.2rem', fontWeight: 800 }}>{match.team1}</div>
              {match.team1Score && <div className="team-score" style={{ fontSize: '1.8rem' }}>{match.team1Score}</div>}
            </div>
            <div className="match-vs" style={{ width: 60, height: 60, fontSize: '1.5rem' }}>VS</div>
            <div className="match-team">
              <div className={`team-badge ${match.team2ColorClass}`} style={{ width: 70, height: 70, fontSize: '1rem' }}>{match.team2Short}</div>
              <div className="team-name" style={{ fontSize: '1.2rem', fontWeight: 800 }}>{match.team2}</div>
              {match.team2Score && <div className="team-score" style={{ fontSize: '1.8rem' }}>{match.team2Score}</div>}
            </div>
          </div>

          {match.result && (
            <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(0,200,83,0.1)', borderRadius: 8, color: 'var(--success)', fontWeight: 700, marginBottom: '1rem' }}>
              🏆 {match.result}
            </div>
          )}

          {match.status === 'upcoming' && (
            <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,171,0,0.1)', borderRadius: 8, color: 'var(--warning)', fontWeight: 700, marginBottom: '1rem' }}>
              📅 Match starts at {match.time} on {match.date}
            </div>
          )}

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            {match.toss && <span>🪙 {match.toss}</span>}
            {match.manOfMatch && <span>⭐ MOM: {match.manOfMatch}</span>}
          </div>
        </div>
      </div>

      {match.innings && match.innings.length > 0 && (
        <div>
          <h2 className="section-title">Scorecard</h2>
          {match.innings.map((inn, idx) => (
            <div key={idx} className="card" style={{ marginBottom: '1.5rem' }}>
              <div className="card-header">
                {inn.team} — {inn.score} ({inn.overs} overs)
              </div>
              <div className="card-body" style={{ padding: 0 }}>
                <div style={{ overflowX: 'auto' }}>
                  <table className="scorecard-table">
                    <thead>
                      <tr>
                        <th>Batter</th>
                        <th>Dismissal</th>
                        <th style={{ textAlign: 'right' }}>R</th>
                        <th style={{ textAlign: 'right' }}>B</th>
                        <th style={{ textAlign: 'right' }}>4s</th>
                        <th style={{ textAlign: 'right' }}>6s</th>
                        <th style={{ textAlign: 'right' }}>SR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inn.batting.map((b, i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 700 }}>{b.name}</td>
                          <td style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{b.dismissal}</td>
                          <td style={{ textAlign: 'right', fontWeight: 700 }}>{b.runs}</td>
                          <td style={{ textAlign: 'right' }}>{b.balls || '-'}</td>
                          <td style={{ textAlign: 'right' }}>{b.fours || '-'}</td>
                          <td style={{ textAlign: 'right' }}>{b.sixes || '-'}</td>
                          <td style={{ textAlign: 'right' }}>{b.strikeRate > 0 ? b.strikeRate.toFixed(1) : '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Bowling
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="scorecard-table">
                    <thead>
                      <tr>
                        <th>Bowler</th>
                        <th style={{ textAlign: 'right' }}>O</th>
                        <th style={{ textAlign: 'right' }}>M</th>
                        <th style={{ textAlign: 'right' }}>R</th>
                        <th style={{ textAlign: 'right' }}>W</th>
                        <th style={{ textAlign: 'right' }}>Econ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inn.bowling.map((b, i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 700 }}>{b.name}</td>
                          <td style={{ textAlign: 'right' }}>{b.overs}</td>
                          <td style={{ textAlign: 'right' }}>{b.maidens}</td>
                          <td style={{ textAlign: 'right' }}>{b.runs}</td>
                          <td style={{ textAlign: 'right', fontWeight: 700, color: b.wickets > 0 ? 'var(--primary)' : 'inherit' }}>{b.wickets}</td>
                          <td style={{ textAlign: 'right' }}>{b.economy.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
