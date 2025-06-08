import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyName() {
  const { scrollY } = useScroll();
  const [, setShow] = useState(false);

  useEffect(() => {
    return scrollY.onChange((y) => {
      setShow(y > 300); // toggle after scrolling 100px
    });
  }, [scrollY]);

  const scale = useTransform(scrollY, [300, 500], [1, 0.85]);
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full px-2 md:px-12 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50"
      style={{ opacity }}
    >
      <motion.h1
        style={{ scale }}
        className="text-4xl md:text-6xl font-bold text-sky-800 dark:text-slate-100"
      >
        Linargian Pratama
      </motion.h1>
    </motion.div>
  );
}
