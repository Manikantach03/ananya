import { Monitor, FlaskConical, Music, Dumbbell, Bus, Utensils, Library, Wifi } from 'lucide-react';

const facilities = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Digital classrooms with interactive learning tools and audio-visual support.', img: 'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: FlaskConical, title: 'Science Labs', desc: 'Well-equipped labs for Physics, Chemistry, and Biology practical learning.', img: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: Dumbbell, title: 'Sports & Games', desc: 'Facilities for indoor and outdoor sports to promote fitness and teamwork.', img: 'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: Library, title: 'Library', desc: 'A collection of academic books and reading materials for students.', img: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: Music, title: 'Arts & Activities', desc: 'Encouraging creativity through music, drawing, and cultural activities.', img: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: Utensils, title: 'Hygienic Food Area', desc: 'Clean and safe food facilities for students during school hours.', img: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: Bus, title: 'Transport Facility', desc: 'Safe and reliable transport service covering nearby areas.', img: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=600' },

  { icon: Wifi, title: 'Safe Campus', desc: 'Secure campus with a focus on student safety and discipline.', img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-3">Our Campus Facilities</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
At Ananya Education Society, we provide a safe and supportive environment with modern facilities that enhance learning and overall student development.          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(({ icon: Icon, title, desc, img }) => (
            <div key={title} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 lg:hover:-translate-y-2 cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent opacity-70 lg:group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-amber-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-amber-400/20">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm">{title}</h3>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transform lg:translate-y-2 lg:group-hover:translate-y-0 transition-all duration-300 opacity-100">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
