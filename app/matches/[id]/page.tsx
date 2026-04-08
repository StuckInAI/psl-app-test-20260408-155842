import { allMatches } from '@/lib/data';
import MatchDetail from '@/components/MatchDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

export default function MatchDetailPage({ params }: PageProps) {
  const match = allMatches.find((m) => m.id === params.id);
  if (!match) notFound();
  return <MatchDetail match={match} />;
}

export function generateStaticParams() {
  return allMatches.map((m) => ({ id: m.id }));
}
