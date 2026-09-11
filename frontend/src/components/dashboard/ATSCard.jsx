function ATSCard({ atsScore = 0 }) {
  return (
    <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg">

      <h3 className="text-xl font-semibold text-center">
        🎯 ATS Score
      </h3>

      <p className="text-6xl font-extrabold text-center mt-4">
        {atsScore}%
      </p>

      <div className="w-full bg-blue-300 rounded-full h-4 mt-6 overflow-hidden">

        <div
          className="bg-green-400 h-4 rounded-full transition-all duration-1000"
          style={{
            width: `${atsScore}%`
          }}
        ></div>

      </div>

      <p className="text-center mt-4 font-medium">
        {atsScore >= 80
          ? "✅ Excellent Resume"
          : atsScore >= 60
          ? "⚠️ Good Resume"
          : "❌ Needs Improvement"}
      </p>

    </div>
  );
}

export default ATSCard;