function SkillsSection({ skills = [] }) {
  return (
    <div className="bg-green-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        🟢 Skills Detected
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (

          <span
            key={skill}
            className="bg-green-600 text-white px-5 py-2 rounded-full"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}

export default SkillsSection;