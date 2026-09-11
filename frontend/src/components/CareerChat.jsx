import { useState, useRef, useEffect } from "react";
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

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
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
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
       <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
         <span className="text-3xl">🤖</span>
       </div>

       <div>
         <h2 className="text-3xl font-bold text-gray-800">
           AI Career Mentor
         </h2>

         <div className="flex items-center gap-2 mt-1">
           <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>

           <span className="text-sm text-green-600 font-medium">
             Online • Ready to help
           </span>
         </div>
       </div>
     </div>

     <p className="text-gray-500 mb-5 -mt-2">
       Get personalized guidance on careers, skills, resumes, projects,
       learning paths, and interview preparation.
     </p>

     <div className="h-[450px] overflow-y-auto bg-gradient-to-b from-gray-50 to-purple-50 rounded-2xl p-6 space-y-4 border border-gray-200"> 
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
                  ? "max-w-[80%] bg-blue-600 text-white px-5 py-4 rounded-2xl rounded-br-md shadow-md"
                  : "max-w-[80%] bg-purple-100 text-gray-800 px-5 py-4 rounded-2xl rounded-bl-md shadow-md"
              }
            >
              {item.sender === "ai" ? (
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>
                    {item.text}
                  </ReactMarkdown>
                </div>
              ) : (
                item.text
              )}
          </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-purple-100 text-purple-700 px-5 py-3 rounded-2xl rounded-bl-md shadow-md">
              <div className="flex items-center gap-2">
                <span>🤖</span>
                <span>AI is thinking</span>

                <span className="flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce [animation-delay:150ms]">.</span>
                  <span className="animate-bounce [animation-delay:300ms]">.</span>
               </span>
             </div>
          </div>
       </div>
    )}
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {[
          "How can I become an AI Engineer?",
          "What skills should I learn?",
          "How can I improve my resume?",
          "Give me interview tips",
        ].map((question) => (
          <button
            key={question}
            onClick={() => setMessage(question)}
            disabled={loading}
            className="px-4 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium hover:bg-purple-100 transition disabled:opacity-50"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <input
          className="flex-1 border-2 border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
          placeholder="Ask your career question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold shadow-md transition"
        >
          {loading ? "Thinking..." : "Send 🚀"}
        </button>
      </div>
    </div>
  );
}

export default CareerChat;