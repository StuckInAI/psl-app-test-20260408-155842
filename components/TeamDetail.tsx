import { Team, players, allMatches } from '@/lib/data';
import Link from 'next/link';

interface Props {
  team: Team;
}

export default function TeamDetail({ team }: Props) {
  const teamPlayers = players.filter((p) => p.teamId === team.id);
  const teamMatches = allMatches.filter(
    (m) => m.team1Short === team.shortName || m.team2Short === team.shortName
  );

  return (
    <div className="page-container">
      <div style={{ marginBottom: '1.5rem' }}>
        <Link href="/teams" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>← Back to Teams</Link>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className={`team-badge ${team.colorClass}`} style={{ width: 100, height: 100, fontSize: '1.4rem', flexShrink: 0 }}>
              {team.shortName}
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>{team.name}</h1>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                <span>📍 {team.city}</span>
                <span>🏟️ {team.homeGround}</span>
                <span>🏆 {team.titles} Title{team.titles !== 1 ? 's' : ''}</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                <span><strong>Captain:</strong> {team.captain}</span>
                <span><strong>Coach:</strong> {team.coach}</span>
                <span><strong>NRR:</strong> <span style={{ color: parseFloat(team.nrr) >= 0 ? 'var(--success)' : 'var(--danger)' }}>{team.nrr}</span></span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--success)' }}>{team.wins}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>WINS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--danger)' }}>{team.losses}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>LOSSES</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {teamPlayers.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Squad</h2>
          <div className="grid-4">
            {teamPlayers.map((player) => (
              <div key={player.id} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{player.emoji}</div>
                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{player.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{player.role}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.8rem' }}>
                  {player.batting.runs > 0 && <span>{player.batting.runs} runs</span>}
                  {player.bowling.wickets > 0 && <span>{player.bowling.wickets} wkts</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {teamMatches.length > 0 && (
        <div>
          <h2 className="section-title">Recent Matches</h2>
          <div className="grid-auto">
            {teamMatches.map((match) => (
              <Link key={match.id} href={`/matches/${match.id}`} style={{ display: 'block' }}>
                <div className="match-card">
                  <div className="match-card-header">
                    <span>{match.matchNumber}</span>
                    {match.status === 'live' && <span className="match-status-live">LIVE</span>}
                    {match.status === 'upcoming' && <span className="match-status-upcoming">UPCOMING</span>}
                    {match.status === 'completed' && <span className="match-status-completed">FT</span>}
                  </div>
                  <div className="match-teams">
                    <div className="match-team">
                      <div className={`team-badge ${match.team1ColorClass}`}>{match.team1Short}</div>
                      <div className="team-name">{match.team1Short}</div>
                      {match.team1Score && <div className="team-score" style={{ fontSize: '1rem' }}>{match.team1Score}</div>}
                    </div>
                    <div className="match-vs">VS</div>
                    <div className="match-team">
                      <div className={`team-badge ${match.team2ColorClass}`}>{match.team2Short}</div>
                      <div className="team-name">{match.team2Short}</div>
                      {match.team2Score && <div className="team-score" style={{ fontSize: '1rem' }}>{match.team2Score}</div>}
                    </div>
                  </div>
                  {match.result && <div className="match-result">{match.result}</div>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
