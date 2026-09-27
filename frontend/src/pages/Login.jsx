import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AUTH_API from "../services/authApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await AUTH_API.post("/api/auth/login", {
        email,
        password,
      });

      const data = response.data;

      // Save authentication information
      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
        })
      );

      // Go to SkillBridge dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);

      if (error.response?.status === 401) {
        setMessage("Invalid email or password.");

      } else if (error.response?.status === 400) {
        setMessage(
          error.response.data?.message ||
          "Please check your login details."
        );

      } else if (error.response) {
        setMessage(
          error.response.data?.message ||
          "Login failed. Please try again."
        );

      } else {
        setMessage(
          "Unable to connect to authentication server. Make sure the server is running."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-6xl">

        <div className="grid lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden">

          {/* ================= LEFT SIDE ================= */}
          <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-12">

            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full" />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/10 rounded-full" />
            <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/5 rounded-full" />

            <div className="relative z-10 flex flex-col justify-between w-full">

              {/* Brand */}
              <div>
                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-2xl font-extrabold border border-white/20">
                    S
                  </div>

                  <div>
                    <h1 className="text-2xl font-extrabold">
                      SkillBridge AI
                    </h1>

                    <p className="text-blue-100 text-sm">
                      AI Career Intelligence
                    </p>
                  </div>

                </div>
              </div>

              {/* Main message */}
              <div className="my-12">

                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
                  ✨ Your Career. Powered by AI.
                </div>

                <h2 className="text-5xl font-extrabold leading-tight mt-6">
                  Build your
                  <span className="block text-blue-100">
                    career with AI.
                  </span>
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed mt-6 max-w-lg">
                  Turn your resume into a personalized career roadmap with
                  AI-powered insights, skill analysis, learning plans,
                  opportunities and interview preparation.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      📄
                    </div>
                    <div>
                      <p className="font-bold">Smart Resume Analysis</p>
                      <p className="text-sm text-blue-100">
                        Understand your profile instantly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      🎯
                    </div>
                    <div>
                      <p className="font-bold">Personalized Career Paths</p>
                      <p className="text-sm text-blue-100">
                        Discover roles matching your skills
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      📚
                    </div>
                    <div>
                      <p className="font-bold">AI Learning Roadmap</p>
                      <p className="text-sm text-blue-100">
                        Know what to learn next
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom quote */}
              <div className="border-t border-white/20 pt-6">
                <p className="text-blue-100 text-sm">
                  "From resume to career readiness — one intelligent
                  platform."
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="bg-white p-7 sm:p-10 lg:p-12">

            {/* Mobile brand */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-extrabold shadow-lg">
                S
              </div>

              <div>
                <h1 className="text-xl font-extrabold text-gray-800">
                  SkillBridge AI
                </h1>

                <p className="text-xs text-gray-400">
                  AI Career Intelligence
                </p>
              </div>

            </div>

            {/* Header */}
            <div className="mb-8">

              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                🔐 Secure Login
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-5">
                Welcome back 👋
              </h2>

              <p className="text-gray-500 mt-2">
                Sign in to continue your AI-powered career journey.
              </p>

            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ✉️
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition"
                  />

                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    🔒
                  </span>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition"
                  />

                </div>
              </div>

              {/* Error message */}
              {message && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-xl text-sm">
                  <span>⚠️</span>
                  <span>{message}</span>
                </div>
              )}

              {/* Login button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-blue-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⟳</span>
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Login to SkillBridge
                    <span>→</span>
                  </span>
                )}
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400 font-medium">
                NEW TO SKILLBRIDGE?
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Register */}
            <button
              onClick={() => navigate("/register")}
              className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-bold py-3.5 rounded-xl transition"
            >
              Create New Account
            </button>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 mt-8 text-xs text-gray-400">
              <span>🔒</span>
              <span>Your account information is securely handled.</span>
            </div>

          </div>

        </div>

        {/* Bottom text */}
        <p className="text-center text-white/50 text-xs mt-5">
          SkillBridge AI • Intelligent Career Guidance Platform
        </p>

      </div>

    </div>
  );
}

export default Login;