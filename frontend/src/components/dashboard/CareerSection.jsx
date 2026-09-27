function CareerSection({ careers = [] }) {
  if (!careers.length) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold">
          Career Intelligence
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          🎯 Career Recommendations
        </h2>

        <p className="text-gray-500 mt-2">
          Career paths suggested based on your skills and profile
        </p>
      </div>

      {/* Career Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {careers.map((career, index) => (
          <div
            key={index}
            className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-sm text-purple-600 font-semibold">
                  Career Path {index + 1}
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {career.career}
                </h3>
              </div>

              <div className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap">
                {career.match}%
              </div>

            </div>

            <div className="mt-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">
                  Profile Match
                </span>

                <span className="font-semibold text-purple-700">
                  {career.match}%
                </span>
              </div>

              <div className="w-full bg-purple-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-purple-600 h-3 rounded-full transition-all"
                  style={{ width: `${career.match}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Explanation */}
      <div className="mt-7 bg-purple-50 rounded-2xl p-4">
        <p className="text-sm text-purple-800">
          <span className="font-bold">AI Career Analysis:</span>{" "}
          These career paths are generated from the skills and profile
          information extracted from your resume.
        </p>
      </div>

    </div>
  );
}

export default CareerSection;