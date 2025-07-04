"use client";
import React, { useRef, useState } from "react";
import { HighlightDiv } from "@/components/ui/hero-highlights";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandDocker,
  IconBrandFlutter,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandX,
  IconChevronLeft,
  IconChevronRight,
  IconMail,
  IconPointFilled,
} from "@tabler/icons-react";
import Navbar from "@/components/navbar";

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
    domain: ["Web Development"],
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
    domain: ["Web Development"],
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
    domain: ["Web Development", "Data Visualization"],
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
    domain: ["Web Development"],
  },
  {
    title:
      "Stock Fundamental Indicator Analysis using Kmeans, DBSCAN, GMM algorithm",
    link: "https://github.com/fikrianggara/applied-ML-dicoding/blob/main/submission1/README.md",
    thumbnail: "/assets/stock-analysis.png",
    stack: [
      {
        name: "Python",
        icon: <IconBrandPython size={36} />,
      },
    ],
    domain: ["Data Science", "Machine Learning"],
  },
  {
    title: "Transjakarta Passengers Number Forecasting using SARIMAX",
    link: "https://github.com/fikrianggara/indathon-round1-2024/blob/main/main.ipynb",
    thumbnail: "/assets/transjakarta-passenger-forecasting.png",
    stack: [
      {
        name: "Python",
        icon: <IconBrandPython size={36} />,
      },
    ],
    domain: ["Data Science"],
  },
  {
    title: "Microservice Impementation",
    link: "https://github.com/fikrianggara/microservice",
    thumbnail: "/assets/microservice.png",
    stack: [
      {
        name: "Docker",
        icon: <IconBrandDocker size={36} />,
      },
      {
        name: "Kubernetes",
        icon: <IconBrandDocker size={36} />,
      },
      {
        name: "Istio",
        icon: <IconBrandDocker size={36} />,
      },
    ],
    domain: ["Distributed System"],
  },
  {
    title: "Airbnb Clone",
    link: "https://github.com/fikrianggara/flutter-airbnb-clone",
    thumbnail: "/assets/airbnb.png",
    stack: [
      {
        name: "Flutter",
        icon: <IconBrandFlutter size={36} />,
      },
    ],
    domain: ["Mobile Development"],
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
    domain: ["Web Development"],
  },
  {
    title: "Machine Learning Implementation with R",
    link: "https://github.com/fikrianggara/machine-learning-algorithm-with-R",
    thumbnail: "/assets/ml-r.png",
    stack: [
      {
        name: "R",
        icon: <IconBrandPython size={36} />,
      },
    ],
    domain: ["Data Science", "Machine Learning"],
  },

  {
    title: "Multivariate Analysis using R",
    link: "https://github.com/fikrianggara/Multivariate-Analysis-on-R",
    thumbnail: "/assets/multivariate-r.png",
    stack: [
      {
        name: "R",
        icon: <IconBrandPython size={36} />,
      },
    ],
    domain: ["Data Analysis", "Statistics"],
  },
  {
    title: "Machine Learning Implementation using Python",
    link: "https://github.com/fikrianggara/Machine-learning-with-Python",
    thumbnail: "/assets/ml-python.png",
    stack: [
      {
        name: "Python",
        icon: <IconBrandPython size={36} />,
      },
    ],
    domain: ["Data Science", "Machine Learning"],
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
    domain: ["Web Development"],
  },

  {
    title: "Platform Pemeriksaan Data Susenas - Seruti",
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
    domain: ["Web Development", "Data Processing"],
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
    domain: ["Web Development", "Data Visualization"],
  },
  {
    title: "PIA - Peduli Ibu dan Anak",
    link: "https://peduli-ibu-anak.netlify.app/ibu-anak",
    thumbnail: "/assets/pia.png",
    stack: [
      {
        name: "React",
        icon: <IconBrandReact size={36} />,
      },
      {
        name: "TailwindCss",
        icon: <IconBrandTailwind size={36} />,
      },
    ],
    domain: ["Progressive Web App", "Web Development"],
  },
];

