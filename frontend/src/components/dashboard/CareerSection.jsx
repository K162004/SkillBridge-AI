function CareerSection({ careers = [] }) {

  if (!careers.length) return null;

  return (
    <div className="bg-purple-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        🎯 Career Recommendations
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {careers.map((career, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-6"
          >

            <h3 className="text-2xl font-bold">
              {career.career}
            </h3>

            <p className="mt-3">
              Match Score: <strong>{career.match}%</strong>
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-3">

              <div
                className="bg-purple-600 h-4 rounded-full"
                style={{ width: `${career.match}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CareerSection;