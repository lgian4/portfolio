import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="mx-auto mt-16 md:mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-sky-800 dark:text-slate-100 mb-8 font-poppins"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
              Politeknik Negeri Batam
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Associate's Degree, Information Technology
            </p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
            Graduated 2022 · GPA: 3.88
          </div>
        </div>
      </motion.div>
    </section>
  );
}