const socialMedia = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/fikri-septrian-anggara/",
    icon: <IconBrandLinkedin size={24} />,
  },
  {
    name: "Email",
    link: "mailto:dev.fikrianggara@gmail.com",
    icon: <IconMail size={24} />,
  },
  {
    name: "Github",
    link: "https://github.com/fikrianggara",
    icon: <IconBrandGithub size={24} />,
  },

  {
    name: "X",
    link: "https://x.com/dobequalnsd",
    icon: <IconBrandX size={24} />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/fikrianggara",
    icon: <IconBrandInstagram size={24} />,
  },
];

const Page = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const onChevronRightClick = () => {
    if (cardIndex + 1 >= projects.length) {
      setCardIndex(projects.length - cardIndex - 1);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };
  const onChevronLeftClick = () => {
    if (cardIndex <= 0) {
      setCardIndex(projects.length - 1);
    } else {
      setCardIndex(cardIndex - 1);
    }
  };
  // const uniqueDomain = [
  //   ...new Set(projects.map((project) => project.domain).flat()),
  // ];

  return (
    <div className="relative bg-white dark:bg-black ">
      <Navbar />
      <div id="hero">
        <HighlightDiv className="items-start justify-center m-auto h-fit md:h-[100vh] p-8 py-10 space-y-10">
          <div className="space-y-6 md:space-y-8">
            <motion.div
              className="text-white text-start w-11/12 md:w-[40rem] text-lg md:text-xl lg:text-2xl leading-tight self-center space-y-6 md:space-y-8 font-thin"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl lg:text-7xl font-bold dark:text-white"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1 } },
                }}
              >
                Hi, I&lsquo;m Fikri
              </motion.h1>
              <motion.p
                className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1 } },
                }}
              >
                I&apos;m a <strong>Web Developer</strong> by hobby with 2 years
                of experience building web apps, based in Jambi, Indonesia.
                Currently, I work as Civil Servant at Statistics Indonesia.
              </motion.p>
              <motion.p
                className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1 } },
                }}
              >
                I use my knowledge to tackle business problems varying from{" "}
                <strong>
                  data processing, analysis, app development, IT support and
                  field enumeration of statistics indonesia&apos;s surveys
                </strong>
              </motion.p>

              <motion.p
                className="text-sm md:text-base lg:text-xl leading-thight md:leading-loose"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1 } },
                }}
              >
                I also love music and sports and enjoy spending my free time
                learning these stuffs.
              </motion.p>
            </motion.div>
          </div>
        </HighlightDiv>
      </div>

      <div
        id="project"
        className="flex flex-col h-fit md:m-auto md:w-[40rem] p-8 md:p-0 md:py-10 space-y-10"
      >
        <motion.div
          className="space-y-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                // delay: 4,
                duration: 1,
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          // whileInView={"visible"}
        >
          <motion.h2 className="text-2xl font-bold dark:text-white">
            My projects
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-xl text-white font-thin"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1 } },
            }}
          >
            I love exploring various topics and implement them into my projects.
          </motion.p>
          <motion.p
            className="text-sm md:text-base lg:text-xl leading-thight text-white md:leading-loose font-thin"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1 } },
            }}
          >
            <strong>Nextjs</strong>, <strong>Tailwindcss</strong>, and{" "}
            <strong>Supabase</strong> are my main tools to develop app, while{" "}
            <strong>Python</strong> are used for data processing, analysis and
            task automation.
          </motion.p>
          <motion.ul
            className="flex flex-nowrap gap-2 md:gap-4 overflow-x-scroll"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  // delay: 6,
                  // staggerChildren: 2,
                  duration: 2,
                },
              },
            }}
            initial="hidden"
            // animate="visible"
            whileInView={"visible"}
            ref={ref}
          >
            {projects.map((project, idx) => {
              return (
                <motion.li
                  key={idx}
                  className="flex-none w-fit duration-500 ease-in-out mt-2"
                  style={{
                    animationDelay: `3s`,
                    transform: `translateX(-${cardIndex * 100}%)`,
                    opacity: isInView ? 1 : 0,
                    transition: `transform 0.5s ease-in-out, opacity ${idx}s ease-in-out`,
                  }}
                >
                  <Link href={project.link} className="space-y-4">
                    <Image
                      src={project.thumbnail}
                      width={330}
                      height={400}
                      alt={project.title}
                      className="rounded-lg aspect-video object-cover object-top"
                    />
                    <h3 className="text-base md:text-xl text-white font-medium w-[18rem]">
                      {project.title}
                    </h3>
                    <ul className="flex gap-2 flex-wrap w-fit w-[18rem]">
                      {project.domain.map((domain, idx) => (
                        <li key={idx} className="flex gap-2 items-center">
                          <div className="text-xs border border-white border-[0.5px] rounded-full py-0.5 px-2 text-white font-thin">
                            {domain}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex gap-2 flex-wrap w-fit w-[18rem]">
                      {project.stack.map((stack, idx) => (
                        <li key={idx} className="flex gap-2 items-center">
                          <div className="text-xs text-white">{stack.name}</div>
                          {idx !== project.stack.length - 1 && (
                            <IconPointFilled size={4} className="text-white" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
          <div className="flex flex-row items-center space-x-4 self-end justify-end">
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
        </motion.div>
        {/* {uniqueDomain.map((d, idx) => {
          return (
            <div
              className="flex flex-col h-fit md:m-auto md:w-[40rem] p-8 md:p-0 md:py-10 space-y-10"
              key={idx}
            >
              <h2 className="text-2xl font-bold dark:text-white">{d}</h2>
              <motion.ul
                className="flex flex-nowrap gap-2 md:gap-4 overflow-x-scroll"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      // delay: 6,
                      // staggerChildren: 2,
                      duration: 2,
                    },
                  },
                }}
                initial="hidden"
                // animate="visible"
                whileInView={"visible"}
                ref={ref}
              >
                {projects
                  .filter((p) => p.domain.includes(d))
                  .map((project, idx) => {
                    return (
                      <motion.li
                        key={idx}
                        className="flex-none w-fit duration-500 ease-in-out"
                        style={{
                          animationDelay: `3s`,
                          transform: `translateX(-${cardIndex * 100}%)`,
                          opacity: isInView ? 1 : 0,
                          transition: `transform 0.5s ease-in-out, opacity ${
                            idx + 3
                          }s ease-in-out`,
                        }}
                      >
                        <Link href={project.link} className="space-y-4">
                          <Image
                            src={project.thumbnail}
                            width={330}
                            height={400}
                            alt={project.title}
                            className="rounded-lg aspect-video object-cover object-top"
                          />
                          <h3 className="text-base md:text-xl text-white font-medium w-[18rem]">
                            {project.title}
                          </h3>
                          <ul className="flex gap-2 flex-wrap w-fit w-[18rem]">
                            {project.domain.map((domain, idx) => (
                              <li key={idx} className="flex gap-2 items-center">
                                <div className="text-xs border border-white border-[0.5px] rounded-full py-0.5 px-2 text-white font-thin">
                                  {domain}
                                </div>
                              </li>
                            ))}
                          </ul>
                          <ul className="flex gap-2 flex-wrap w-fit w-[18rem]">
                            {project.stack.map((stack, idx) => (
                              <li key={idx} className="flex gap-2 items-center">
                                <div className="text-xs text-white">
                                  {stack.name}
                                </div>
                                {idx !== project.stack.length - 1 && (
                                  <IconPointFilled
                                    size={4}
                                    className="text-white"
                                  />
                                )}
                              </li>
                            ))}
                          </ul>
                        </Link>
                      </motion.li>
                    );
                  })}
              </motion.ul>
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
          );
        })} */}
      </div>
      <div
        id="contact"
        className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center space-y-36"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
          Get in touch
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                // delay: 6,
                staggerChildren: 0.25,
                duration: 2,
              },
            },
            hidden: { opacity: 0 },
          }}
          className="w-1/2 md:w-[20rem] flex flex-row m-auto justify-center md:justify-between md:items-center space-x-4"
        >
          {socialMedia.map((social, idx) => {
            return (
              <motion.li
                key={idx}
                // initial="hidden"
                // whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1 } },
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
