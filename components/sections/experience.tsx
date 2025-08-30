"use client";

import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      period: t('experience.freelance.period'),
      description: t('experience.freelance.description'),
      technologies: ["NextJS", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: t('experience.kyndryl.title'),
      company: t('experience.kyndryl.company'),
      period: t('experience.kyndryl.period'),
      description: t('experience.kyndryl.description'),
      technologies: ["Ansible", "Python", "REST API", "Docker"],
    },
    {
      title: t('experience.infortec.title'),
      company: t('experience.infortec.company'),
      period: t('experience.infortec.period'),
      description: t('experience.infortec.description'),
      technologies: ["Agile", "CI/CD", "Docker", "Kubernetes"],
    },
  ];
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
