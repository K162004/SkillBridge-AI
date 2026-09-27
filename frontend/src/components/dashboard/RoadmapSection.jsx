function RoadmapSection({ roadmap = {} }) {
  const weeks = Object.entries(roadmap);

  if (!weeks.length) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-100">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold">
          Personalized Learning
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          📚 Personalized Learning Roadmap
        </h2>

        <p className="text-gray-500 mt-2">
          A structured learning path generated from your skill gaps
        </p>
      </div>

      {/* Roadmap */}
      <div className="space-y-5">

        {weeks.map(([week, topics], index) => (
          <div
            key={week}
            className="relative bg-yellow-50 rounded-2xl p-6 border border-yellow-100 hover:shadow-md transition"
          >

            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold shadow">
                {index + 1}
              </div>

              <div>
                <p className="text-sm text-yellow-600 font-semibold">
                  Learning Stage {index + 1}
                </p>

                <h3 className="text-xl font-bold text-gray-800">
                  {week}
                </h3>
              </div>

            </div>

            <ul className="mt-5 space-y-3">

              {topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-yellow-600 font-bold mt-0.5">
                    ✓
                  </span>

                  <span>{topic}</span>
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

      {/* Explanation */}
      <div className="mt-7 bg-yellow-50 rounded-2xl p-4">
        <p className="text-sm text-yellow-800">
          <span className="font-bold">AI Learning Plan:</span>{" "}
          The roadmap converts identified skill gaps into a structured
          sequence of learning topics.
        </p>
      </div>

    </div>
  );
}

export default RoadmapSection;