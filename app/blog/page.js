import Link from "next/link";
import { getAllPosts } from "@/data/posts";

export const metadata = {
  title: "Blog - Cognitive Science",
  description: "Articles about memory, attention, and cognitive processing",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Cognitive Science Blog
          </h1>
          <p className="text-xl text-gray-600">
            Exploring how our mind works
          </p>
        </div>

        {/* Grid of posts */}
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 cursor-pointer border-l-4 border-l-indigo-600">
                {/* Date */}
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mt-3">{post.excerpt}</p>

                {/* Link visual */}
                <div className="mt-4 text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Read more →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}