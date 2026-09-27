function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white rounded-3xl shadow-2xl">

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative p-8 md:p-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
          AI Career Intelligence Platform
        </div>

        {/* Main heading */}
        <div className="mt-6 max-w-4xl">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            🚀 SkillBridge AI
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mt-4 font-medium">
            Turn your resume into a personalized career roadmap.
          </p>

          <p className="text-blue-100/80 mt-4 max-w-2xl leading-relaxed">
            Analyze your resume, discover your skills, identify skill gaps,
            explore career paths, find learning resources, and prepare for
            interviews with AI-powered guidance.
          </p>

        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">

          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl">📄</div>
            <p className="font-semibold mt-2">Resume Analysis</p>
            <p className="text-xs text-blue-100 mt-1">
              Understand your profile
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl">🎯</div>
            <p className="font-semibold mt-2">ATS Analysis</p>
            <p className="text-xs text-blue-100 mt-1">
              Check resume readiness
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl">📚</div>
            <p className="font-semibold mt-2">Learning Roadmap</p>
            <p className="text-xs text-blue-100 mt-1">
              Build missing skills
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="text-2xl">🤖</div>
            <p className="font-semibold mt-2">AI Career Mentor</p>
            <p className="text-xs text-blue-100 mt-1">
              Get personalized guidance
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default HeroBanner;