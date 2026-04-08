import Link from 'next/link';
import { Match } from '@/lib/data';

interface Props {
  match: Match;
}

export default function MatchCard({ match }: Props) {
  return (
    <Link href={`/matches/${match.id}`} style={{ display: 'block' }}>
      <div className="match-card">
        <div className="match-card-header">
          <span>{match.matchNumber} • {match.venue}</span>
          {match.status === 'live' && <span className="match-status-live">LIVE</span>}
          {match.status === 'upcoming' && <span className="match-status-upcoming">{match.date} {match.time}</span>}
          {match.status === 'completed' && <span className="match-status-completed">FT</span>}
        </div>
        <div className="match-teams">
          <div className="match-team">
            <div className={`team-badge ${match.team1ColorClass}`}>{match.team1Short}</div>
            <div className="team-name">{match.team1}</div>
            {match.team1Score && <div className="team-score">{match.team1Score}</div>}
          </div>
          <div className="match-vs">VS</div>
          <div className="match-team">
            <div className={`team-badge ${match.team2ColorClass}`}>{match.team2Short}</div>
            <div className="team-name">{match.team2}</div>
            {match.team2Score && <div className="team-score">{match.team2Score}</div>}
          </div>
        </div>
        {match.result && (
          <div className="match-result">{match.result}</div>
        )}
        {match.status === 'live' && (
          <div className="match-result" style={{ background: 'rgba(255,61,0,0.1)', color: 'var(--danger)' }}>
            🔴 Match in progress
          </div>
        )}
      </div>
    </Link>
  );
}
