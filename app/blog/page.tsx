import Link from "next/link";

export const metadata = {
  title: "Blog | Arjun ramaswamy Mudaliyar",
  description: "Read my latest thoughts on web development, React, Next.js, and more.",
};

const posts = [
  {
    title: "Building a 3D Portfolio with React and Three.js",
    slug: "3d-portfolio-react-threejs",
    excerpt: "Learn how to create an immersive 3D portfolio website using React and Three.js for stunning visual effects.",
    date: "2025-01-01",
  },
  {
    title: "Optimizing Next.js Apps for Better Performance",
    slug: "nextjs-performance-optimization",
    excerpt: "Tips and tricks to improve your Next.js application's loading speed and user experience.",
    date: "2025-01-15",
  },
  {
    title: "Mastering Framer Motion for Smooth Animations",
    slug: "framer-motion-animations",
    excerpt: "A comprehensive guide to creating beautiful animations with Framer Motion in React applications.",
    date: "2025-01-30",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white py-20 px-4 pt-[90px]">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <p className="text-lg text-gray-300 mb-12 text-center">
          Insights on web development, design, and technology.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}