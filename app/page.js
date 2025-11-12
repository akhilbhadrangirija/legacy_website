import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import InternationalStandardsSection from "../components/InternationalStandardsSection";
import FreedomAndCareSection from "../components/FreedomAndCareSection";
import FreedomSection from "../components/FreedomSection";
import CommunityLifeSection from "../components/CommunityLifeSection";
import CommunityCarousel from "../components/CommunityCarousel";
import AmenitiesSection from "../components/AmenitiesSection";
import Footer from "../components/Footer";
// import CareServicesSection from "../components/CareServicesSection";
// import BackedByExperienceSection from "../components/BackedByExperienceSection";
// import ExceptionalSeniorCareSection from "../components/ExceptionalSeniorCareSection";
// import CelebratingMomentsSection from "../components/CelebratingMomentsSection";
// import ComprehensiveElderlyCareSection from "../components/ComprehensiveElderlyCareSection";
// import PricingSection from "../components/PricingSection";
// import AdmissionProcessSection from "../components/AdmissionProcessSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <InternationalStandardsSection />
      <FreedomAndCareSection />
      <FreedomSection />
      <CommunityLifeSection />
      <AmenitiesSection />
      <CommunityCarousel />
      {/* <BackedByExperienceSection /> */}
      {/* <CareServicesSection /> */}
      {/* <ExceptionalSeniorCareSection /> */}
      {/* <CelebratingMomentsSection /> */}
      {/* <ComprehensiveElderlyCareSection /> */}
      {/* <PricingSection /> */}
      {/* <AdmissionProcessSection /> */}
      <Footer />
    </main>
  )
}

