import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";

export default function ApplyNowSection() {
  return (
    <section className="bg-[#FAF9F6] md:py-32 py-20 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[180px] md:text-[240px] font-serif text-gray-200 opacity-20">
          AUTHORITY
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-[#5c7c99]"
        >
          <LuUsers />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center  text-3xl md:text-5xl lg:text-5xl  xl:text-6xl font-garamond font-medium  leading-tight text-[#1A1A1B] "
        >
          Apply Now.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#6B6B6B] max-w-xl mx-auto text-sm font-light"
        >
          You’ve built the expertise. Now, build the resonance to carry it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className=" mt-5 flex justify-center"
        >
          <button className="group flex items-center md:gap-3 gap-1 border-b border-gray-300 pb-2 uppercase tracking-widest text-[#1A1A1B] font-bold  md:text-sm text-[10px] hover:border-[#5B7C99] transition">
            Apply for Voice Authority Intensive
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 group-hover:border-[#5B7C99] transition">
              <FiArrowUpRight className="text-xs" />
            </span>
          </button>
        </motion.div>

        <p className=" mt-5 text-[10px] font-bold uppercase tracking-widest text-[#B0B0B0]">
          No automated systems. Every application reviewed by Sevil personally.
        </p>
      </div>
    </section>
  );
}
