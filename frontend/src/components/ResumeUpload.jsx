import { useState } from "react";
import axios from "axios";
import "../Upload.css";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select your resume first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setMessage("AI is analyzing your resume...");

      const response = await axios.post(
        "http://127.0.0.1:8000/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setMessage("Resume analyzed successfully 🚀");
    } catch (error) {
      console.log(error);

      setMessage(
        error.response?.data?.detail || error.message
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-blue-100">

      {/* Header */}
      <div className="flex items-center gap-4 mb-3">

        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-3xl">📄</span>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Step 1
          </p>

          <h1 className="text-3xl font-bold text-gray-800">
            Upload Your Resume
          </h1>
        </div>

      </div>

      <p className="text-gray-500 mt-3 mb-6">
        Upload your PDF resume and let SkillBridge AI understand your
        skills, career profile, and learning requirements.
      </p>

      {/* Upload Area */}
      <label className="block cursor-pointer">

        <div className="border-2 border-dashed border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-2xl p-8 text-center transition">

          <div className="text-5xl mb-3">
            📄
          </div>

          <p className="text-lg font-semibold text-gray-800">
            {file ? file.name : "Choose your resume"}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            PDF files only
          </p>

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />

        </div>

      </label>

      {/* Selected File */}
      {file && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">

          <span className="text-xl">
            ✅
          </span>

          <div>
            <p className="font-semibold text-green-800">
              Resume selected
            </p>

            <p className="text-sm text-green-700">
              Ready for AI analysis
            </p>
          </div>

        </div>
      )}

      {/* Analyze Button */}
      <button
        onClick={handleUpload}
        disabled={!file}
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-lg shadow-md transition"
      >
        Analyze Resume 🚀
      </button>

      {/* Status */}
      {message && (
        <div className="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-gray-700 font-medium">
            {message}
          </p>
        </div>
      )}

    </div>
  );
}

export default ResumeUpload;