function MissingSkills({ skills = [] }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm uppercase tracking-widest text-red-500 font-semibold">
            Skill Gap Analysis
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-1">
            🔴 Missing Skills
          </h2>

          <p className="text-gray-500 mt-2">
            Skills recommended to improve your career readiness
          </p>
        </div>

        <div className="hidden sm:flex bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold">
          {skills.length} Skills
        </div>
      </div>

      {/* Missing Skills */}
      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-red-50 border border-red-200 text-red-700 px-5 py-2.5 rounded-full font-semibold hover:bg-red-100 transition"
            >
              + {skill}
            </span>
          ))}
        </div>
      ) : (
        <div className="bg-green-50 rounded-2xl p-6 text-center">
          <p className="text-green-700 font-semibold">
            🎉 No major skill gaps detected!
          </p>

          <p className="text-sm text-green-600 mt-1">
            Your current skills match the analyzed career requirements.
          </p>
        </div>
      )}

      {/* Bottom explanation */}
      <div className="mt-7 bg-red-50 rounded-2xl p-4">
        <p className="text-sm text-red-800">
          <span className="font-bold">AI Skill Gap Analysis:</span>{" "}
          These skills represent areas that may need improvement based on
          your current profile and the selected career direction.
        </p>
      </div>

    </div>
  );
}

export default MissingSkills;