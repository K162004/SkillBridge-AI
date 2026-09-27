function SkillsSection({ skills = [] }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm uppercase tracking-widest text-green-600 font-semibold">
            Profile Understanding
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-1">
            🟢 Skills Detected
          </h2>

          <p className="text-gray-500 mt-2">
            Skills identified from your uploaded resume
          </p>
        </div>

        <div className="hidden sm:flex bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
          {skills.length} Skills
        </div>
      </div>

      {/* Skills */}
      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-green-50 border border-green-200 text-green-700 px-5 py-2.5 rounded-full font-semibold hover:bg-green-100 transition"
            >
              ✓ {skill}
            </span>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl p-6 text-center text-gray-500">
          No skills were detected from this resume.
        </div>
      )}

      {/* Bottom explanation */}
      <div className="mt-7 bg-green-50 rounded-2xl p-4">
        <p className="text-sm text-green-800">
          <span className="font-bold">AI Profile Analysis:</span>{" "}
          These detected skills are used to identify skill gaps and generate
          personalized career recommendations and learning paths.
        </p>
      </div>

    </div>
  );
}

export default SkillsSection;