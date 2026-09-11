function RoadmapSection({ roadmap = {} }) {

  return (
    <div className="bg-yellow-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        📚 Personalized Learning Roadmap
      </h2>

      {Object.entries(roadmap).map(([week, topics]) => (

        <div
          key={week}
          className="bg-white rounded-2xl p-6 shadow mb-5"
        >

          <h3 className="text-2xl font-bold text-blue-700">
            {week}
          </h3>

          <ul className="list-disc pl-6 mt-4">

            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}

          </ul>

        </div>

      ))}

    </div>
  );
}

export default RoadmapSection;