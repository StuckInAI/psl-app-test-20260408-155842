'use client';
import { useState } from 'react';

const pollData = {
  question: 'Who will win PSL 2025?',
  options: [
    { id: 'lq', label: 'Lahore Qalandars', votes: 1240, color: '#e31e24' },
    { id: 'iu', label: 'Islamabad United', votes: 980, color: '#ef3e42' },
    { id: 'pz', label: 'Peshawar Zalmi', votes: 756, color: '#f7941d' },
    { id: 'ms', label: 'Multan Sultans', votes: 623, color: '#1e88e5' },
    { id: 'kk', label: 'Karachi Kings', votes: 412, color: '#00a651' },
    { id: 'qs', label: 'Quetta Gladiators', votes: 289, color: '#9c27b0' },
  ],
};

export default function PollWidget() {
  const [voted, setVoted] = useState<string | null>(null);
  const totalVotes = pollData.options.reduce((sum, o) => sum + o.votes, 0);

  const handleVote = (id: string) => {
    if (!voted) setVoted(id);
  };

  return (
    <div className="card">
      <div className="card-header">🗳️ Fan Poll</div>
      <div className="card-body">
        <div style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>{pollData.question}</div>
        {pollData.options.map((option) => {
          const pct = Math.round((option.votes / totalVotes) * 100);
          return (
            <div
              key={option.id}
              className="poll-option"
              onClick={() => handleVote(option.id)}
              style={{ opacity: voted && voted !== option.id ? 0.7 : 1 }}
            >
              <div className="poll-option-label">
                <span>{option.label}</span>
                {voted && <span style={{ color: option.color, fontWeight: 700 }}>{pct}%</span>}
              </div>
              <div className="poll-bar-track">
                <div
                  className="poll-bar-fill"
                  style={{
                    width: voted ? `${pct}%` : '0%',
                    background: option.color,
                  }}
                />
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
          {voted ? `${totalVotes.toLocaleString()} total votes` : 'Click to vote!'}
        </div>
      </div>
    </div>
  );
}
