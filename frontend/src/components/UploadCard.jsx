import { useState } from "react";
import API from "../services/api";

import ATSCard from "./dashboard/ATSCard";
import Statistics from "./dashboard/Statistics";
import SkillsSection from "./dashboard/SkillsSection";
import MissingSkills from "./dashboard/MissingSkills";
import FeedbackSection from "./dashboard/FeedbackSection";
import RoadmapSection from "./dashboard/RoadmapSection";
import SkillGap from "./dashboard/SkillGap";
import CareerSection from "./dashboard/CareerSection";
import JobSection from "./dashboard/JobSection";
import CourseSection from "./dashboard/CourseSection";
import InterviewSection from "./dashboard/InterviewSection";
import Footer from "./dashboard/Footer";

function UploadCard() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select Resume PDF");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      setLoading(true);

      const response = await API.post(
        "/resume/upload",
        formData
      );

      setResult(response.data);

    } catch (err) {

      alert(
        JSON.stringify(
          err.response?.data || err.message
        )
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <h2 className="text-4xl font-bold text-center text-blue-700">
        📄 Resume Analyzer
      </h2>

      <p className="text-center text-gray-600 mt-3">
        Upload your resume and receive AI-powered career insights.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full border-2 border-dashed border-blue-400 rounded-2xl p-8 mt-8"
      />

      {file && (

        <div className="mt-5 bg-green-100 rounded-xl p-4">

          <p className="text-green-700 font-semibold">

            Selected Resume:
            <strong> {file.name}</strong>

          </p>

        </div>

      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-5 rounded-2xl text-xl font-bold"
      >

        {loading
          ? "🤖 AI is Analyzing..."
          : "🚀 Analyze Resume"}

      </button>

      {loading && (

        <div className="mt-8 text-center">

          <p className="text-blue-700 font-semibold">
            AI is analyzing your resume...
          </p>

        </div>

      )}

      {result && (

        <div className="mt-10 space-y-8">

          <ATSCard atsScore={result.ats_score} />

          <Statistics result={result} />

          <SkillsSection skills={result.skills} />

          <MissingSkills skills={result.missing_skills} />

          <FeedbackSection feedback={result.feedback} />

          <RoadmapSection roadmap={result.learning_roadmap} />

          <SkillGap analysis={result.skill_gap_analysis} />

          <CareerSection careers={result.career_recommendations} />

          <JobSection jobs={result.job_recommendations} />

          <CourseSection courses={result.course_recommendations} />

          <InterviewSection
            questions={result.interview_questions}
          />

          <Footer />

        </div>

      )}

    </div>

  );

}

export default UploadCard;