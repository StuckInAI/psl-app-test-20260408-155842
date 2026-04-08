import HeroBanner from '@/components/HeroBanner';
import FeaturedMatches from '@/components/FeaturedMatches';
import PointsTablePreview from '@/components/PointsTablePreview';
import TopPlayers from '@/components/TopPlayers';
import LatestNews from '@/components/LatestNews';
import WinProbabilityWidget from '@/components/WinProbabilityWidget';
import PollWidget from '@/components/PollWidget';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <div className="page-container">
        <FeaturedMatches />
        <div className="grid-2 mt-4">
          <div>
            <PointsTablePreview />
          </div>
          <div>
            <WinProbabilityWidget />
            <div className="mt-3">
              <PollWidget />
            </div>
          </div>
        </div>
        <TopPlayers />
        <LatestNews />
      </div>
    </>
  );
}
