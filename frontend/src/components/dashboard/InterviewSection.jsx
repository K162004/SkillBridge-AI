function InterviewSection({ questions = [] }) {
  if (!questions.length) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100">

      {/* Header */}
      <div className="mb-7">
        <p className="text-sm uppercase tracking-widest text-red-500 font-semibold">
          Interview Preparation
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          🎤 Interview Questions
        </h2>

        <p className="text-gray-500 mt-2">
          Practice questions generated from your career profile
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-4">

        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-red-50 rounded-2xl p-5 border border-red-100 hover:shadow-md transition"
          >

            <div className="flex items-start gap-4">

              <div className="min-w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <p className="text-gray-800 font-medium leading-relaxed">
                {question}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Explanation */}
      <div className="mt-7 bg-red-50 rounded-2xl p-4">
        <p className="text-sm text-red-800">
          <span className="font-bold">AI Interview Preparation:</span>{" "}
          These questions are generated to help you prepare for interviews
          related to your identified career direction and skills.
        </p>
      </div>

    </div>
  );
}

export default InterviewSection;