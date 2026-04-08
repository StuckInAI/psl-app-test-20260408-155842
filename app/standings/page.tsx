import FullPointsTable from '@/components/FullPointsTable';

export default function StandingsPage() {
  return (
    <div className="page-container">
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Points Table</h1>
      <FullPointsTable />
    </div>
  );
}
