import { ArrowRight } from 'lucide-react';

export default function AdmissionBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 py-5 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#0a1628] text-xl sm:text-2xl font-extrabold">
            Admissions Open 2026–27
          </h2>

          <p className="text-[#0a1628]/80 text-sm sm:text-base font-semibold">
            Ananya Education Society • Nursery to Class X • Limited Seats Available
          </p>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="flex items-center gap-2 bg-[#0a1628] text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base hover:bg-[#0d2044] transition-all duration-300 hover:scale-105"
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
}