import UploadCard from "../components/UploadCard";
import CareerChat from "../components/CareerChat";
import HeroBanner from "../components/dashboard/HeroBanner";

function Dashboard() {
  const journey = [
    {
      icon: "📄",
      title: "Resume",
      subtitle: "Analyze",
    },
    {
      icon: "🧠",
      title: "Skills",
      subtitle: "Understand",
    },
    {
      icon: "🎯",
      title: "Career",
      subtitle: "Discover",
    },
    {
      icon: "📚",
      title: "Learn",
      subtitle: "Improve",
    },
    {
      icon: "💼",
      title: "Jobs",
      subtitle: "Explore",
    },
    {
      icon: "🎤",
      title: "Interview",
      subtitle: "Prepare",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">

        {/* Hero */}
        <HeroBanner />

        {/* AI Journey */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg border border-gray-100 p-5 md:p-6">

          <div className="text-center mb-5">

            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold">
              Your AI Career Journey
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-1">
              From Resume to Career Readiness
            </h2>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

            {journey.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-2xl p-4 text-center transition"
              >

                <div className="text-2xl">
                  {step.icon}
                </div>

                <p className="font-bold text-gray-800 mt-2">
                  {step.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {step.subtitle}
                </p>

                {index < journey.length - 1 && (
                  <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-300 font-bold z-10">
                    →
                  </span>
                )}

              </div>
            ))}

          </div>

        </div>

        {/* Resume Analyzer + Results */}
        <UploadCard />

        {/* AI Career Mentor */}
        <CareerChat />

      </div>

    </div>
  );
}

export default Dashboard;