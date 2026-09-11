function Statistics({ result }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-green-100 rounded-2xl p-6 text-center shadow">
        <h3>Skills</h3>
        <p className="text-4xl font-bold">
          {result.skills?.length ?? 0}
        </p>
      </div>

      <div className="bg-red-100 rounded-2xl p-6 text-center shadow">
        <h3>Missing Skills</h3>
        <p className="text-4xl font-bold">
          {result.missing_skills?.length ?? 0}
        </p>
      </div>

      <div className="bg-yellow-100 rounded-2xl p-6 text-center shadow">
        <h3>Careers</h3>
        <p className="text-4xl font-bold">
          {result.career_recommendations?.length ?? 0}
        </p>
      </div>

      <div className="bg-blue-100 rounded-2xl p-6 text-center shadow">
        <h3>Jobs</h3>
        <p className="text-4xl font-bold">
          {result.job_recommendations?.length ?? 0}
        </p>
      </div>

    </div>
  );
}

export default Statistics;