export default function WinProbabilityWidget() {
  const matchData = {
    team1: 'LQ',
    team2: 'PZ',
    team1Color: '#e31e24',
    team2Color: '#f7941d',
    team1Prob: 62,
    team2Prob: 38,
    matchStatus: 'Match 12 - In Progress',
  };

  return (
    <div className="card">
      <div className="card-header">📊 Win Probability</div>
      <div className="card-body">
        <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'center' }}>
          {matchData.matchStatus}
        </div>
        <div className="win-prob">
          <div className="win-prob-team" style={{ color: matchData.team1Color }}>{matchData.team1}</div>
          <div className="win-prob-bar">
            <div className="win-prob-fill-a" style={{ width: `${matchData.team1Prob}%` }} />
            <div className="win-prob-fill-b" style={{ width: `${matchData.team2Prob}%` }} />
          </div>
          <div className="win-prob-team" style={{ color: matchData.team2Color }}>{matchData.team2}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
          <span style={{ color: matchData.team1Color, fontWeight: 800, fontSize: '1.2rem' }}>{matchData.team1Prob}%</span>
          <span style={{ color: matchData.team2Color, fontWeight: 800, fontSize: '1.2rem' }}>{matchData.team2Prob}%</span>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <div className="stat-bar">
            <div className="stat-bar-label">
              <span>Required Run Rate</span>
              <span style={{ color: 'var(--warning)', fontWeight: 700 }}>9.45</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: '75%' }} />
            </div>
          </div>
          <div className="stat-bar">
            <div className="stat-bar-label">
              <span>Current Run Rate</span>
              <span style={{ color: 'var(--success)', fontWeight: 700 }}>10.24</span>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: '85%', background: 'linear-gradient(90deg, var(--success), #009624)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
