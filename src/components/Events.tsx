import { ArrowRight } from 'lucide-react';

// ✅ Define category type
type Category = 'Academic' | 'Sports' | 'Cultural';

// ✅ Define event type
type EventType = {
  date: string;
  title: string;
  category: Category;
  desc: string;
};

// ✅ Apply type
const events: EventType[] = [
  {
    date: 'Apr 15',
    title: 'Science Exhibition',
    category: 'Academic',
    desc: 'Students present innovative projects and practical experiments across different subjects.'
  },
  {
    date: 'May 5',
    title: 'Annual Sports Day',
    category: 'Sports',
    desc: 'A day full of energy with track events, games, and team competitions.'
  },
  {
    date: 'May 25',
    title: 'Cultural Fest',
    category: 'Cultural',
    desc: 'Celebrating talent through dance, music, and creative performances.'
  },
  {
    date: 'Jun 10',
    title: 'New Academic Session',
    category: 'Academic',
    desc: 'Welcoming new students with orientation and classroom introductions.'
  },
];

// ✅ Type-safe mapping
const categoryColors: Record<Category, string> = {
  Academic: 'bg-blue-100 text-blue-700',
  Sports: 'bg-emerald-100 text-emerald-700',
  Cultural: 'bg-rose-100 text-rose-700',
};

export default function Events() {
  return (
    <section id="events" className="py-8 bg-[#f8f5ef]">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">
            School Activities
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-3">
            Events & Announcements
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Stay updated with the latest events and activities at Ananya Education Society.
          </p>
        </div>

        {/* EVENTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {events.map((event) => (
            <div
              key={event.title}
              className="group border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition"
            >

              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[#0a1628] text-sm group-hover:text-amber-500">
                  {event.title}
                </h3>

                <span className="text-xs text-gray-500">
                  {event.date}
                </span>
              </div>

              <p className="text-xs text-gray-600 mb-3">
                {event.desc}
              </p>

              {/* ✅ NOW WORKS */}
              <span className={`text-xs px-2 py-1 rounded ${categoryColors[event.category]}`}>
                {event.category}
              </span>

            </div>
          ))}

        </div>

        {/* RESULTS */}
        <div className="mt-10 bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
          <p className="text-xs font-semibold text-amber-500 mb-1">
            Academic Achievement
          </p>

          <h4 className="font-bold text-lg text-[#0a1628] mb-1">
            Excellent Student Performance
          </h4>

          <p className="text-sm text-gray-600 mb-3">
            Our students consistently achieve strong academic results every year.
          </p>

          <a href="#rankings" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-amber-500">
            View Results <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}