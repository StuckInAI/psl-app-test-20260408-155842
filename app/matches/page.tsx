'use client';
import { useState } from 'react';
import { allMatches } from '@/lib/data';
import MatchCard from '@/components/MatchCard';

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'completed'>('live');

  const filtered = allMatches.filter((m) => m.status === activeTab);

  return (
    <div className="page-container">
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Match Centre</h1>
      <div className="tabs">
        {(['live', 'upcoming', 'completed'] as const).map((tab) => (
          <button
            key={tab}
            className={`tab-btn${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'live' ? '🔴 Live' : tab === 'upcoming' ? '📅 Upcoming' : '✅ Results'}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="text-center" style={{ padding: '4rem', color: 'var(--text-secondary)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏏</div>
          <p>No {activeTab} matches at the moment</p>
        </div>
      ) : (
        <div className="grid-auto">
          {filtered.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}
