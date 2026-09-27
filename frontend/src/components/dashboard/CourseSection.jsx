function CourseSection({ courses = [] }) {
  if (!courses.length) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
          Learning Resources
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          🎓 Course Recommendations
        </h2>

        <p className="text-gray-500 mt-2">
          Recommended resources to help close your identified skill gaps
        </p>
      </div>

      {/* Courses */}
      <div className="grid md:grid-cols-2 gap-6">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition"
          >

            <div className="flex items-start gap-4">

              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div>
                <p className="text-sm text-emerald-600 font-semibold">
                  Skill Development
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  {course.skill}
                </h3>
              </div>

            </div>

            <div className="mt-5 space-y-3 text-gray-700">

              <p>
                <span className="font-semibold">📖 Course:</span>{" "}
                {course.course}
              </p>

              <p>
                <span className="font-semibold">🌐 Platform:</span>{" "}
                {course.platform}
              </p>

              <p>
                <span className="font-semibold">⏱ Duration:</span>{" "}
                {course.duration}
              </p>

              <p>
                <span className="font-semibold">📊 Level:</span>{" "}
                {course.level}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Explanation */}
      <div className="mt-7 bg-emerald-50 rounded-2xl p-4">
        <p className="text-sm text-emerald-800">
          <span className="font-bold">AI Learning Recommendations:</span>{" "}
          These resources are mapped to the skills identified as important
          for your career development.
        </p>
      </div>

    </div>
  );
}

export default CourseSection;