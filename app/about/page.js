// app/about/page.js

import Link from "next/link";

export const metadata = {
  title: "About - CogniScience Blog",
  description: "Learn about the CogniScience blog and its mission to make cognitive science accessible",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            🧠 CogniScience
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-semibold">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-semibold">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-semibold">
              About
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About CogniScience
          </h1>
          <p className="text-xl text-gray-600">
            Exploring the fascinating world of human cognition
          </p>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Mission */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              CogniScience is dedicated to making cognitive science accessible to everyone. We believe that understanding how our brains work should not be limited to academic researchers—it's knowledge that can improve our daily lives.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through clear explanations, real-world examples, and interactive discussions, we explore the mysteries of memory, attention, learning, decision-making, and much more.
            </p>
          </section>

          {/* What you'll learn */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our blog covers a wide range of cognitive science topics:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Memory Systems</strong>
                  <p className="text-gray-600">How we encode, store, and retrieve information</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Attention and Focus</strong>
                  <p className="text-gray-600">Why we can't do everything at once and how to improve concentration</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Learning and Development</strong>
                  <p className="text-gray-600">How our brains acquire new skills and knowledge</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Decision-Making</strong>
                  <p className="text-gray-600">The cognitive processes behind our choices</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold text-lg">✓</span>
                <div>
                  <strong className="text-gray-900">Language and Communication</strong>
                  <p className="text-gray-600">How we understand and produce language</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Why it matters */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why It Matters
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Understanding cognitive science has practical applications:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>📚 <strong>Better learning strategies</strong> - Know how your brain actually learns</li>
              <li>🎯 <strong>Improved productivity</strong> - Work with your attention span, not against it</li>
              <li>💭 <strong>Better decision-making</strong> - Understand cognitive biases that affect your choices</li>
              <li>🧠 <strong>Mental health awareness</strong> - Recognize how cognition affects well-being</li>
              <li>👥 <strong>Improved relationships</strong> - Better understand how people process and communicate</li>
            </ul>
          </section>

          {/* Interactive feature */}
          <section className="mb-10 bg-indigo-50 border-l-4 border-l-indigo-600 p-6 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Join the Conversation
            </h2>
            <p className="text-gray-700 mb-4">
              Every article on this blog includes a comment section. Share your thoughts, ask questions, and engage with other readers interested in cognitive science. Your perspective matters!
            </p>
            <Link
              href="/blog"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Read Articles and Comment
            </Link>
          </section>

          {/* About the author (optional) */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About the Author
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              This blog was created as a passion project to explore cognitive science concepts and share them in an accessible way. Each article is researched thoroughly and written to be informative while remaining engaging.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're a student, professional, or simply curious about how the human mind works, there's something here for you.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Explore?
          </h3>
          <Link
            href="/blog"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors"
          >
            Start Reading Now →
          </Link>
        </div>
      </div>
    </div>
  );
}