'use client';
import { useState } from 'react';
import { players } from '@/lib/data';

const leaderboard = [
  { rank: 1, user: 'CricketKing92', points: 1847, team: 'PSL Warriors' },
  { rank: 2, user: 'ShaheenFan', points: 1792, team: 'Qalandar XI' },
  { rank: 3, user: 'BabarTheGreat', points: 1743, team: 'Zalmi Royals' },
  { rank: 4, user: 'RizwanFanatic', points: 1698, team: 'Sultan Force' },
  { rank: 5, user: 'PSLLover', points: 1654, team: 'United Eleven' },
  { rank: 6, user: 'GreenTiger', points: 1612, team: 'Karachi Pride' },
  { rank: 7, user: 'CricketMaster', points: 1589, team: 'Quetta Heroes' },
  { rank: 8, user: 'T20Expert', points: 1543, team: 'Power Hitters' },
];

export default function FantasyPage() {
  const [activeTab, setActiveTab] = useState<'team' | 'leaderboard' | 'prizes'>('team');
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

  const togglePlayer = (id: string) => {
    setSelectedPlayers((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : prev.length < 11 ? [...prev, id] : prev
    );
  };

  const totalBudget = 100;
  const usedBudget = selectedPlayers.length * 8.5;

  return (
    <div className="page-container">
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', borderRadius: 16, padding: '2rem', marginBottom: '2rem', textAlign: 'center', border: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>PSL Fantasy League</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Build Your Dream Team</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Pick 11 players within your budget and compete for amazing prizes</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <div className="fantasy-points">{selectedPlayers.length}/11</div>
            <div className="fantasy-label">Players Selected</div>
          </div>
          <div>
            <div className="fantasy-points" style={{ color: usedBudget > totalBudget ? 'var(--danger)' : 'var(--gold)' }}>
              {(totalBudget - usedBudget).toFixed(1)}CR
            </div>
            <div className="fantasy-label">Budget Remaining</div>
          </div>
          <div>
            <div className="fantasy-points">0</div>
            <div className="fantasy-label">Total Points</div>
          </div>
        </div>
      </div>

      <div className="tabs">
        {(['team', 'leaderboard', 'prizes'] as const).map((tab) => (
          <button
            key={tab}
            className={`tab-btn${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'team' ? '👥 My Team' : tab === 'leaderboard' ? '🏆 Leaderboard' : '🎁 Prizes'}
          </button>
        ))}
      </div>

      {activeTab === 'team' && (
        <div>
          <h2 className="section-title">Select Players</h2>
          <div className="grid-4">
            {players.map((player) => (
              <div
                key={player.id}
                className="player-card"
                onClick={() => togglePlayer(player.id)}
                style={{
                  cursor: 'pointer',
                  border: selectedPlayers.includes(player.id) ? '2px solid var(--primary)' : '1px solid var(--border)',
                  boxShadow: selectedPlayers.includes(player.id) ? '0 0 20px rgba(0,212,255,0.3)' : 'none',
                }}
              >
                <div className={`player-avatar ${player.teamColorClass}`}>{player.emoji}</div>
                <div className="player-name">{player.name}</div>
                <div className="player-role">{player.role}</div>
                <div className="player-team-badge" style={{ background: 'var(--border)' }}>{player.teamShort}</div>
                <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700 }}>8.5 CR</span>
                  {selectedPlayers.includes(player.id) ? (
                    <span style={{ color: 'var(--success)', fontWeight: 700, fontSize: '0.82rem' }}>✓ Selected</span>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>+ Add</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {selectedPlayers.length > 0 && (
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '1rem 3rem' }}
                onClick={() => alert(`Team saved with ${selectedPlayers.length} players!`)}
              >
                Save My Team ({selectedPlayers.length}/11)
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div>
          <h2 className="section-title">Global Leaderboard</h2>
          <div className="card">
            <div style={{ overflowX: 'auto' }}>
              <table className="points-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Team Name</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr key={entry.rank}>
                      <td>
                        <span style={{
                          fontWeight: 900,
                          color: entry.rank === 1 ? 'var(--gold)' : entry.rank === 2 ? '#C0C0C0' : entry.rank === 3 ? '#CD7F32' : 'var(--primary)',
                          fontSize: '1.1rem',
                        }}>
                          {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                        </span>
                      </td>
                      <td style={{ fontWeight: 700 }}>{entry.user}</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{entry.team}</td>
                      <td>
                        <span className="fantasy-points" style={{ fontSize: '1.1rem' }}>{entry.points}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'prizes' && (
        <div>
          <h2 className="section-title">Prize Pool</h2>
          <div className="grid-3">
            {[
              { rank: '🥇 1st Place', prize: 'PKR 5,00,000', desc: 'Grand Champion Prize + Signed Memorabilia', color: 'var(--gold)' },
              { rank: '🥈 2nd Place', prize: 'PKR 2,50,000', desc: 'Runner Up Prize + PSL Match Tickets', color: '#C0C0C0' },
              { rank: '🥉 3rd Place', prize: 'PKR 1,00,000', desc: 'Third Place Prize + PSL Merchandise', color: '#CD7F32' },
              { rank: '4th-10th', prize: 'PKR 25,000', desc: 'Top 10 Finisher Prize + Digital Badge', color: 'var(--primary)' },
              { rank: 'Weekly Winner', prize: 'PKR 10,000', desc: 'Best weekly score + Featured Profile', color: 'var(--secondary)' },
              { rank: 'Streak Bonus', prize: 'PKR 5,000', desc: 'Best 3-match streak performance', color: 'var(--success)' },
            ].map((prize, i) => (
              <div key={i} className="fantasy-card">
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: prize.color, marginBottom: '0.5rem' }}>{prize.rank}</div>
                <div className="fantasy-points" style={{ color: prize.color, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{prize.prize}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{prize.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
