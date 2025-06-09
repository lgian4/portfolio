import { Mail, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // animate name to move up and left while shrinking
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const nameX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // fade out the rest
  const fadeOut = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);

  return (
    <section
      ref={ref}
      className="pt-[30vh] pb-20 md:pb-30 lg:pb-40 flex flex-col justify-center relative"
>
    
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ scale: nameScale, x: nameX, y: nameY }}
        className="text-5xl md:text-7xl font-bold font-poppins text-sky-800 dark:text-sky-100"
      >
        Linargian Pratama
      </motion.h1>

      <motion.p
        style={{ opacity: fadeOut }}
        className="text-3xl md:text-4xl font-poppins text-slate-700 dark:text-slate-200 mt-4"
      >
        Backend Developer
      </motion.p>

      <motion.div
        style={{ opacity: fadeOut }}
        className="flex items-center gap-6 mt-3"
      >
        <a
          href="mailto:linargian00@gmail.com"
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-sky-800 transition"
        >
          <Mail className="w-5 h-5" />
          linargian00@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/linargian-pratama-740493154/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-sky-800 transition"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
