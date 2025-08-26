import { FileTextIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import { Banknote, Share2Icon } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    name: "Gestor de Formularios",
    description: "NextJS, Tailwind CSS, Supabase.",
    href: "https://github.com/Michillas/MForms",
    cta: "Ver proyecto",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute h-[260px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="web3.png"/>,
  },
  {
    name: "Web de Finanzas",
    description: "NextJS, Spring Boot, Tailwind CSS, Docker, IA.",
    href: "https://webfinanzas.vercel.app/",
    cta: "Ver proyecto",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute h-[300px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="web1.png"/>,
  },
  {

    name: "Test de Personalidad",
    description: "NextJS, Spring Boot, Tailwind CSS.",
    href: "https://github.com/Michillas/PersonalityQuiz",
    cta: "Ver proyecto",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute h-[280px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="web2.png"/>,
  },
  {
    name: "Tu proyecto",
    description: "Contacta conmigo para más información.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Más información",
    background: <>
        <QuestionMarkIcon className="absolute h-[200px] top-8 w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_1%,#000_100%)] group-hover:scale-110" />
    </>,
  },

];

export function Projects() {
  return (
    <div className="flex items-center justify-center pb-6 px-6 overflow-hidden">
      <BentoGrid className="max-w-4xl">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
