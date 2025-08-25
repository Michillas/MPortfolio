import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Linkedin, Mail } from "lucide-react";
import Status from "../shared/status";

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
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <Status />
      </div>
      <div className="relative z-10 text-center max-w-3xl">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold !leading-[1.2] tracking-tight">
            Miguel Ángel Montilla Garcia
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold !leading-[1.2] tracking-tight text-gray-700">
            Desarrollador Web | Fullstack | Devops
          </h2>
        </div>
        <p className="mt-4 text-[17px] md:text-lg">
          Apasionado del desarrollo de software con vocación por convertir ideas
          en productos claros, útiles y mantenibles, cuidando cada detalle del
          proceso.
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
