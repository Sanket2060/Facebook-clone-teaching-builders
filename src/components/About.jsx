import React from "react";
import { Link } from "react-router";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          About This Demo
        </h1>
        <p className="text-gray-700 mb-6">
          This is a simple public page used to teach public routes, protected
          routes, and semi-protected routes in React Router.
        </p>
        <Link
          to="/dashboard"
          className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
