import { players } from '@/lib/data';
import PlayerCard from '@/components/PlayerCard';

export default function PlayersPage() {
  return (
    <div className="page-container">
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Players</h1>
      <div className="grid-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
