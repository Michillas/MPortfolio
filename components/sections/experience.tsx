import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2025 Jul - Present",
    description:
      "Developed and maintained web applications for various clients, focusing on user experience and performance.",
    technologies: ["NextJS", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Automations Developer",
    company: "Kyndryl",
    period: "2025 Mar - 2025 Jun",
    description:
      "Implemented automation solutions to improve operational efficiency.",
    technologies: ["Ansible", "Python", "REST API", "Docker"],
  },
  {
    title: "DevOps Internship",
    company: "Infortec Consultores",
    period: "2025 Mar - 2025 Jun",
    description:
      "Assisted in the deployment and monitoring of applications, collaborated with development teams to streamline CI/CD pipelines.",
    technologies: ["Agile", "CI/CD", "Docker", "Kubernetes"],
  },
];

export default function Experience() {
  return (
    <div className="max-w-screen-sm mx-auto pb-6 md:pb-12 px-6">
      <div className="relative ml-3 top-[-6rem]">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background ring-8 ring-background" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
