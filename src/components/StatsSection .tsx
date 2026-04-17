import { useEffect, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Teachers" },
  { value: 15, suffix: "+", label: "Activities" },
  { value: 100, suffix: "%", label: "Student Focus" },
];

// ✅ ADD THIS TYPE
type CounterProps = {
  end: number;
  suffix: string;
};

function Counter({ end, suffix }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="border-t border-gray-200 pt-2">

      <div className="flex gap-0 overflow-x-auto sm:overflow-visible px-2 sm:px-0">

        {stats.map((item, index) => (
          <div
            key={item.label}
            className="min-w-[10px] sm:min-w-0 flex-1 text-center group relative"
          >

            <p className="text-xl sm:text-2xl font-extrabold text-[#0a1628] transition-all duration-300 group-hover:scale-110">
              <Counter end={item.value} suffix={item.suffix} />
            </p>

            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {item.label}
            </p>

            <div className="h-[2px] w-0 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-2 transition-all duration-300 group-hover:w-10" />

            {index !== stats.length - 1 && (
              <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-gray-200" />
            )}
          </div>
        ))}

      </div>
    </div>
  );
}