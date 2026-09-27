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
    <div className="mt-10">

      {/* =========================
          RESUME UPLOAD CARD
      ========================== */}

      <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 border-b border-blue-100">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <span className="text-3xl">📄</span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-blue-600 font-bold">
                Step 1 • Resume Analysis
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                Upload Your Resume
              </h2>
            </div>

          </div>

          <p className="text-gray-600 mt-4 max-w-3xl">
            Upload your PDF resume and let SkillBridge AI analyze your
            skills, career direction, skill gaps, learning requirements,
            job opportunities, and interview preparation.
          </p>

        </div>

        {/* Upload body */}
        <div className="p-6 md:p-8">

          {/* Upload area */}
          <label className="block cursor-pointer">

            <div
              className={`border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition ${
                file
                  ? "border-green-300 bg-green-50"
                  : "border-blue-300 bg-blue-50 hover:bg-blue-100"
              }`}
            >

              <div className="text-5xl mb-4">
                {file ? "✅" : "📄"}
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                {file
                  ? "Resume Selected"
                  : "Choose your resume PDF"}
              </h3>

              <p className="text-gray-500 mt-2">
                {file
                  ? file.name
                  : "Click here to select your resume"}
              </p>

              <p className="text-sm text-gray-400 mt-3">
                PDF files only
              </p>

              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />

            </div>

          </label>

          {/* Selected file */}
          {file && (
            <div className="mt-5 flex items-center justify-between gap-4 bg-green-50 border border-green-200 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  📄
                </div>

                <div>
                  <p className="font-semibold text-green-800">
                    Ready for analysis
                  </p>

                  <p className="text-sm text-green-700 break-all">
                    {file.name}
                  </p>
                </div>

              </div>

              <span className="text-green-600 font-bold">
                ✓
              </span>

            </div>
          )}

          {/* Analyze button */}
          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-2xl text-lg font-bold shadow-lg transition"
          >
            {loading
              ? "🤖 AI is analyzing your resume..."
              : "🚀 Analyze Resume"}
          </button>

          {/* Loading state */}
          {loading && (
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">

              <div className="flex items-center justify-center gap-3">

                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />

                <p className="text-blue-700 font-semibold">
                  SkillBridge AI is analyzing your resume...
                </p>

              </div>

              <p className="text-center text-sm text-blue-500 mt-2">
                Extracting skills and generating personalized career insights
              </p>

            </div>
          )}

        </div>
      </div>

      {/* =========================
          AI ANALYSIS RESULTS
      ========================== */}

      {result && (
        <div className="mt-10 space-y-8">

          {/* Analysis heading */}
          <div className="text-center">

            <p className="text-sm uppercase tracking-widest text-indigo-600 font-bold">
              AI Analysis Complete
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
              Your Career Intelligence Report
            </h2>

            <p className="text-gray-500 mt-2">
              SkillBridge AI has analyzed your resume and generated
              personalized career insights.
            </p>

          </div>

          <ATSCard atsScore={result.ats_score} />

          <Statistics result={result} />

          <SkillsSection skills={result.skills} />

          <MissingSkills
            skills={result.missing_skills}
          />

          <FeedbackSection
            feedback={result.feedback}
          />

          <RoadmapSection
            roadmap={result.learning_roadmap}
          />

          <SkillGap
            analysis={result.skill_gap_analysis}
          />

          <CareerSection
            careers={result.career_recommendations}
          />

          <JobSection
            jobs={result.job_recommendations}
          />

          <CourseSection
            courses={result.course_recommendations}
          />

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