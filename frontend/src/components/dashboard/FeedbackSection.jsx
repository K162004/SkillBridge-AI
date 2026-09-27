function FeedbackSection({ feedback }) {
  if (!feedback) return null;

  let feedbackItems = [];

  // Case 1: feedback is already an array
  if (Array.isArray(feedback)) {
    feedbackItems = feedback;
  }

  // Case 2: feedback is a string
  else if (typeof feedback === "string") {
    feedbackItems = feedback
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Case 3: feedback is an object
  else if (typeof feedback === "object") {
    feedbackItems = Object.entries(feedback).map(([key, value]) => ({
      key,
      value,
    }));
  }

  // Case 4: anything else
  else {
    feedbackItems = [String(feedback)];
  }

  if (!feedbackItems.length) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-cyan-100 overflow-hidden">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 md:p-8">
        <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
          🤖 AI Resume Review
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 mt-4">
          💡 Resume Feedback
        </h2>

        <p className="text-gray-500 mt-2">
          Personalized observations generated from your resume analysis
        </p>
      </div>

      {/* Feedback */}
      <div className="p-6 md:p-8">
        <div className="space-y-3">
          {feedbackItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition"
            >
              <div className="w-9 h-9 shrink-0 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="text-gray-700 leading-relaxed pt-1">
                {typeof item === "string" ? (
                  <p>{item}</p>
                ) : item?.key ? (
                  <p>
                    <span className="font-bold capitalize">
                      {item.key.replace(/_/g, " ")}:
                    </span>{" "}
                    {Array.isArray(item.value)
                      ? item.value.join(", ")
                      : String(item.value)}
                  </p>
                ) : (
                  <p>{String(item)}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>

            <p className="text-sm text-cyan-800 leading-relaxed">
              <span className="font-bold">
                AI Resume Insight:
              </span>{" "}
              Use these observations to improve the clarity, relevance, and
              impact of your resume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSection;