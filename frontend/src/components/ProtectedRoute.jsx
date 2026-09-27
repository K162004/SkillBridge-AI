import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const email = user.email;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow">
                S
              </div>

              <div>
                <h1 className="text-lg font-extrabold text-gray-800">
                  SkillBridge AI
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">
                  AI Career Intelligence
                </p>
              </div>
            </div>

            {/* User Section */}
            <div className="flex items-center gap-3">

              {/* Email */}
              {email && (
                <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
                  <span className="text-sm">👤</span>
                  <span className="text-sm font-medium text-gray-700 max-w-[220px] truncate">
                    {email}
                  </span>
                </div>
              )}

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-4 py-2 rounded-xl font-semibold text-sm transition"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      {children}
    </div>
  );
}

export default ProtectedRoute;