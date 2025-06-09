import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Experience() {
  const { scrollY } = useScroll();
  const [, setShow] = useState(false);

  useEffect(() => {
    return scrollY.onChange((y) => {
      setShow(y > 100); // toggle after scrolling 100px
    });
  }, [scrollY]);

  const opacity = useTransform(scrollY, [0, 200], [0, 1]);


  return (
    <motion.section className="mx-auto mt-16 md:mt-24" style={{opacity}}>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-sky-800 dark:text-slate-100 mb-8 font-poppins"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" defaultValue="grip" collapsible>
            {/* Job #1 */}
            <AccordionItem value="grip">
              <AccordionTrigger className="text-left no-underline hover:no-underline focus:no-underline">
                <div className="text-left  ">
                  <div className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">
                    GRIP Principle Pte. Ltd
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    Senior Backend Developer
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                    July 2022 – May 2025
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-3 text-xs md:text-base leading-relaxed text-left text-slate-700 dark:text-slate-300 font-poppins">
                  <li>
                    Built and maintained backend services for an
                    education-focused marketplace platform supporting physical,
                    digital goods, course, assessment tests, and more—integrated
                    with PostgreSQL, MongoDB, Elasticsearch, and third-party
                    payment/delivery services using Node.js and TypeScript
                  </li>
                  <li>
                    Refactor the product import system to fix memory crashes and
                    support batch processing of hundreds of complex products
                    within minutes—implemented a pipeline with background
                    workers for downloading, resizing images, and validating
                    product data.
                  </li>
                  <li>
                    Built system for a trading crypto arbitrage bot that handled
                    thousands of tokens across CEXs and DEXs, using Redis,
                    RabbitMQ, and custom route optimizations to evaluate trading
                    paths for high speed trading
                  </li>
                  <li>
                    Created real-time log processing and internal monitoring
                    tools using Bun and RabbitMQ to support bot performance and
                    system stability.
                  </li>
                  <li>
                    Researched and prototyped flash loan-based arbitrage
                    contracts in Solidity; conducted feasibility studies for
                    cross chain arbitrage.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            {/* Job #2 */}
            <AccordionItem value="kuadran">
              <AccordionTrigger className="text-left no-underline hover:no-underline focus:no-underline">
                <div className="text-left  ">
                  <div className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">
                    Kuadran Teknologi
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    Fullstack Developer
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                    Oct 2018 – Jul 2022
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-3 text-xs md:text-base leading-relaxed text-left text-slate-700 dark:text-slate-300 font-poppins">
                  <li>
                    Built and maintained a wide range of business applications,
                    including an accounting system, school management platform,
                    government information systems, a logistics and courier app.
                  </li>
                  <li>
                    Led full project lifecycle from gathering requirements,
                    designing databases, and building features to testing,
                    deployment, and user training.
                  </li>
                  <li>
                    Built frontends, backends and mobile app using C#,
                    PostgreSQL, SQL Server; integrated with payment gateways and
                    third-party APIs.
                  </li>
                  <li>
                    Maintained and improved existing systems based on user
                    feedback, supporting long-term usage and client retention.
                  </li>
                  <li>
                    Collaborated directly with users to iterate on requirements
                    and deliver customized solutions under tight deadlines.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
