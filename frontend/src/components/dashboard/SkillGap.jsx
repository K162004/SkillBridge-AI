function SkillGap({ analysis = [] }) {
  if (!analysis || !analysis.length) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 md:p-8">

        <p className="text-sm uppercase tracking-widest text-pink-600 font-bold">
          Career Readiness
        </p>

        <h2 className="text-3xl font-extrabold text-gray-800 mt-1">
          🔍 Skill Gap Analysis
        </h2>

        <p className="text-gray-500 mt-2">
          Understand how your current profile compares with your target
          career requirements.
        </p>

      </div>

      {/* Analysis */}
      <div className="p-6 md:p-8">

        <div className="space-y-4">

          {analysis.map((item, index) => (
            <div
              key={index}
              className="bg-pink-50 border border-pink-100 rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 shrink-0 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="flex-1">

                  {typeof item === "string" ? (
                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  ) : (
                    <div className="space-y-2 text-gray-700">

                      {Object.entries(item).map(
                        ([key, value]) => (
                          <p key={key}>
                            <span className="font-semibold capitalize">
                              {key.replaceAll("_", " ")}:
                            </span>{" "}
                            {String(value)}
                          </p>
                        )
                      )}

                    </div>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default SkillGap;