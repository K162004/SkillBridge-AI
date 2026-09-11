function FeedbackSection({ feedback = [] }) {

  if (!feedback.length) return null;

  return (
    <div className="bg-indigo-50 rounded-3xl p-8 shadow">

      <h2 className="text-3xl font-bold mb-6">
        🤖 AI Resume Feedback
      </h2>

      <div className="space-y-4">

        {feedback.map((item, index) => (

          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow"
          >
            ✅ {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default FeedbackSection;