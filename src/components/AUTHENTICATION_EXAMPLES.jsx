/**
 * EXAMPLE: How to Use Authentication in Your Components
 * This file demonstrates the most common patterns for students
 */

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

// ============================================
// EXAMPLE 1: Simple Component with User Info
// ============================================
export function UserProfile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <div className="p-4 bg-blue-100 rounded">
      <h3>Welcome, {user?.fullName}!</h3>
      <p>Email: {user?.email}</p>
      <button
        onClick={handleLogout}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}

// ============================================
// EXAMPLE 2: Fetch Protected Data with Auth
// ============================================
export function GetUserProfile({ profileId }) {
  const { isAuthenticated } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated || !profileId) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        // IMPORTANT: withCredentials: true sends the session cookie
        const response = await axios.get(
          `https://public-feed-api.replit.app/api/profiles/${profileId}`,
          { withCredentials: true },
        );
        setProfile(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [profileId, isAuthenticated]);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile found</div>;

  return (
    <div className="p-4 border rounded">
      <h3>{profile.name}</h3>
      <p>{profile.caption}</p>
      <img
        src={profile.profile}
        alt="profile"
        className="w-20 h-20 rounded-full"
      />
    </div>
  );
}

// ============================================
// EXAMPLE 3: Conditional Rendering Based on Auth
// ============================================
export function Dashboard() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in to see this page</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile />
      <GetUserProfile profileId={1} />
      <GetUserProfile profileId={2} />
    </div>
  );
}

// ============================================
// EXAMPLE 4: Login Form Component
// ============================================
export function SimpleLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await login(email, password);
      console.log("Logged in user:", user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      {error && <div className="text-red-600 mb-3">{error}</div>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded mb-3"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border rounded mb-4"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

// ============================================
// KEY CONCEPTS FOR STUDENTS
// ============================================
/*
1. USING useAuth() HOOK
   - Import: import { useAuth } from "../hooks/useAuth";
   - Destructure: const { user, login, logout, isAuthenticated } = useAuth();
   - Available in any component inside <AuthProvider>

2. CREDENTIALS: "INCLUDE"
  - axios.get(url, { withCredentials: true })
   - This AUTOMATICALLY sends the session cookie to protected endpoints
   - Without it: 401 Unauthorized error

3. AUTH CHECKING
   - Check if user exists: if (user) { ... }
   - Check authentication status: if (isAuthenticated) { ... }
   - Use in useEffect dependencies: [isAuthenticated]

4. STORING & CLEARING USER STATE
   - AuthContext automatically stores user info
   - After logout, user is null
   - No need to use localStorage!

5. ERROR HANDLING
   - login() and signup() throw errors on failure
   - Catch with try/catch
   - API returns error messages in response.error

6. REDIRECTS
   - After login: navigate to /dashboard
   - After logout: navigate to /login
   - ProtectedRoute auto-redirects if not authenticated
*/
