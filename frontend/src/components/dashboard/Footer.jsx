function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white rounded-3xl overflow-hidden">

      <div className="p-8 md:p-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-2xl">
                  🚀
                </span>
              </div>

              <div>

                <h2 className="text-xl font-extrabold">
                  SkillBridge AI
                </h2>

                <p className="text-sm text-gray-400">
                  AI-powered career intelligence
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
              Analyze your profile, bridge your skill gaps, discover career
              opportunities, and prepare for your next step.
            </p>

          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">

            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
              🤖 AI Powered
            </span>

            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
              🎯 Career Guidance
            </span>

            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
              📚 Learning Paths
            </span>

            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm">
              🎤 Interview Prep
            </span>

          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-5 flex flex-col sm:flex-row justify-between gap-2">

          <p className="text-xs text-gray-500">
            SkillBridge AI • Build skills. Bridge gaps. Shape your career.
          </p>

          <p className="text-xs text-gray-600">
            AI Career Intelligence Platform
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;