
"use client" 

import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

export default function CommentsSection({ postSlug }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

 //Step 1: Load comments
  useEffect(() => {
    loadComments();
  }, [postSlug]);

  const loadComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/comments?postSlug=${postSlug}`);
      
      if (!response.ok) throw new Error("Error loading comments");
      
      const data = await response.json();
      setComments(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Add new comment
  const handleAddComment = async ({ text, author }) => {
    try {
      setSubmitting(true);
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postSlug,
          text,
          author,
        }),
      });

      if (!response.ok) throw new Error("Error al enviar comentario");

      const newComment = await response.json();
      setComments([newComment, ...comments]); // Agregar al inicio
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Step 3: Like
  const handleLike = async (commentId) => {
    try {
      const response = await fetch(`/api/comments/${commentId}/like`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Error al dar like");

      // Update local state
      setComments(
        comments.map((c) =>
          c.id === commentId ? { ...c, likes: c.likes + 1 } : c
        )
      );
    } catch (err) {
      console.error(err);
      alert("Error al dar like");
    }
  };

  return (
    <section className="mt-16 pt-12 border-t-2 border-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Comentarios ({comments.length})
      </h2>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Comment Form */}
      <CommentForm onSubmit={handleAddComment} isLoading={submitting} />

      {/* Loading */}
      {loading && <p className="text-center text-gray-500">Loading comments...</p>}

      {/* if no comments */}
      {!loading && comments.length === 0 && (
        <p className="text-center text-gray-500">
          Be the first to comment
        </p>
      )}

      {/* Lista de comentarios */}
      {!loading && comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              {/* Autor y fecha */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-gray-900">{comment.author}</p>
                  <time className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString("es-ES")}
                  </time>
                </div>
              </div>

              {/* Texto del comentario */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {comment.text}
              </p>

              {/* Me gusta */}
              <button
                onClick={() => handleLike(comment.id)}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold text-sm"
              >
                ❤️ {comment.likes}{" "}
                {comment.likes === 1 ? "Like" : "Likes"}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}