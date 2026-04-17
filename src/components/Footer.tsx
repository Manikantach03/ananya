import { GraduationCap, Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060e1e] text-gray-400">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP */}
        <div className="py-12 grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="text-white font-bold text-lg">Ananya</p>
                <p className="text-amber-400 text-xs uppercase tracking-wide">
                  Education Society
                </p>
              </div>
            </div>

            {/* TEXT */}
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              Providing quality education with strong values and academic excellence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-[#060e1e] transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>

          {/* CENTER - QUICK LINKS */}
<div className="text-left md:text-center">
            <p className="text-white text-sm font-semibold mb-4">
              Quick Links
            </p>

<div className="flex flex-col gap-2 text-sm items-start md:items-center">
                  {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-amber-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between h-full">

            {/* CONTACT */}
            <div className="space-y-4">

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:8688807103" className="text-sm hover:text-amber-400">
                  +91 1234567890
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@ananyaedu.com" className="text-sm hover:text-amber-400">
                  info@ananyaedu.com
                </a>
              </div>

            </div>

            {/* ADDRESS AT BOTTOM */}
            <div className="mt-6 text-sm text-gray-500">
              <p className="text-white font-semibold mb-1">Address</p>
              Ananya Educational Society <br />
              Dharmajigudem, West Godavari <br />
              Andhra Pradesh - 534462
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ananya Education Society. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}