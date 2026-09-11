function InterviewSection({ questions = [] }) {

  if (!questions.length) return null;

  return (
    <div className="bg-red-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        🎤 Interview Questions
      </h2>

      <div className="space-y-4">

        {questions.map((question, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow p-5"
          >

            <strong>{index + 1}.</strong> {question}

          </div>

        ))}

      </div>

    </div>
  );
}

export default InterviewSection;