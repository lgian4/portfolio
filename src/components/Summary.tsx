import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Summary() {
  const { scrollY } = useScroll();
  const [, setShow] = useState(false);

  useEffect(() => {
    return scrollY.onChange((y) => {
      setShow(y > 100); // toggle after scrolling 100px
    });
  }, [scrollY]);

  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <motion.section
      style={{ opacity }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" mx-auto  text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-poppins"
    >
      <p>
        Backend-focused developer with 6+ years of experience building internal
        tools, APIs, and automation systems across web and desktop platforms.
        Skilled at improving performance, scaling workflows, and integrating
        across complex stacks. Strong in TypeScript, Go, and backend tooling.
      </p>
    </motion.section>
  );
}
