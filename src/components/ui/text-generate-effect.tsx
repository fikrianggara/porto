"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  delay = 0,
  duration = 0.5,
  textGenerationDelay = 0.2,
}: {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
  textGenerationDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(textGenerationDelay),
        }
      );
    }, delay);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn("dark:text-white text-black opacity-0", className)}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
