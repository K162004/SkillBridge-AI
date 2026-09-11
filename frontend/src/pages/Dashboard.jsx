import UploadCard from "../components/UploadCard";
import CareerChat from "../components/CareerChat";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          SkillBridge AI
        </h1>

        <p className="text-center text-lg mt-3">
          Intelligent Career & Skill Development Platform
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-10">

        <UploadCard />

        <CareerChat />

      </div>

    </div>
  );
}

export default Dashboard;