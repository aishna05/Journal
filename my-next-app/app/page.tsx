'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">🎯 Welcome to Your Growth Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Link href="/journal">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer hover:bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2">🧠 Journal to Career</h2>
            <p className="text-gray-700">Get personalized career insights based on your thoughts and mood.</p>
          </div>
        </Link>

        <Link href="/planner">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer hover:bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2">📅 Study Planner</h2>
            <p className="text-gray-700">Create a daily study schedule tailored to your pace and goals.</p>
          </div>
        </Link>

        <Link href="/skills">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer hover:bg-blue-50">
            <h2 className="text-2xl font-semibold mb-2">🚀 Skill Challenges</h2>
            <p className="text-gray-700">Test your skills in Frontend, Backend, UI/UX, or Data Analysis.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
