
/* TOP PERFORMERS */
const students = [
  { name: 'Student Name', percentage: '98%', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Student Name', percentage: '97%', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Student Name', percentage: '96%', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Student Name', percentage: '95%', img: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Student Name', percentage: '94%', img: 'https://randomuser.me/api/portraits/men/5.jpg' },

];

/* BELOW 90% (NO NAMES) */
const below90 = [
  { name: 'Rahul', percentage: '89%', img: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { name: 'Sneha', percentage: '88%', img: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { name: 'Arjun', percentage: '87%', img: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { name: 'Pooja', percentage: '86%', img: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { name: 'Kiran', percentage: '85%', img: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { name: 'Meena', percentage: '84%', img: 'https://randomuser.me/api/portraits/women/16.jpg' },
];
export default function Rankings() {
  return (
    <section id="rankings" className="py-16 sm:py-20 bg-[#f8f5ef]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2">
            Achievements
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628]">
            Our Top Performers
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Celebrating the academic excellence of our students
          </p>
        </div>

        {/* TOP STUDENTS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {students.map((student, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition"
            >

              {/* IMAGE */}
              <div className="relative w-20 h-20 mx-auto mb-3">
                <img
                  src={student.img}
                  alt="student"
                  className="w-full h-full object-cover rounded-full border-2 border-amber-400"
                />

                {/* RANK */}
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white text-xs font-bold px-2 py-[2px] rounded-full">
                  #{i + 1}
                </div>
              </div>

              {/* NAME */}
              <p className="text-[#0a1628] font-semibold text-sm">
                {student.name}
              </p>

              {/* PERCENT */}
              <p className="text-amber-500 font-bold text-sm mt-1">
                {student.percentage}
              </p>

            </div>
          ))}

        </div>

        {/* BELOW 90% IMAGE SCROLL */}
       {/* BELOW 90% SCROLL CARDS */}
<div className="mt-12 border-t border-gray-200 pt-6">

  <p className="text-center text-[#0a1628] font-semibold mb-6">
    Student Achievements
  </p>

  <div className="overflow-hidden">
    <div className="flex animate-scroll gap-6">

      {below90.map((student, i) => (
        <div
          key={i}
          className="min-w-[160px] bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
        >

          {/* Image */}
          <div className="w-16 h-16 mx-auto mb-2">
            <img
              src={student.img}
              alt={student.name}
              className="w-full h-full object-cover rounded-full border-2 border-amber-400"
            />
          </div>

          {/* Name */}
          <p className="text-[#0a1628] font-semibold text-sm">
            {student.name}
          </p>

          {/* Percentage */}
          <p className="text-amber-500 font-bold text-sm mt-1">
            {student.percentage}
          </p>

        </div>
      ))}

    </div>
  </div>

</div>

      </div>
    </section>
  );
}