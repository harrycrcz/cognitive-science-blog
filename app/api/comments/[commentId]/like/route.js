
import { db } from "@/lib/db";

export async function POST(request, { params }) {
  const { commentId } = params;

  const docRef = db.collection("comments").doc(commentId);
  
  await docRef.update({
    likes: firebase.firestore.FieldValue.increment(1),
  });

  return Response.json({ success: true });
}