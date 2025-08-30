import Experience from '@/components/sections/experience';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { LanguageToggle } from '@/components/shared/language-toggle';

export default function Home() {
  return (
    <>
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
