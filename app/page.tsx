import Hero from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function Home() {
  return (
    <>
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <Hero />
      <Projects />
    </>
  );
}
