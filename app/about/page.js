import { MainLayout } from '../../components/MainLayout'
import PageHero from '../../components/about/PageHero'
import VisionMission from '../../components/about/VisionMission'
import WhyLegacy from '../../components/about/WhyLegacy'
import LocationEnvironment from '../../components/about/LocationEnvironment'
import CarePhilosophy from '../../components/about/CarePhilosophy'
import AboutCTA from '../../components/about/AboutCTA'

export const metadata = {
  title: 'About Legacy',
  description:
    'Learn about Legacy Premium Retirement Living — our vision, mission, and the thoughtful community we have built in Vadavucode, Kerala.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <MainLayout>
        <PageHero />
        <VisionMission />
        <WhyLegacy />
        <LocationEnvironment />
        <CarePhilosophy />
        <AboutCTA />
      </MainLayout>
    </main>
  )
}
