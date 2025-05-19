"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 flex flex-col items-center text-white">
      <div className="w-full max-w-7xl flex justify-end mb-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigateTo("/signup");
          }}
          className="px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300 font-semibold shadow-lg"
        >
          Signup
        </button>
      </div>

      <div className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-lg">
        Your Growth Dashboard
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        <button
          onClick={() => navigateTo("/journal")}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-600 shadow-xl hover:scale-105 hover:bg-purple-800/20 transition-transform duration-300 text-left"
        >
          <div className="text-2xl font-bold mb-3 text-pink-300">
            Journal to Career
          </div>
          <div className="text-gray-300">
            Get personalized career insights based on your thoughts and mood.
          </div>
        </button>

        <button
          onClick={() => navigateTo("/planner")}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-600 shadow-xl hover:scale-105 hover:bg-purple-800/20 transition-transform duration-300 text-left"
        >
          <div className="text-2xl font-bold mb-3 text-red-300">
            Study Planner
          </div>
          <div className="text-gray-300">
            Create a daily study schedule tailored to your pace and goals.
          </div>
        </button>

        <button
          onClick={() => navigateTo("/skills")}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-purple-600 shadow-xl hover:scale-105 hover:bg-purple-800/20 transition-transform duration-300 text-left"
        >
          <div className="text-2xl font-bold mb-3 text-pink-300">
            Skill Challenges
          </div>
          <div className="text-gray-300">
            Test your skills in Frontend, Backend, UI/UX, or Data Analysis.
          </div>
        </button>
      </div>

      {/* <div className="mt-16 text-gray-500 text-sm text-center w-full max-w-6xl">
        © 2025 Career Companion. All rights reserved.
      </div> */}
    </div>
  );
}
