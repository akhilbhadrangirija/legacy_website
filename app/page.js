import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import BackedByExperienceSection from "../components/BackedByExperienceSection";
import FreedomAndCareSection from "../components/FreedomAndCareSection";
import CareServicesSection from "../components/CareServicesSection";
import CommunityLifeSection from "../components/CommunityLifeSection";
import ExceptionalSeniorCareSection from "../components/ExceptionalSeniorCareSection";
import CelebratingMomentsSection from "../components/CelebratingMomentsSection";
import AmenitiesSection from "../components/AmenitiesSection";
import ComprehensiveElderlyCareSection from "../components/ComprehensiveElderlyCareSection";
import PricingSection from "../components/PricingSection";
import AdmissionProcessSection from "../components/AdmissionProcessSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      {/* <BackedByExperienceSection /> */}
      <FreedomAndCareSection />
      {/* <CareServicesSection /> */}
      <CommunityLifeSection />
      {/* <ExceptionalSeniorCareSection /> */}
      {/* <CelebratingMomentsSection /> */}
      <AmenitiesSection />
      <ComprehensiveElderlyCareSection />
      {/* <PricingSection /> */}
      {/* <AdmissionProcessSection /> */}
      <Footer />
    </main>
  )
}

