import { ChevronDown, Star, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2044] to-[#091830]" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(60px)",
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="hidden sm:inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-amber-400" />
              Ranked #1 School in the District — Since 2010
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Shape Your
              <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Future Here
              </span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Ananya Education Society is dedicated to nurturing young minds
              through quality education, strong values, and innovative learning.
              Our experienced faculty and student-focused approach empower
              learners to achieve academic excellence and succeed in life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#admissions"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-[#0a1628] font-bold px-8 py-4 rounded-2xl text-base hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                Apply for Admission
              </a>
              <a
                href="#achievements"
                className="border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Explore Achievements
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Award, value: "100%", label: "Pass Rate" },
                { icon: Users, value: "2,500+", label: "Students Enrolled" },
                { icon: Star, value: "20+ Yrs", label: "Academic Excellence" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-white font-bold text-xl">{value}</p>
                  <p className="text-gray-400 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/20 to-blue-600/20 blur-3xl" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />

                {/* Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <p className="text-amber-400 font-bold text-sm mb-1">
                      Academic Excellence 2025
                    </p>
                    <p className="text-white text-2xl font-extrabold">
                      98%{" "}
                      <span className="text-base font-normal text-gray-300">
                        Success Rate
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-4 shadow-2xl shadow-amber-500/30">
                <p className="text-[#0a1628] font-extrabold text-3xl leading-none">
                  Top
                </p>
                <p className="text-[#0a1628]/80 text-xs font-semibold">
                  Performing
                </p>
                <p className="text-[#0a1628] font-bold text-sm">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a> */}
    </section>
  );
}
