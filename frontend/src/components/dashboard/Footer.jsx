function Footer() {

  return (
    <div className="bg-slate-900 rounded-3xl text-center text-white p-10">

      <h2 className="text-3xl font-bold">
        🚀 SkillBridge AI
      </h2>

      <p className="mt-4 text-gray-300">
        AI Powered Career Readiness Platform
      </p>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">

        <span className="bg-blue-600 px-4 py-2 rounded-full">
          React
        </span>

        <span className="bg-green-600 px-4 py-2 rounded-full">
          FastAPI
        </span>

        <span className="bg-purple-600 px-4 py-2 rounded-full">
          Gemini AI
        </span>

        <span className="bg-orange-600 px-4 py-2 rounded-full">
          Tailwind CSS
        </span>

      </div>

      <p className="mt-8 text-gray-400">
        © 2026 SkillBridge AI | AI-Powered Career Readiness Platform
      </p>

    </div>
  );

}

export default Footer;