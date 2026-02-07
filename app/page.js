import { MainLayout } from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import AboutSnapshot from '../components/AboutSnapshot'
import { SectionSeparator } from '../components/SectionSeparator'
import LivingOptions from '../components/LivingOptions'
import CommunityHighlight from '../components/CommunityHighlight'
import AmenitiesGrid from '../components/AmenitiesGrid'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import PrimaryCTA from '../components/PrimaryCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <MainLayout>
        <HeroSection />
        <AboutSnapshot />
        <SectionSeparator text="LIVING OPTIONS • SENIOR LIVING" />
        <LivingOptions />
        <CommunityHighlight />
        <AmenitiesGrid />
        <TestimonialsCarousel />
        <PrimaryCTA />
      </MainLayout>
    </main>
  )
}
