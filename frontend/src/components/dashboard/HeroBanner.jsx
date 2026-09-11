function HeroBanner() {

  return (

    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 text-center shadow-xl">

      <h1 className="text-5xl font-extrabold">
        🚀 SkillBridge AI
      </h1>

      <p className="mt-4 text-xl">
        AI-Powered Career Readiness Platform
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div>📄 Resume Analysis</div>
        <div>🎯 ATS Score</div>
        <div>📚 Learning Roadmap</div>
        <div>🤖 AI Career Mentor</div>

      </div>

    </div>

  );

}

export default HeroBanner;
