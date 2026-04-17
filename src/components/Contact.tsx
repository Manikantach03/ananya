import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f8f5ef]">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628]">
            Get In Touch
          </h2>

          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Reach out to us for admissions and enquiries.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#0a1628]">Address</p>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Ananya Educational Society <br />
                  Dharmajigudem, <br />
                  West Godavari - 534462, <br />
                  Andhra Pradesh
                </p>

                {/* UPDATED MAP LINK */}
                {/* <a
                  href="https://maps.app.goo.gl/X84A6cBH5B5s6Qex8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-500 text-sm font-semibold mt-2 hover:underline"
                >
                  View Location <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#0a1628]">Phone</p>
                <p className="text-sm text-gray-500 mt-1">
                  +91 1234567890
                </p>

                {/* TAP TO CALL */}
                <a
                  href="tel:8688807103"
                  className="text-amber-500 text-sm font-semibold mt-1 inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#0a1628]">Email</p>
                <p className="text-sm text-gray-500 mt-1">
                  info@ananyaedu.com
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#0a1628]">Office Hours</p>
                <p className="text-sm text-gray-500 mt-1">
                  Mon–Sat: 8:00 AM – 4:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE MAP */}
          <div className="w-full h-[320px] sm:h-[400px] overflow-hidden rounded-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Dharmajigudem%20West%20Godavari&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}