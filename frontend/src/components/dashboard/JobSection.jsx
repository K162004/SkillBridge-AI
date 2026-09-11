function JobSection({ jobs = [] }) {

  if (!jobs.length) return null;

  return (
    <div className="bg-orange-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        💼 Job Recommendations
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {jobs.map((job, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-6"
          >

            <h3 className="text-xl font-bold">
              {job.title || job.role}
            </h3>

            <p className="mt-2">
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>

            <p>
              <strong>Match:</strong> {job.match}%
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default JobSection;