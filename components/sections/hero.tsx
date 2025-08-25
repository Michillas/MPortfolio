import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Linkedin, Mail } from "lucide-react";
import Status from "../shared/status";
import LaurelBranch from "../decoration/LaurelWreath";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      
      {/* Laurel Branches */}
      <LaurelBranch side="left" className="hidden md:block" />
      <LaurelBranch side="right" className="hidden md:block" />
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <Status />
      </div>
      <div className="relative z-10 text-center max-w-3xl">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !leading-[1.2] tracking-tight">
            Miguel Ángel Montilla Garcia
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold !leading-[1.2] tracking-tight text-gray-700 dark:text-gray-300">
            Desarrollador Web | Fullstack | DevOps
          </h2>
        </div>
        <p className="mt-4 text-[17px] md:text-lg text-gray-600 dark:text-gray-400">
          Profesional en soluciones IT, situado en Madrid, España 🇪🇸.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base select-text">
            <Mail className="!h-5 !w-5" /> michasmont@gmail.com
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Linkedin className="!h-5 !w-5" /> Linkedin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;