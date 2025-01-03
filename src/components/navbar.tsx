import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 text-white w-full justify-end backdrop-blur md:backdrop-blur-none">
      <motion.ul
        className="flex space-x-4 text-sm items-center justify-end p-4 md:p-6 px-8 md:w-[20rem] place-self-end"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="flex-1"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          <Link
            href="/#hero"
            className="flex flex-col group text-sm md:text-base"
          >
            About{" "}
            <span className="w-0 group-hover:w-3/4 duration-300 ease-in-out h-0.5 bg-gradient-to-r from-emerald-300 to-purple-300 dark:from-teal-500 dark:to-purple-500"></span>
          </Link>
        </motion.li>
        <motion.li
          className="flex-1"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        >
          {" "}
          <Link
            href="/#project"
            className="flex flex-col group text-sm md:text-base"
          >
            Projects{" "}
            <span className="w-0 group-hover:w-3/4 duration-300 ease-in-out h-0.5 bg-gradient-to-r from-emerald-300 to-purple-300 dark:from-teal-500 dark:to-purple-500 "></span>
          </Link>
        </motion.li>
        <motion.li
          className="flex-1"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 3 } },
          }}
        >
          <Link
            href="/#contact"
            className="flex flex-col group text-sm md:text-base"
          >
            Contact{" "}
            <span className="w-0 group-hover:w-3/4 duration-300 ease-in-out h-0.5 bg-gradient-to-r from-emerald-300 to-purple-300 dark:from-teal-500 dark:to-purple-500"></span>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
