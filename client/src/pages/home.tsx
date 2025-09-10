import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ProjectsSection } from '@/components/projects-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-slate-900">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
