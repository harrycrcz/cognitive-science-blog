import { db } from "@/lib/db";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// GET /api/comments?postSlug=cognitive-science-basics
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const postSlug = searchParams.get("postSlug");

    if (!postSlug) {
      return Response.json(
        { error: "postSlug is requested" },
        { status: 400 }
      );
    }

    // Query a Firebase
    const q = query(
      collection(db, "comments"),
      where("postSlug", "==", postSlug),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);
    const comments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      // Convert timestamp from Firebase to ISO string
      createdAt: doc.data().createdAt?.toDate?.().toISOString() || new Date().toISOString(),
    }));

    return Response.json(comments);
  } catch (error) {
    console.error("Error in GET /api/comments:", error);
    return Response.json(
      { error: "Error getting comments" },
      { status: 500 }
    );
  }
}

// POST /api/comments
export async function POST(request) {
  try {
    const { postSlug, text, author } = await request.json();

    // Validate
    if (!postSlug || !text || !author) {
      return Response.json(
        { error: "postSlug, text and author are requested" },
        { status: 400 }
      );
    }

    if (text.length < 5) {
      return Response.json(
        { error: "The comment must be at least 5 characters long" },
        { status: 400 }
      );
    }

    if (author.length < 2) {
      return Response.json(
        { error: "The name must be at least 2 characters long" },
        { status: 400 }
      );
    }

    // Create doc in Firebase
    const docRef = await addDoc(collection(db, "comments"), {
      postSlug,
      text,
      author,
      likes: 0,
      createdAt: serverTimestamp(),
    });

    // Return created comment
    return Response.json(
      {
        id: docRef.id,
        postSlug,
        text,
        author,
        likes: 0,
        createdAt: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en POST /api/comments:", error);
    return Response.json(
      { error: "Error al crear comentario" },
      { status: 500 }
    );
  }
}