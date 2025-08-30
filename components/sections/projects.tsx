"use client";

import { FileTextIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import { Banknote, Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { useLanguage } from "@/lib/language-context";

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

export function Projects() {
  const { t } = useLanguage();

  const features = [
    {
      name: t('projects.forms.name'),
      description: t('projects.forms.description'),
      href: "https://github.com/Michillas/MForms",
      cta: t('projects.forms.cta'),
      className: "col-span-3 lg:col-span-1",
      background: <img className="absolute h-[260px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="web3.png"/>,
    },
    {
      name: t('projects.finance.name'),
      description: t('projects.finance.description'),
      href: "https://webfinanzas.vercel.app/",
      cta: t('projects.finance.cta'),
      className: "col-span-3 lg:col-span-2",
      background: <img className="absolute h-[300px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="web1.png"/>,
    },
    {
      name: t('projects.personality.name'),
      description: t('projects.personality.description'),
      href: "https://github.com/Michillas/PersonalityQuiz",
      cta: t('projects.personality.cta'),
      className: "col-span-3 lg:col-span-2",
      background: <img className="absolute h-[280px] w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-110" src="web2.png"/>,
    },
    {
      name: t('projects.yours.name'),
      description: t('projects.yours.description'),
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: t('projects.yours.cta'),
      background: <>
          <QuestionMarkIcon className="absolute h-[200px] top-8 w-full scale-100 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_1%,#000_100%)] group-hover:scale-110" />
      </>,
    },
  ];
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
