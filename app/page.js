import Link from "next/link";

export const metadata = {
  title: "Home - Cognitive Science Blog",
  description: "Blog and resources about cognitive science",
};

export default function Home() {
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

      {/* Hero section */}
      <div className="max-w-4xl mx-auto px-8 py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to CogniScience
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Exploring the mysteries of the human mind
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors"
          >
            Read the Blog →
          </Link>
          <Link
            href="/about"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            About This Site
          </Link>
        </div>
      </div>

      {/* Featured posts preview */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Articles
        </h2>
        <div className="text-gray-700">
          <p className="mb-4">
            Here you can find articles about memory, attention, learning, and much more about how our brain works.
          </p>
          <Link href="/blog" className="text-indigo-600 font-semibold hover:text-indigo-800">
            View all articles →
          </Link>
        </div>
      </div>
    </div>
  );
}