import { Player } from '@/lib/data';

interface Props {
  player: Player;
}

export default function PlayerCard({ player }: Props) {
  return (
    <div className="player-card">
      <div className={`player-avatar ${player.teamColorClass}`}>
        {player.emoji}
      </div>
      <div className="player-name">{player.name}</div>
      <div className="player-role">{player.role}</div>
      <div className="player-team-badge" style={{ background: 'var(--border)' }}>{player.teamShort}</div>
      <div className="player-stats">
        <div className="player-stat">
          <div className="player-stat-value">{player.batting.runs}</div>
          <div className="player-stat-label">Runs</div>
        </div>
        <div className="player-stat">
          <div className="player-stat-value">{player.bowling.wickets}</div>
          <div className="player-stat-label">Wkts</div>
        </div>
        <div className="player-stat">
          <div className="player-stat-value">{player.batting.average.toFixed(1)}</div>
          <div className="player-stat-label">Avg</div>
        </div>
      </div>
    </div>
  );
}
