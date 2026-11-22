"use client";

import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: string;
  className?: string;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({
  project,
  index,
  className,
  onOpen,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        "group flex h-full flex-col border border-line bg-surface text-left transition-colors duration-300 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-ink">
        <Image
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 border border-ink/10 bg-paper/90 px-2 py-1 font-mono text-[10px] text-ink backdrop-blur">
          {index}
        </span>
        <span className="absolute right-4 top-4 flex translate-y-1 items-center gap-1 bg-ink px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View case study
          <IconArrowUpRight size={12} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {project.category}
          </p>
          <IconArrowUpRight
            size={16}
            className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        <h3 className="mt-3 max-w-[22ch] text-xl font-medium leading-tight tracking-[-0.025em] md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-[48ch] text-[13px] leading-relaxed text-muted">
          {project.summary}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.slice(0, 4).map((item) => (
            <li
              key={item}
              className="border border-line px-2 py-1 font-mono text-[10px] text-muted"
            >
              {item}
            </li>
          ))}
          {project.stack.length > 4 && (
            <li className="px-1 py-1 font-mono text-[10px] text-muted">
              +{project.stack.length - 4}
            </li>
          )}
        </ul>
      </div>
    </button>
  );
}
