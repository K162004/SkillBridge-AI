function SkillGap({ analysis = {} }) {

  const items = [
    ["Overall", analysis.overall],
    ["Technical", analysis.technical],
    ["Soft Skills", analysis.soft_skills],
    ["ATS Readiness", analysis.ats_readiness],
    ["Job Readiness", analysis.job_readiness],
  ];

  return (
    <div className="bg-cyan-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        📊 Skill Gap Analysis
      </h2>

      {items.map(([label, value]) => (

        <div key={label} className="mb-5">

          <div className="flex justify-between">

            <span>{label}</span>

            <span>{value ?? 0}%</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">

            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{
                width: `${value ?? 0}%`
              }}
            />

          </div>

        </div>

      ))}

    </div>
  );
}

export default SkillGap;