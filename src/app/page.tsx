"use client";
import React from "react";
import { HighlightDiv } from "@/components/ui/hero-highlights";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandX,
} from "@tabler/icons-react";
const appProjects = [
  {
    title: "SIMOSI - Sistem Monitorin Survei",
    link: "https://simosi.vercel.app/",
    thumbnail: "/assets/simosi.png",
  },
  {
    title: "PennyWise - An Expense Tracker App",
    link: "https://pennywise.fikrianggara.dev",
    thumbnail: "/assets/pennywise.png",
  },
  {
    title: "SIITUNG V2 - Sistem Informasi Tungkal",
    link: "https://siitung-bps1507.vercel.app/",
    thumbnail: "/assets/siitung.png",
  },
  {
    title: "Cuecard Statistik Jambi",
    link: "https://cuecard.bpsjambi.id",
    thumbnail: "/assets/cuecard.png",
  },

  {
    title: "Expenditure Wizard",
    link: "https://expenditure-wizard.vercel.app/",
    thumbnail: "/assets/expenditure-wizard.png",
  },
  {
    title: "Platform Pemeriksaan Data Susenas Seruti",
    link: "/",
    thumbnail: "/assets/susenas-seruti.png",
  },
  {
    title: "Sumatera Selatan Export Data Dashboard",
    link: "https://fikrianggara26.shinyapps.io/Export-Sumatera_Selatan-2020-Fikri_septrian_anggara-221810306/",
    thumbnail: "/assets/export-sumsel.png",
  },
  {
    title: "Konreg PDRB Sumatera 2024",
    link: "https://konreg2024.bpsjambi.id",
    thumbnail: "/assets/konreg.png",
  },
  {
    title: "SIITUNG V2 - Sistem Informasi Tungkal - detail",
    link: "https://siitung-bps1507.vercel.app/",
    thumbnail: "/assets/siitung-2.png",
  },
  {
    title: "Cuecard Statistik Jambi - detail",
    link: "https://cuecard.bpsjambi.id",
    thumbnail: "/assets/cuecard-2.png",
  },

  {
    title: "PennyWise - An Expense Tracker App - 2",
    link: "https://pennywise.fikrianggara.dev",
    thumbnail: "/assets/pennywise-2.png",
  },
  {
    title: "Konreg PDRB Sumatera 2024 - detail",
    link: "https://konreg2024.bpsjambi.id",
    thumbnail: "/assets/konreg-2.png",
  },
];

const techStacks = [
  {
    name: "NextJS",
    icon: <IconBrandNextjs size={36} />,
  },
  {
    name: "TailwindCSS",
    icon: <IconBrandTailwind size={36} />,
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript size={36} />,
  },
  {
    name: "Python",
    icon: <IconBrandPython size={36} />,
  },
];

const socialMedia = [
  {
    name: "Github",
    link: "https://github.com/fikrianggara",
    icon: <IconBrandGithub size={36} />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/fikri-septrian-anggara/",
    icon: <IconBrandLinkedin size={36} />,
  },
  {
    name: "X",
    link: "https://x.com/dobequalnsd",
    icon: <IconBrandX size={36} />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/fikrianggara",
    icon: <IconBrandInstagram size={36} />,
  },
];

const heroDescription = `I'm a Full-stack Web Developer with 2 years of experience building web apps and based in Jambi, Indonesia. I'm a huge fan of Software engineering, music, and sports and loves to spend my free time learning these stuff.`;
const Page = () => {
  return (
    <div className="relative bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <HighlightDiv className="flex items-center justify-center m-auto min-h-[100vh]">
        <div className="space-y-6 md:space-y-8 p-8">
          <TextGenerateEffect
            className="text-4xl lg:text-7xl font-bold dark:text-white"
            words="Hi, I&lsquo;m Fikri"
            textGenerationDelay={1}
          />
          <div className="text-white text-start w-11/12 md:w-[40rem] text-lg md:text-xl lg:text-2xl leading-tight self-center">
            <TextGenerateEffect
              words={"Slow-but persistent, long-life learner"}
              delay={3000}
            />
          </div>
          <div className="text-white text-start w-11/12 md:w-[40rem] text-sm leading-loose self-center">
            <TextGenerateEffect words={heroDescription} delay={5000} />
          </div>
        </div>
      </HighlightDiv>
      <HeroParallax
        products={appProjects}
        header={
          <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <div className="space-y-8 p-8">
              <TextGenerateEffect
                className="text-4xl lg:text-7xl font-bold dark:text-white"
                words="Some of my projects"
              />

              <div className="text-white text-start w-11/12 md:w-[40rem] text-lg md:text-xl lg:text-2xl leading-relaxed self-center">
                <TextGenerateEffect
                  words={
                    "I build products with the latest web technologies and frameworks.\nI try to solve real-world problems through my projects."
                  }
                  delay={3000}
                />
              </div>
            </div>
          </div>
        }
      />
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center space-y-36">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect
          className="text-2xl md:text-4xl lg:text-7xl font-bold dark:text-white z-20"
          words="My Tech Stack"
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="w-8/12 flex flex-col md:flex-row m-auto justify-center md:justify-between md:items-center m-auto space-y-4 md:space-y-0"
        >
          {techStacks.map((stack, idx) => {
            return (
              <motion.li
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: (index) => ({
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  }),
                }}
                className="text-white flex space-x-4 items-center"
              >
                {stack.icon}
                <div className="text-sm md:text-xl">{stack.name}</div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center space-y-36">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect
          className="text-2xl md:text-4xl lg:text-7xl font-bold dark:text-white z-20"
          words="Let&lsquo;s Connect"
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="w-8/12 flex flex-col md:flex-row m-auto justify-center md:justify-between md:items-center m-auto space-y-4 md:space-y-0"
        >
          {socialMedia.map((social, idx) => {
            return (
              <motion.li
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: (index) => ({
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  }),
                }}
              >
                <Link
                  href={social.link}
                  className="text-white flex space-x-4 items-center"
                >
                  {social.icon}
                  <div className="text-sm md:text-xl">{social.name}</div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Page;
