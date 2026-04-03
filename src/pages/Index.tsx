import EmergencyBanner from '@/components/EmergencyBanner';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FinalCTASection from '@/components/FinalCTASection';
import ContactSection from '@/components/ContactSection';
import FloatingButtons from '@/components/FloatingButtons';
import StickyMobileBar from '@/components/StickyMobileBar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <EmergencyBanner />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
      <StickyMobileBar />
    </>
  );
};

export default Index;
