import { getPost, getAllPosts } from "@/data/posts";
import CommentsSection from "@/components/CommentsSection";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} - Cognitive Science Blog`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold mb-8"
        >
          ← Back to blog
        </Link>

        {/* Post (static) */}
        <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Metadata */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <time className="text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1
                    key={i}
                    className="text-3xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {line.replace("# ", "")}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-gray-800 mt-6 mb-3"
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-bold text-gray-700 mt-4 mb-2"
                  >
                    {line.replace("### ", "")}
                  </h3>
                );
              }

              if (line.match(/^\d+\./)) {
                return (
                  <li key={i} className="ml-6 text-gray-700 mb-2">
                    {line.replace(/^\d+\.\s*/, "")}
                  </li>
                );
              }

              if (line.trim() === "") {
                return <br key={i} />;
              }

              return (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        </article>

        {/* Comments Section */}
        <CommentsSection postSlug={params.slug} />
      </div>
    </div>
  );
}