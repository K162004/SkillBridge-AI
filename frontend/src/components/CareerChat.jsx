import { useState } from "react";
import ReactMarkdown from "react-markdown";
import API from "../services/api";

function CareerChat() {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm SkillBridge AI. Ask me anything about careers, AI, Python, resumes or interview preparation.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await API.post("/chat", {
        message: userMessage,
      });

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.data.reply,
        },
      ]);
    } catch (err) {
      console.error(err);

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Unable to connect to the AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    "How can I become an AI Engineer?",
    "What skills should I learn?",
    "How can I improve my resume?",
    "Give me interview tips",
  ];

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white p-6 md:p-8">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <div className="w-16 h-16 shrink-0 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-3xl">
              🤖
            </span>
          </div>

          <div>

            <p className="text-xs uppercase tracking-widest text-purple-200 font-bold">
              Final Step • Personalized Assistance
            </p>

            <h2 className="text-3xl font-extrabold mt-1">
              AI Career Mentor
            </h2>

            <div className="flex items-center gap-2 mt-2">

              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />

              <span className="text-sm text-green-200 font-medium">
                Online • Ready to help
              </span>

            </div>

          </div>

        </div>

        <p className="text-purple-100 mt-5 max-w-3xl leading-relaxed">
          Continue your career journey with personalized guidance on skills,
          resumes, projects, learning paths, AI, and interview preparation.
        </p>

      </div>

      {/* Body */}
      <div className="p-5 md:p-8">

        {/* Chat */}
        <div className="h-[420px] overflow-y-auto bg-gradient-to-b from-gray-50 to-purple-50 rounded-2xl p-4 md:p-6 space-y-4 border border-purple-100">

          {chat.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={
                  item.sender === "user"
                    ? "max-w-[85%] bg-blue-600 text-white px-5 py-4 rounded-2xl rounded-br-md shadow-md"
                    : "max-w-[85%] bg-white text-gray-800 px-5 py-4 rounded-2xl rounded-bl-md shadow-md border border-purple-100"
                }
              >

                {item.sender === "ai" ? (
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown>
                      {item.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="leading-relaxed">
                    {item.text}
                  </p>
                )}

              </div>

            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="flex justify-start">

              <div className="bg-white text-purple-700 px-5 py-3 rounded-2xl rounded-bl-md shadow-md border border-purple-100">

                <div className="flex items-center gap-2">

                  <span>
                    🤖
                  </span>

                  <span className="font-medium">
                    AI is thinking
                  </span>

                  <span className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:150ms]">
                      .
                    </span>
                    <span className="animate-bounce [animation-delay:300ms]">
                      .
                    </span>
                  </span>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* Quick Questions */}
        <div className="mt-6">

          <div className="flex items-center justify-between mb-3">

            <p className="text-sm font-bold text-gray-700">
              💬 Quick Questions
            </p>

            <p className="text-xs text-gray-400">
              Click a question to get started
            </p>

          </div>

          <div className="flex flex-wrap gap-2">

            {quickQuestions.map((question) => (
              <button
                key={question}
                onClick={() => setMessage(question)}
                disabled={loading}
                className="px-4 py-2.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium hover:bg-purple-100 hover:border-purple-300 transition disabled:opacity-50"
              >
                {question}
              </button>
            ))}

          </div>

        </div>

        {/* Input */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">

          <input
            className="flex-1 border-2 border-gray-200 rounded-xl px-5 py-3.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
            placeholder="Ask your career question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
            className="sm:w-32 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-bold shadow-md transition"
          >
            {loading ? "Thinking..." : "Send 🚀"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default CareerChat;