import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AUTH_API from "../services/authApi";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    // Password validation
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await AUTH_API.post("/api/auth/register", {
        name,
        email,
        password,
      });

      const data = response.data;

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
        })
      );

      // Registration successful → Dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Registration error:", error);

      if (error.response?.status === 409) {
        setMessage("An account with this email already exists.");

      } else if (error.response?.status === 400) {
        setMessage(
          error.response.data?.message ||
          "Please check the information you entered."
        );

      } else if (error.response) {
        setMessage(
          error.response.data?.message ||
          "Registration failed. Please try again."
        );

      } else {
        setMessage(
          "Unable to connect to authentication server. Make sure the server is running."
        );
      }

    } finally {
      // Re-enable button after request finishes
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            SkillBridge AI
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error message */}
          {message && (
            <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg text-sm">
              {message}
            </div>
          )}

          {/* Register button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

        </form>

        {/* Login link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}

          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </button>

        </p>

      </div>

    </div>
  );
}

export default Register;