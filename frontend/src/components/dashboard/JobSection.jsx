function JobSection({ jobs = [] }) {
  if (!jobs.length) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm uppercase tracking-widest text-orange-600 font-semibold">
          Career Opportunities
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          💼 Job Recommendations
        </h2>

        <p className="text-gray-500 mt-2">
          Opportunities matched with your current profile
        </p>
      </div>

      {/* Jobs */}
      <div className="grid md:grid-cols-2 gap-6">

        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition"
          >

            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-sm text-orange-600 font-semibold">
                  Opportunity {index + 1}
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  {job.title || job.role}
                </h3>
              </div>

              <div className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap">
                {job.match}%
              </div>

            </div>

            <div className="mt-5 space-y-3 text-gray-700">

              <p>
                <span className="font-semibold">🏢 Company:</span>{" "}
                {job.company}
              </p>

              <p>
                <span className="font-semibold">📍 Location:</span>{" "}
                {job.location}
              </p>

              <p>
                <span className="font-semibold">💰 Salary:</span>{" "}
                {job.salary}
              </p>

            </div>

            <div className="mt-5">

              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">
                  Profile Match
                </span>

                <span className="font-semibold text-orange-600">
                  {job.match}%
                </span>
              </div>

              <div className="w-full bg-orange-100 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: `${job.match}%` }}
                />
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Explanation */}
      <div className="mt-7 bg-orange-50 rounded-2xl p-4">
        <p className="text-sm text-orange-800">
          <span className="font-bold">AI Job Matching:</span>{" "}
          Job opportunities are presented using the profile information
          and career direction identified during the analysis.
        </p>
      </div>

    </div>
  );
}

export default JobSection;