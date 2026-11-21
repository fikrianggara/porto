"use client";

import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconLock,
  IconX,
} from "@tabler/icons-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [portraitBySrc, setPortraitBySrc] = useState<Record<string, boolean>>({});
  const gallery = project.gallery?.length ? project.gallery : [project.thumbnail];
  const allPortrait =
    gallery.length > 0 && gallery.every((src) => portraitBySrc[src]);

  useEffect(() => {
    setActiveImage(0);
    setPortraitBySrc({});
  }, [project.slug]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const handleImageLoad =
    (src: string) => (event: SyntheticEvent<HTMLImageElement>) => {
      const { naturalWidth, naturalHeight } = event.currentTarget;
      const portrait = naturalHeight > naturalWidth;
      setPortraitBySrc((previous) =>
        previous[src] === portrait
          ? previous
          : { ...previous, [src]: portrait }
      );
    };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/65 backdrop-blur-sm"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 36, opacity: 0, scale: 0.995 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.995 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "thin-scroll relative z-10 max-h-[94dvh] w-full overflow-y-auto border border-line bg-surface shadow-2xl md:max-h-[90dvh]",
          allPortrait ? "max-w-6xl md:overflow-hidden" : "max-w-5xl"
        )}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-surface/95 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex items-baseline gap-3">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
              {project.category}
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <IconX size={16} />
          </button>
        </div>

        <div
          className={cn(
            allPortrait && "md:flex md:h-[calc(90dvh-57px)]"
          )}
        >
          <div
            className={cn(
              allPortrait &&
                "border-b border-line bg-surface md:flex md:h-full md:w-[42%] md:flex-col md:border-b-0 md:border-r"
            )}
          >
            <div
              className={cn(
                "relative w-full overflow-hidden bg-surface",
                allPortrait
                  ? "h-[46vh] md:h-auto md:min-h-0 md:flex-1"
                  : "aspect-[16/9] max-h-[42vh] border-b border-line"
              )}
            >
              <Image
                key={gallery[activeImage]}
                src={gallery[activeImage]}
                alt={`${project.title} interface`}
                fill
                sizes={
                  allPortrait
                    ? "(max-width: 768px) 100vw, 500px"
                    : "(max-width: 768px) 100vw, 1000px"
                }
                className="object-contain"
                onLoad={handleImageLoad(gallery[activeImage])}
                priority
              />
            </div>

            {gallery.length > 1 && (
              <div
                className={cn(
                  "thin-scroll flex gap-2 overflow-x-auto",
                  allPortrait
                    ? "border-t border-line bg-surface px-3 py-3"
                    : "border-b border-line px-4 py-3 md:px-6"
                )}
              >
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={index === activeImage}
                    className={cn(
                      "relative h-12 w-20 shrink-0 overflow-hidden border border-line transition-all",
                      index === activeImage
                        ? "border-accent opacity-100"
                        : "opacity-65 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-contain"
                      onLoad={handleImageLoad(image)}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className={cn(
              allPortrait && "thin-scroll md:min-h-0 md:flex-1 md:overflow-y-auto"
            )}
          >
            <div
              className={cn(
                "grid gap-10 p-6 md:p-10",
                allPortrait
                  ? "md:grid-cols-1 md:gap-8 md:p-8"
                  : "md:grid-cols-[1.6fr_1fr]"
              )}
            >
              <div>
                <h2
                  id="project-modal-title"
                  className="text-3xl font-medium leading-[1.05] tracking-[-0.035em] md:text-4xl"
                >
                  {project.title}
                </h2>
                <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-muted">
                  {project.description ?? project.summary}
                </p>

                {project.highlights && (
                  <ul className="mt-8 space-y-3 border-t border-line pt-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-5 shrink-0 bg-accent"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <aside
                className={cn(
                  "space-y-8 border-t border-line pt-6",
                  allPortrait
                    ? ""
                    : "md:border-l md:border-t-0 md:pl-8 md:pt-0"
                )}
              >
                {project.status && (
                  <div>
                    <p className="label">Status</p>
                    <p className="mt-2 text-sm">{project.status}</p>
                  </div>
                )}

                <div>
                  <p className="label">Domains</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    {project.domains.join(" · ")}
                  </p>
                </div>

                <div>
                  <p className="label">Stack</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-line bg-paper px-2 py-1 font-mono text-[10px] text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border border-ink bg-ink px-4 py-3 text-sm text-paper transition-colors hover:bg-accent"
                    >
                      Open live site
                      <IconArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border border-ink px-4 py-3 text-sm transition-colors hover:bg-ink hover:text-paper"
                    >
                      View source
                      <IconBrandGithub size={16} />
                    </a>
                  )}
                  {!project.link && !project.repo && (
                    <p className="flex items-start gap-2 border border-line bg-paper px-3 py-3 text-[11px] leading-relaxed text-muted">
                      <IconLock size={14} className="mt-px shrink-0" />
                      Private build. Source and demo are not public.
                    </p>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
