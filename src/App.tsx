import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Trust } from './components/Trust';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { IconShowcase } from './components/IconShowcase';
import { TokenQueueDemo } from './components/TokenQueueDemo';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Section>
        <Hero />
      </Section>

      <Section>
        <TokenQueueDemo />
      </Section>

      <Section>
        <IconShowcase />
      </Section>

      <Section>
        <Features />
      </Section>

      <Section>
        <HowItWorks />
      </Section>

      <Section>
        <About />
      </Section>

      <Section>
        <Trust />
      </Section>

      <Section>
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}
