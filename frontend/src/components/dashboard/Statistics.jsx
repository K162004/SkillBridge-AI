function Statistics({ result = {} }) {
  const skills = result.skills || [];
  const missingSkills = result.missing_skills || [];
  const careers = result.career_recommendations || [];
  const jobs = result.job_recommendations || [];

  const stats = [
    {
      icon: "🟢",
      label: "Skills Detected",
      value: skills.length,
      description: "Skills found in your resume",
      className: "bg-green-50 border-green-100",
      valueClass: "text-green-700",
    },
    {
      icon: "🔴",
      label: "Skill Gaps",
      value: missingSkills.length,
      description: "Skills recommended to improve",
      className: "bg-red-50 border-red-100",
      valueClass: "text-red-600",
    },
    {
      icon: "🎯",
      label: "Career Paths",
      value: careers.length,
      description: "Career directions identified",
      className: "bg-purple-50 border-purple-100",
      valueClass: "text-purple-700",
    },
    {
      icon: "💼",
      label: "Job Matches",
      value: jobs.length,
      description: "Opportunities matched",
      className: "bg-orange-50 border-orange-100",
      valueClass: "text-orange-600",
    },
  ];

  return (
    <div>

      <div className="mb-5">

        <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
          Profile Overview
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-1">
          📊 Your Analysis at a Glance
        </h2>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.className} border rounded-2xl p-5 hover:shadow-lg transition`}
          >

            <div className="flex items-center justify-between">

              <span className="text-2xl">
                {stat.icon}
              </span>

              <span
                className={`text-3xl font-extrabold ${stat.valueClass}`}
              >
                {stat.value}
              </span>

            </div>

            <h3 className="font-bold text-gray-800 mt-4">
              {stat.label}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {stat.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Statistics;