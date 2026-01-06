export async function generateStaticParams() {
  const posts = await getPosts() // Obtener lista de posts
  
  return posts.map((post) => ({
    slug: post.slug, // ← CRÍTICO: debe coincidir con [slug]
  }))
}
