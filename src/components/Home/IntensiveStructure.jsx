import { motion } from "framer-motion";

export default function IntensiveStructure() {
  const features = [
    "Bi-weekly live training sessions",
    "Private voice lab diagnostics",
    "High-stakes simulation drills",
    "Lifetime alumni network access",
  ];

  return (
    <section className="bg-[#1A1A1B]  md:p-[10%] p-[5%]">
      <div className=" grid lg:grid-cols-2 md:gap-20 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-garamond font-medium text-white">
            The Intensive Structure
          </h2>
          <div className="border border-[#5B7C99] w-20 mt-2"></div>

          <p className="mt-4 text-gray-400 max-w-md font-light">
            A high-touch, rigorous 6-week curriculum designed for the executive schedule.
          </p>

          <ul className="md:mt-12 mt-5 md:space-y-6 space-y-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-xs text-white font-normal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="uppercase tracking-wide md:text-sm text-xs text-white font-medium ">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center "
        >
          <div className="bg-[#f8f7f4] rounded-2xl md:p-14 p-5 w-full max-w-md shadow-xl">
            
            <p className="text-xs tracking-widest text-[#C2B280] font-bold uppercase">
              The Investment
            </p>

            <h3 className="mt-4 text-5xl font-serif text-[#1A1A1B] font-bold font-garamond">
              $5,000
            </h3>

            <p className="mt-1 text-xs text-[#B0B0B0] uppercase tracking-wide font-light">
              USD / Full Intensive Access
            </p>

            <p className="md:mt-8 mt-4 text-sm text-[#6B6B6B] font-light leading-relaxed">
              Accepted applicants gain access to the private portal and the
              spring cohort starting April 2026.
            </p>

            <button className="md:mt-12 mt-7 w-full bg-[#5B7C99] shadow-2xl  text-white md:p-8 p-5 md:text-sm text-xs tracking-widest uppercase rounded-md hover:opacity-90 transition">
              Apply for Voice Authority Intensive
            </button>

            <div className="mt-6 flex justify-between text-[10px] text-[#B0B0B0] font-bold uppercase tracking-wider">
              <span>Cohort limit: 20</span>
              <span>Closing March 15</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
