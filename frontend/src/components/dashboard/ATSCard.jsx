function ATSCard({ atsScore = 0 }) {
  const score = Number(atsScore) || 0;
  const safeScore = Math.min(Math.max(score, 0), 100);

  let label = "Needs Improvement";

  if (score >= 80) {
    label = "Excellent";
  } else if (score >= 60) {
    label = "Good";
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">

      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Heading */}
          <div>

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
              <span>🎯</span>
              Resume Performance
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-4">
              ATS Score
            </h2>

            <p className="text-gray-500 mt-2 max-w-xl">
              Your resume's compatibility with ATS-friendly hiring criteria
              based on the AI analysis.
            </p>

          </div>

          {/* Score */}
          <div className="flex items-center gap-5">

            <div className="relative w-28 h-28 shrink-0">

              <div className="absolute inset-0 rounded-full bg-blue-100" />

              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600"
                style={{
                  clipPath: `polygon(0 0, ${safeScore}% 0, ${safeScore}% 100%, 0 100%)`,
                  opacity: 0.15,
                }}
              />

              <div className="absolute inset-2 rounded-full bg-white shadow-inner flex flex-col items-center justify-center">

                <span className="text-3xl font-extrabold text-blue-700">
                  {score}
                </span>

                <span className="text-xs text-gray-400 font-semibold">
                  / 100
                </span>

              </div>

            </div>

            <div>

              <div className="inline-flex bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                ✓ {label}
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Resume readiness
              </p>

            </div>

          </div>

        </div>

        {/* Progress */}
        <div className="mt-8">

          <div className="flex items-center justify-between mb-2">

            <span className="text-sm font-semibold text-gray-600">
              ATS Compatibility
            </span>

            <span className="text-sm font-extrabold text-blue-700">
              {score}%
            </span>

          </div>

          <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
              style={{
                width: `${safeScore}%`,
              }}
            />

          </div>

        </div>

      </div>

      {/* Tip */}
      <div className="px-6 md:px-8 py-5 bg-white">

        <div className="flex items-start gap-3">

          <span className="text-xl">
            💡
          </span>

          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-800">
              Resume Tip:
            </span>{" "}
            Keep your resume structured, relevant, and easy for automated
            systems to parse.

          </p>

        </div>

      </div>

    </div>
  );
}

export default ATSCard;