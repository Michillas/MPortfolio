import Experience from '@/components/sections/experience';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import Testimonial from '@/components/sections/testimonials';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function Home() {
  return (
    <>
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
