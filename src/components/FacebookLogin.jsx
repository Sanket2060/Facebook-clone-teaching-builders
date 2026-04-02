import React from "react";
import { Link } from "react-router";

export default function FacebookLoginUI() {
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
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link to="/dashboard">
                <button
                  type="button"
                  className="bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700"
                >
                  Log In
                </button>
              </Link>

              <a
                href="#"
                className="text-blue-600 text-sm text-center hover:underline"
              >
                Forgotten password?
              </a>

              <hr className="my-2" />

              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-600"
                >
                  Create new account
                </button>
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
