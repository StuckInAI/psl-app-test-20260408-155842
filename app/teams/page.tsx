import { teams } from '@/lib/data';
import TeamCard from '@/components/TeamCard';

export default function TeamsPage() {
  return (
    <div className="page-container">
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Teams</h1>
      <div className="grid-3">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
