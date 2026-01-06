// data/posts.js

export const posts = [
  {
    id: 1,
    slug: "cognitive-science-basics",
    title: "Fundamentals of Cognitive Science",
    date: "2024-01-15",
    excerpt: "Introduction to the basic principles of how our brain works.",
    content: `
# Fundamentals of Cognitive Science

Cognitive science is the interdisciplinary study of the mind and intelligence.

## What exactly is it?

It combines psychology, neuroscience, linguistics, philosophy, and computer science to understand how:
- We process information
- We learn and remember
- We make decisions
- We use language

## The 3 main pillars

1. **Representation**: How the brain represents information
2. **Processing**: How the brain processes that information
3. **Learning**: How the brain acquires and improves processing

The cognitive revolution of the 1950s replaced behaviorism with this more complex view of the brain.
    `
  },
  {
    id: 2,
    slug: "memory-systems",
    title: "Memory Systems",
    date: "2024-01-20",
    excerpt: "Exploration of short-term, long-term, and sensory memory.",
    content: `
# Memory Systems

Our brain doesn't have ONE memory, but several different types.

## Sensory Memory
Duration: < 1 second
Capacity: Very large (everything we see/hear)

## Short-Term Memory (Working Memory)
Duration: ~30 seconds
Capacity: 7±2 items (that's why phone numbers are 7 digits)

## Long-Term Memory
Duration: Years (potentially lifetime)
Capacity: Apparently unlimited

Each system works differently. Understanding this is key to learning better.
    `
  },
  {
    id: 3,
    slug: "attention-control",
    title: "Attention and Executive Control",
    date: "2024-01-25",
    excerpt: "How the brain directs attention and maintains focus.",
    content: `
# Attention and Executive Control

Attention is the "bottleneck" of cognitive processing.

## The Cocktail Party Problem

You're at a noisy party. Your brain CAN hear everyone, but you only ATTEND to one conversation.

This is selective attention: the filter that chooses what information to process.

## Executive Functions

Executive functions include:
- **Planning**: Organizing future actions
- **Inhibition**: Resisting impulses
- **Task Switching**: Shifting between different tasks
- **Monitoring**: Checking that we're on the right track

These functions improve with practice (that's why meditation works).
    `
  }
];

// Helper function to get a post by slug
export function getPost(slug) {
  return posts.find(post => post.slug === slug);
}

// Helper function to get all posts
export function getAllPosts() {
  return posts;
}
