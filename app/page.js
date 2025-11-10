import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BackedByExperienceSection from "../components/BackedByExperienceSection";
import CareServicesSection from "../components/CareServicesSection";
import ExceptionalSeniorCareSection from "../components/ExceptionalSeniorCareSection";
import CelebratingMomentsSection from "../components/CelebratingMomentsSection";
import ComprehensiveElderlyCareSection from "../components/ComprehensiveElderlyCareSection";
import PricingSection from "../components/PricingSection";
import AdmissionProcessSection from "../components/AdmissionProcessSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BackedByExperienceSection />
      <CareServicesSection />
      <ExceptionalSeniorCareSection />
      <CelebratingMomentsSection />
      <ComprehensiveElderlyCareSection />
      <PricingSection />
      <AdmissionProcessSection />
    </main>
  )
}

