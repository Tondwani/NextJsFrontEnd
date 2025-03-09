import StorySection from '@/components/about/StorySectio';
import MissionSection from '@/components/about/MissionSection';
import TeamSection from '@/components/about/TeamSection';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">About Fusion Gym</h1>
      <StorySection />
      <MissionSection />
      <TeamSection />
    </div>
  );
}
