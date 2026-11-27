"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconDownload,
  IconX,
} from "@tabler/icons-react";

type CvModalProps = {
  onClose: () => void;
};

export default function CvModal({ onClose }: CvModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
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
        aria-label="Close CV preview"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/65 backdrop-blur-sm"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        initial={{ y: 36, opacity: 0, scale: 0.995 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.995 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-[92dvh] w-full flex-col border border-line bg-surface shadow-2xl md:h-[88dvh] md:max-w-4xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line bg-surface/95 px-4 py-3 backdrop-blur md:px-5">
          <div className="min-w-0">
            <p
              id="cv-modal-title"
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
              Curriculum Vitae
            </p>
            <p className="mt-1 truncate text-[12px] text-muted">
              Fikri Septrian Anggara · PDF
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/resume.pdf"
              download="Resume_Fikri_Septrian_Anggara.pdf"
              className="hidden items-center gap-2 border border-line px-3 py-2 text-[12px] transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:flex"
            >
              <IconDownload size={14} />
              Download
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Open CV in a new tab"
              className="grid h-8 w-8 place-items-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <IconArrowUpRight size={15} />
            </a>
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
        </div>

        <div className="relative min-h-0 flex-1 bg-paper">
          <iframe
            src="/resume.pdf#view=FitH"
            title="Curriculum Vitae — Fikri Septrian Anggara"
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
