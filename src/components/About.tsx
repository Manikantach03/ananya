import { BookOpen, Shield, Lightbulb, Heart } from 'lucide-react';
import StatsSection from './StatsSection ';

const values = [
  { icon: BookOpen, title: 'Quality Education', desc: 'A well-structured curriculum that builds strong academic foundations and encourages curiosity in every student.' },
  { icon: Shield, title: 'Safe & Supportive Environment', desc: 'A secure and caring campus where students feel respected, confident, and motivated to learn.' },
  { icon: Lightbulb, title: 'Smart Learning Approach', desc: 'Interactive teaching methods and practical learning to prepare students for real-world challenges.' },
  { icon: Heart, title: 'Overall Development', desc: 'Equal focus on academics, discipline, values, and extracurricular activities for complete growth.' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            About Our School
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] leading-tight mb-4">
            Shaping Bright Futures at
            <span className="block text-amber-500">Ananya Education Society</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Ananya Education Society is committed to providing quality education that nurtures knowledge, discipline, and confidence in every student.
            With dedicated faculty and a student-focused approach, we create a positive learning environment that helps children grow academically and personally.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT IMAGES */}
          <div className="relative group">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {/* COL 1 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-40 sm:h-48">
                  <img src="https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-52 sm:h-64">
                  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>

              {/* COL 2 */}
              <div className="space-y-3 sm:space-y-4 sm:pt-6">
                <div className="rounded-2xl overflow-hidden shadow-lg h-52 sm:h-64">
                  <img src="https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-40 sm:h-48">
                  <img src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 border border-white/40 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="">
         <StatsSection />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}