"use client";

import { useEffect, useState } from "react";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { index: "01", label: "Work", href: "#work" },
  { index: "02", label: "Archive", href: "#archive" },
  { index: "03", label: "About", href: "#about" },
  { index: "04", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-ink font-mono text-[11px] text-paper transition-colors group-hover:bg-accent">
            FS
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-medium tracking-tight">
              Fikri Septrian Anggara
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              System Architect
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
            >
              <span className="font-mono text-[9px] text-muted/60">
                {link.index}
              </span>
              {link.label}
              <span className="block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="mailto:dev.fikrianggara@gmail.com"
            className="group ml-2 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12px] text-paper transition-colors hover:bg-accent"
          >
            Get in touch
            <IconArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-9 w-9 place-items-center border border-line md:hidden"
        >
          {open ? <IconX size={17} /> : <IconMenu2 size={17} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper px-6 pb-10 pt-2 shadow-xl md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-line/70 py-4 text-lg tracking-tight"
              >
                <span>{link.label}</span>
                <span className="font-mono text-[10px] text-muted">
                  {link.index}
                </span>
              </a>
            ))}
          </nav>
          <a
            href="mailto:dev.fikrianggara@gmail.com"
            className="mt-5 flex items-center justify-between bg-ink px-4 py-3 text-sm text-paper"
          >
            dev.fikrianggara@gmail.com
            <IconArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
