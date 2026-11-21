"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import {
  archiveProjects,
  featuredProjects,
  projects,
  type Project,
} from "@/lib/projects";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fikri-septrian-anggara/",
    icon: IconBrandLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/fikrianggara",
    icon: IconBrandGithub,
  },
  {
    name: "Email",
    href: "mailto:dev.fikrianggara@gmail.com",
    icon: IconMail,
  },
  {
    name: "X",
    href: "https://x.com/dobequalnsd",
    icon: IconBrandX,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/fikrianggara",
    icon: IconBrandInstagram,
  },
];

const tickerItems = [
  "System architecture",
  "Data platforms",
  "Quantitative tooling",
  "Design systems",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "Knowledge graphs",
];

const capabilities = [
  {
    title: "System architecture",
    copy: "Domain models, boundaries, and trade-offs before code. I map the data flow first, then choose the smallest system that holds.",
  },
  {
    title: "Data engineering",
    copy: "PostgreSQL, pipelines, and knowledge graphs. Correct aggregation and SQL guardrails matter more than a chat interface in front of them.",
  },
  {
    title: "Product engineering",
    copy: "End-to-end delivery with Next.js, React, and FastAPI: interface, API, persistence, and the deployment path in one piece.",
  },
  {
    title: "Statistical work",
    copy: "Survey data and official BPS figures. Analysis, forecasting, and tools that keep the definitions of the source data intact.",
  },
];

const featuredSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="relative bg-paper">
      <Navbar />

      <main id="top">
        <section className="relative overflow-hidden border-b border-line pt-28 md:pt-36">
          <div
            aria-hidden="true"
            className="grid-paper absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
          />
          <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <p className="label">Portfolio — 2026</p>
              <p className="label hidden sm:block">Jambi, Indonesia · UTC+7</p>
            </div>

            <div className="grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[clamp(3.1rem,7.6vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.055em]"
                >
                  Systems for
                  <br />
                  <span className="text-muted">real-world</span>
                  <br />
                  <span className="relative inline-block">
                    data.
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[0.08em] left-0 h-[0.06em] w-full bg-accent"
                    />
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted md:text-base">
                    I&rsquo;m Fikri Septrian Anggara — a system architect and
                    full-stack developer at Statistics Indonesia. I build data
                    platforms, quantitative tools, and design systems for work
                    where the numbers have to hold up.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="#work"
                      className="group flex items-center gap-2 bg-ink px-5 py-3 text-[13px] text-paper transition-colors hover:bg-accent"
                    >
                      Selected work
                      <IconArrowDown
                        size={15}
                        className="transition-transform group-hover:translate-y-0.5"
                      />
                    </a>
                    <a
                      href="#about"
                      className="group flex items-center gap-2 border border-line bg-paper px-5 py-3 text-[13px] transition-colors hover:border-ink"
                    >
                      About
                      <IconArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="self-end border border-line bg-surface/80 backdrop-blur lg:col-span-4"
              >
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <p className="label">Currently</p>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Based in Jambi
                  </span>
                </div>

                <dl className="divide-y divide-line">
                  {[
                    ["Role", "Statistics Indonesia (BPS)"],
                    ["Focus", "Data platforms · quant tooling"],
                    ["Stack", "TypeScript · Python · SQL"],
                  ].map(([term, value]) => (
                    <div key={term} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-3.5">
                      <dt className="label pt-0.5">{term}</dt>
                      <dd className="text-[13px] leading-snug">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="border-t border-line px-5 py-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-mono text-3xl leading-none tracking-[-0.04em]">
                        {String(projects.length).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                        Projects on file
                      </p>
                    </div>
                    <p className="max-w-[14ch] text-right text-[10px] leading-relaxed text-muted">
                      Private builds are marked in each case study.
                    </p>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>

          <div className="relative border-t border-line bg-paper/60 py-3">
            <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex items-center gap-8 pr-8"
                >
                  {tickerItems.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-8 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                    >
                      {item}
                      <span className="h-1 w-1 bg-accent" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="mx-auto w-full max-w-[1240px] scroll-mt-20 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="label">01 — Selected work</p>
              <h2 className="mt-4 max-w-[18ch] text-3xl font-medium leading-[1.02] tracking-[-0.04em] md:text-5xl">
                Four systems, built end to end.
              </h2>
            </div>
            <p className="max-w-[38ch] text-sm leading-relaxed text-muted md:text-right">
              Each one started as a messy process: an exchange to read, a
              question to answer, a design language to keep consistent. Click a
              project for the detail.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={String(index + 1).padStart(2, "0")}
                onOpen={setSelected}
                className={featuredSpans[index]}
              />
            ))}
          </div>
        </section>

        <section id="archive" className="scroll-mt-20 border-y border-line bg-surface">
          <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="label">02 — Archive</p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  Everything else.
                </h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {String(archiveProjects.length).padStart(2, "0")} projects ·
                selected archive
              </p>
            </div>

            <ul className="mt-8 border-t border-line">
              {archiveProjects.map((project, index) => (
                <li key={project.slug} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="group grid w-full grid-cols-[2rem_1fr_1.25rem] items-center gap-4 py-4 text-left transition-colors hover:bg-paper md:grid-cols-[2.5rem_1fr_15rem_1.5rem] md:px-2"
                  >
                    <span className="font-mono text-[10px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-[15px] font-medium tracking-tight transition-colors group-hover:text-accent">
                          {project.title}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                          {project.category}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] text-muted">
                        {project.summary}
                      </span>
                    </span>
                    <span className="hidden truncate font-mono text-[10px] text-muted md:block">
                      {project.stack.slice(0, 3).join(" · ")}
                    </span>
                    <IconArrowUpRight
                      size={15}
                      className="justify-self-end text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-[1240px] scroll-mt-20 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label">03 — About</p>
              <h2 className="mt-4 text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-4xl">
                The interface is the last mile. The data model is the work.
              </h2>
              <div className="mt-8 hidden h-px w-full bg-line lg:block" />
              <p className="mt-6 max-w-[30ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                System architect · full-stack developer · statistics
              </p>
            </div>

            <div className="space-y-10 lg:col-span-8">
              <div className="space-y-5 text-[15px] leading-relaxed text-muted">
                <p>
                  I work at the point where statistics, data infrastructure, and
                  product design meet. At Statistics Indonesia, that means
                  internal tools that make survey data easier to check, publish,
                  and question. Outside it, it means terminals, search systems,
                  and developer tools built to be used rather than demoed.
                </p>
                <p>
                  I care about clear boundaries: what a system owns, what it
                  delegates, and how it fails. Before writing a feature I want
                  the data flow, the failure modes, and the trade-off on the
                  table. Then I build the smallest version that survives contact
                  with real data.
                </p>
              </div>

              <div className="grid border-l border-t border-line sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability.title}
                    className="border-b border-r border-line bg-surface p-5"
                  >
                    <p className="font-mono text-[9px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-sm font-medium tracking-tight">
                      {capability.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted">
                      {capability.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative scroll-mt-20 overflow-hidden bg-ink text-paper"
        >
          <div aria-hidden="true" className="grid-ink absolute inset-0 opacity-60" />
          <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
              04 — Contact
            </p>

            <div className="mt-8 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="max-w-[16ch] text-4xl font-medium leading-[0.98] tracking-[-0.045em] md:text-6xl">
                  Let&rsquo;s make the system{" "}
                  <span className="text-accent">legible.</span>
                </h2>
                <a
                  href="mailto:dev.fikrianggara@gmail.com"
                  className="group mt-10 inline-flex items-baseline gap-3 border-b border-paper/25 pb-2 text-lg transition-colors hover:border-accent hover:text-accent md:text-2xl"
                >
                  dev.fikrianggara@gmail.com
                  <IconArrowUpRight
                    size={20}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="lg:col-span-4 lg:justify-self-end">
                <p className="max-w-[30ch] text-sm leading-relaxed text-paper/60">
                  For data platforms, internal tools, or a second pair of eyes
                  on an architecture decision.
                </p>
                <ul className="mt-6 flex gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noreferrer"
                          aria-label={social.name}
                          className="grid h-10 w-10 place-items-center border border-paper/20 text-paper/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                        >
                          <Icon size={17} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40 sm:flex-row">
              <p>© 2026 Fikri Septrian Anggara</p>
              <p>Jambi, Indonesia · Last updated Nov 2026</p>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
}
