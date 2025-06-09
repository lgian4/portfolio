import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyName() {
  const { scrollY } = useScroll();
  const [, setShow] = useState(false);

  useEffect(() => {
    return scrollY.onChange((y) => {
      setShow(y > 100); // toggle after scrolling 100px
    });
  }, [scrollY]);

  const scale = useTransform(scrollY, [0, 150, 250], [0,0.85, 1]);
  const opacity = useTransform(scrollY, [0, 250], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50"
      style={{ opacity }}
    >
      <div className="max-w-7xl px-6 md:px-10 lg:px-20 xl:px-30 mx-auto">
        <motion.h1
          style={{ scale }}
          className=" m-0 text-4xl md:text-6xl font-bold text-sky-800 dark:text-slate-100"
        >
          Linargian Pratama
        </motion.h1>
      </div>
    </motion.div>
  );
}
