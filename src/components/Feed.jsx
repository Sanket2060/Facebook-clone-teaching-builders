import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, logout } = useAuth();
  const API_URL = "https://public-feed-api.replit.app";

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/posts`, {
        withCredentials: true,
      });
      setPosts(response.data.posts || []);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow sticky top-0">
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">facebook</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">
              Welcome, <strong>{user?.fullName || user?.username}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            Error: {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts available</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-lg shadow border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div>
                    <p className="font-bold.">{post.postedBy}</p>
                    <p className="text-sm text-gray-600">{post.postedAt}</p>
                  </div>
                </div>

                <p className="text-gray-800 mb-3">{post.caption}</p>

                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt="post"
                    className="w-full rounded-lg mb-3 object-cover max-h-96"
                  />
                )}

                <div className="flex items-center gap-4 text-sm text-gray-600 border-t pt-3">
                  <button className="hover:text-blue-600">
                    👍 {post.likes} Likes
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
