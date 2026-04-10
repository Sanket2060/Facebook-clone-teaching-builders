import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const DEMO_USERS = [
  { username: "student", password: "123456" },
  { username: "teacher", password: "abc123" },
];

export default function FacebookLoginUI({ mode = "login" }) {
  const navigate = useNavigate();
  const isSignupMode = mode === "signup";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const validUser = DEMO_USERS.find(
      (user) => user.username === username && user.password === password,
    );

    if (!validUser) {
      setError("Invalid demo credentials");
      return;
    }

    setError("");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", validUser.username);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex justify-center items-center flex-1 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl">
          {/* Left Section */}
          <div className="mb-10 md:mb-0 md:mt-16 max-w-md text-center md:text-left">
            <h1 className="text-blue-600 text-5xl font-bold mb-4">facebook</h1>
            <p className="text-xl text-gray-700">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          {/* Right Section (Login Card) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700"
                >
                  {isSignupMode ? "Sign Up" : "Log In"}
                </button>
              </Link>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <p className="text-xs text-gray-500 text-center">
                Demo credentials: student / 123456
              </p>

              <a
                href="#"
                className="text-blue-600 text-sm text-center hover:underline"
              >
                Forgotten password?
              </a>

              <hr className="my-2" />

              <div className="flex justify-center">
                {isSignupMode ? (
                  <Link
                    to="/"
                    className="text-blue-600 text-sm text-center hover:underline"
                  >
                    Already have an account? Log In
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="bg-green-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-600"
                  >
                    Create new account
                  </Link>
                )}
              </div>

              <div className="flex justify-center">
                <Link
                  to="/about"
                  className="text-gray-500 text-xs text-center hover:underline"
                >
                  About this demo
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 pb-6">
        <p>
          <span className="font-semibold">Create a Page</span> for a celebrity,
          brand or business.
        </p>
      </div>
    </div>
  );
}
