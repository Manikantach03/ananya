import { useEffect, useRef, useState } from 'react';
import { Award, Users, BookOpen, Trophy } from 'lucide-react';

const stats = [
  { icon: Users, value: 1500, suffix: '+', label: 'Students Enrolled', color: 'text-blue-400' },
  { icon: BookOpen, value: 40, suffix: '+', label: 'Qualified Teachers', color: 'text-emerald-400' },
  { icon: Award, value: 98, suffix: '%', label: 'Academic Success Rate', color: 'text-amber-400' },
  { icon: Trophy, value: 50, suffix: '+', label: 'Student Achievements', color: 'text-rose-400' },
];
function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label, color }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group">
      <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <p className={`text-5xl font-extrabold ${color} mb-2`}>
        {count}{suffix}
      </p>
      <p className="text-gray-400 font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#091830] to-[#0d2044] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
