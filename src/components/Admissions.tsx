import { CheckCircle } from 'lucide-react';

const highlights = [
  'Admissions from Nursery to Class X',
  'Experienced & Dedicated Teachers',
  'Safe & Supportive Environment',
  'Focus on Overall Student Development',
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-14 sm:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">
            Admissions Open 2026–27
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1628]">
            Join Ananya Education Society
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-lg mx-auto">
            We provide quality education with a strong focus on discipline, values, and academic excellence.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT */}
          <div>

            <h3 className="text-lg font-semibold text-[#0a1628] mb-4">
              Why Choose Us?
            </h3>

            <div className="space-y-3 mb-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-[2px]" />
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Limited seats available. Contact us early to confirm your child’s admission for the academic year 2026–27.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="border border-gray-200 rounded-xl p-5">

            <h3 className="text-base font-semibold text-[#0a1628] mb-4">
              Enquiry Form
            </h3>

            <div className="space-y-3">

              <input
                type="text"
                placeholder="Parent Name"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
              />

              <input
                type="text"
                placeholder="Child Name"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
              />

              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-amber-400">
                <option>Select Class</option>
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>Class I–V</option>
                <option>Class VI–X</option>
              </select>

              <button className="w-full bg-amber-500 text-white text-sm font-semibold py-2.5 rounded-md hover:bg-amber-600 transition">
                Submit Enquiry
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}