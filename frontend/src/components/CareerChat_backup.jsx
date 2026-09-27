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
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        🤖 AI Career Mentor
      </h2>

      <div className="h-96 overflow-y-auto bg-gray-100 rounded-xl p-5 space-y-4">
        {chat.map((item, index) => (
          <div
            key={index}
            className={
              item.sender === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <div
              className={
                item.sender === "user"
                  ? "inline-block bg-blue-600 text-white px-5 py-3 rounded-2xl"
                  : "inline-block bg-purple-100 px-5 py-3 rounded-2xl"
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
          <p className="text-gray-500">🤖 AI is thinking...</p>
        )}
      </div>

      <div className="flex gap-3 mt-6">
        <input
          className="flex-1 border rounded-xl px-5 py-3"
          placeholder="Ask your career question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-8 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default CareerChat;