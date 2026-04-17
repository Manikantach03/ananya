import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const links = ['Home', 'About', 'Events','Rankings', 'Facilities', 'Admissions', 'Contact'];

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ACTIVE SECTION TRACKING
  useEffect(() => {
    const sections = links.map(link =>
      document.getElementById(link.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // adjust sensitivity
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628] shadow-2xl shadow-black/30' : 'bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>

            <div>
              <p className="text-white font-bold text-lg">Ananya</p>
              <p className="text-amber-400 text-xs uppercase tracking-wide">
                Education Society
              </p>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-1">

            {links.map((link) => {
              const id = link.toLowerCase();
              const isActive = active === id;

              return (
                <a
                  key={link}
                  href={`#${id}`}
                  className={`px-4 py-2 text-sm font-medium relative transition-all duration-200
                    ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}
                  `}
                >
                  {link}

                  {/* ACTIVE LINE */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber-400 rounded-full transition-all duration-300
                      ${isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'}
                    `}
                  />
                </a>
              );
            })}

            {/* BUTTON */}
            <a href="#admissions" className="ml-4 bg-gradient-to-r from-amber-500 to-amber-400 text-[#0a1628] font-bold px-5 py-2.5 rounded-xl text-sm hover:shadow-lg hover:-translate-y-0.5 transition">
              Apply Now
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">

            {links.map((link) => {
              const id = link.toLowerCase();
              const isActive = active === id;

              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition
                    ${isActive ? 'text-amber-400 bg-white/5' : 'text-gray-300 hover:text-amber-400'}
                  `}
                >
                  {link}
                </a>
              );
            })}

            <a
              href="admissions"
              className="block mt-2 bg-gradient-to-r from-amber-500 to-amber-400 text-[#0a1628] font-bold px-4 py-3 rounded-xl text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}