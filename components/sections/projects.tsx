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
    href: "#",
    cta: "Ver proyecto",
    className: "col-span-3 lg:col-span-1",
    background: <></>,
  },
  {
    name: "Web de Finanzas",
    description: "NextJS, Spring Boot, Tailwind CSS, Docker, IA.",
    href: "https://webfinanzas.vercel.app/",
    cta: "Ver proyecto",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute h-[300px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="https://private-user-images.githubusercontent.com/140931203/442087481-0ee18442-90f0-424f-af43-08965a8776db.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYxMjc5NTcsIm5iZiI6MTc1NjEyNzY1NywicGF0aCI6Ii8xNDA5MzEyMDMvNDQyMDg3NDgxLTBlZTE4NDQyLTkwZjAtNDI0Zi1hZjQzLTA4OTY1YTg3NzZkYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyNVQxMzE0MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNjFkMWFiNzBiNDgxNjVmMTg4MjU3MzE1OGU3NTEwYTA1N2FjMGE5YTY0Yzg0NjUwZGRjMjQ4OTI4NTcyZmFlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.r3yY9PtlOoay7nZ-tY5oa4ubgKP4C-MrcBs6okp_Nno"/>,
  },
  {

    name: "Test de Personalidad",
    description: "NextJS, Spring Boot, Tailwind CSS.",
    href: "#",
    cta: "Ver proyecto",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute h-[280px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="https://private-user-images.githubusercontent.com/140931203/318138746-2fc2e3cd-515d-4f32-9008-f9215b15a862.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYxMjg1NTEsIm5iZiI6MTc1NjEyODI1MSwicGF0aCI6Ii8xNDA5MzEyMDMvMzE4MTM4NzQ2LTJmYzJlM2NkLTUxNWQtNGYzMi05MDA4LWY5MjE1YjE1YTg2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyNVQxMzI0MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMDM0ZGJkZmU0MDlmZGQxNDZkY2MyYjdjOWE0MWIzYjIzMTRkY2RmNDViOTJhMzI4YjM3ZDk5NzM0Y2EzMjY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.-dA76SSDOKiBrXT1TiQOgn5lF6DTjvMBzRHNLRaT8UU"/>,
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
