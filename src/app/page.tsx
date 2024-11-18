"use client";
import React, { useState } from "react";
import { HighlightDiv } from "@/components/ui/hero-highlights";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandX,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const projects = [
  {
    title: "PennyWise - An Expense Tracker App",
    link: "https://pennywise.fikrianggara.dev",
    thumbnail: "/assets/pennywise.png",
    stack: [
      {
        name: "NextJS",
        icon: <IconBrandNextjs size={36} />,
      },
      {
        name: "Shadcn UI",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            ></line>
          </svg>
        ),
      },
      {
        name: "TailwindCSS",
        icon: <IconBrandTailwind size={36} />,
      },
      {
        name: "TypeScript",
        icon: <IconBrandTypescript size={36} />,
      },
    ],
  },
  {
    title: "SIITUNG V2 - Sistem Informasi Tungkal",
    link: "https://siitung-bps1507.vercel.app/",
    thumbnail: "/assets/siitung.png",
    stack: [
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
    ],
  },
  {
    title: "Cuecard Statistik Jambi",
    link: "https://cuecard.bpsjambi.id",
    thumbnail: "/assets/cuecard.png",
    stack: [
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
        name: "Supabase",
        icon: <IconBrandSupabase size={36} />,
      },
    ],
  },
  {
    title: "Konreg PDRB Sumatera 2024",
    link: "https://konreg2024.bpsjambi.id",
    thumbnail: "/assets/konreg.png",
    stack: [
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
    ],
  },
  {
    title: "SIMOSI - Sistem Monitorin Survei",
    link: "https://simosi.vercel.app/",
    thumbnail: "/assets/simosi.png",
    stack: [
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
        name: "Supabase",
        icon: <IconBrandSupabase size={36} />,
      },
    ],
  },
  {
    title: "Expenditure Wizard",
    link: "https://expenditure-wizard.vercel.app/",
    thumbnail: "/assets/expenditure-wizard.png",
    stack: [
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
    ],
  },

  {
    title: "Platform Pemeriksaan Data Susenas Seruti",
    link: "/",
    thumbnail: "/assets/susenas-seruti.png",
    stack: [
      {
        name: "Python",
        icon: <IconBrandPython size={36} />,
      },
      {
        name: "Streamlit",
        icon: <IconBrandTailwind size={36} />,
      },
    ],
  },
  {
    title: "Sumatera Selatan Export Data Dashboard",
    link: "https://fikrianggara26.shinyapps.io/Export-Sumatera_Selatan-2020-Fikri_septrian_anggara-221810306/",
    thumbnail: "/assets/export-sumsel.png",
    stack: [
      {
        name: "R Shiny",
        icon: <IconBrandTailwind size={36} />,
      },
    ],
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
const Page = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const onChevronRightClick = () => {
    if (cardIndex < projects.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };
  const onChevronLeftClick = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(projects.length - 1);
    }
  };
  return (
    <div className="relative bg-white dark:bg-black ">
      <HighlightDiv className="items-start justify-center m-auto h-fit p-8 py-10 space-y-10">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl lg:text-7xl font-bold dark:text-white">
            Hi, I&lsquo;m Fikri
          </h1>
          <div className="text-white text-start w-11/12 md:w-[40rem] text-lg md:text-xl lg:text-2xl leading-tight self-center space-y-6 md:space-y-8 font-thin">
            <p className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose">
              I&apos;m a <strong>Web Developer</strong> by hobby with 2 years of
              experience building web apps and based in Jambi, Indonesia.
              Currently I work as Civil Servant at Statistics Indonesia.
            </p>
            <p className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose">
              I use my knowledge to tackle business problems variying from{" "}
              <strong>
                data processing, analysis, app development, IT support and field
                enumeration of statistics indonesia&apos;s survey
              </strong>
            </p>
            <p className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose">
              <strong>Nextjs</strong>, <strong>Tailwindcss</strong>, and{" "}
              <strong>Supabase</strong> is my main tool to develop app, while
              <strong>Python</strong> are used for data processing, analysis and
              task automation.
            </p>
            <p className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose">
              I also loves music and sports and loves to spend my free time
              learning these stuff.
            </p>
          </div>
        </div>
      </HighlightDiv>
      <div className="flex flex-col h-fit md:m-auto md:w-[40rem] p-8 md:p-0 md:py-10 space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
            My projects
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-white font-thin">
            I try to solve real-world problems through my projects.
          </p>
        </div>
        <ul className="flex flex-nowrap gap-2 md:gap-4 overflow-x-scroll">
          {projects.map((project, idx) => {
            return (
              <li
                key={idx}
                className="flex-none w-fit duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${cardIndex * 100}%)`,
                }}
              >
                <Link href={project.link} className="space-y-4">
                  <Image
                    src={project.thumbnail}
                    width={300}
                    height={400}
                    alt={project.title}
                    className="rounded-lg aspect-video object-cover object-top"
                  />
                  <h3 className="text-base md:text-xl text-white font-medium w-[18rem]">
                    {project.title}
                  </h3>
                  <ul className="flex gap-2 flex-wrap w-fit w-[18rem]">
                    {project.stack.map((stack, idx) => (
                      <li
                        key={idx}
                        className="text-xs border border-white rounded-full py-0.5 px-2 text-white font-thin"
                      >
                        {stack.name}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row items-center space-x-4 self-end">
          <div
            className="rounded-full w-8 h-8 flex items-center justify-center border text-white hover:text-black hover:bg-white cursor-pointer"
            onClick={onChevronLeftClick}
          >
            <IconChevronLeft className="w-5 h-5 cursor-pointer" />
          </div>
          <div
            className="rounded-full w-8 h-8 flex items-center justify-center border text-white hover:text-black hover:bg-white cursor-pointer"
            onClick={onChevronRightClick}
          >
            <IconChevronRight className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center space-y-36">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
          Get in touch
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="w-1/2 md:w-[20rem] flex flex-row m-auto justify-center md:justify-between md:items-center space-x-4"
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
                  {/* <div className="text-sm md:text-xl">{social.name}</div> */}
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
