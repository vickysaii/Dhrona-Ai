import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import ChatWidget from '@/components/ChatWidget';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import IndustryPersonalizer from '@/components/IndustryPersonalizer';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import WhyDhrona from '@/components/WhyDhrona';
import TechStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <ScrollProgress />
          <CustomCursor />
          <ChatWidget />
          <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <main className="flex-1">
              <Hero />
              <About />
              <IndustryPersonalizer />
              <PainPoints />
              <Services />
              <CaseStudies />
              <WhyDhrona />
              <TechStack />
              <FAQ />
              <Contact />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
