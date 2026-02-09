import { MainLayout } from '../../components/MainLayout'
import PageHero from '../../components/about/PageHero'
import WhoWeAre from '../../components/about/WhoWeAre'
import VisionMission from '../../components/about/VisionMission'
import WhyLegacy from '../../components/about/WhyLegacy'
import CarePhilosophy from '../../components/about/CarePhilosophy'
import LocationEnvironment from '../../components/about/LocationEnvironment'
import CommunityLifestyle from '../../components/about/CommunityLifestyle'
import TrustAssurance from '../../components/about/TrustAssurance'
import AboutCTA from '../../components/about/AboutCTA'

export const metadata = {
  title: 'About Legacy',
  description:
    'Learn about Legacy Premium Retirement Living — our vision, mission, and the thoughtful community we have built in Vadavucode, Kerala.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface">
      <MainLayout>
        <PageHero />
        <WhoWeAre />
        <VisionMission />
        <WhyLegacy />
        <CarePhilosophy />
        <LocationEnvironment />
        <CommunityLifestyle />
        <TrustAssurance />
        <AboutCTA />
      </MainLayout>
    </main>
  )
}
