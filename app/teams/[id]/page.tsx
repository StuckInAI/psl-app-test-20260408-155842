import { teams } from '@/lib/data';
import TeamDetail from '@/components/TeamDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

export default function TeamDetailPage({ params }: PageProps) {
  const team = teams.find((t) => t.id === params.id);
  if (!team) notFound();
  return <TeamDetail team={team} />;
}

export function generateStaticParams() {
  return teams.map((t) => ({ id: t.id }));
}
