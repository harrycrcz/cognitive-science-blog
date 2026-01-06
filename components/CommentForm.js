
"use client"   

import { useState } from "react";

export default function CommentForm({ onSubmit, isLoading }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!text.trim() || !author.trim()) {
      alert("Completa nombre y comentario");
      return;
    }

    await onSubmit({ text, author });
    setText("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Comment
      </h3>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Name
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="John Meyer"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          disabled={isLoading}
        />
      </div>

      {/* Comment */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Comment
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment here..."
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
      >
        {isLoading ? "Enviando..." : "Comentar"}
      </button>
    </form>
  );
}