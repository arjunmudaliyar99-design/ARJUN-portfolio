import { notFound } from "next/navigation";
import Link from "next/link";

const posts = {
  "3d-portfolio-react-threejs": {
    title: "Building a 3D Portfolio with React and Three.js",
    content: `
      <h2>Introduction</h2>
      <p>Creating a 3D portfolio can significantly enhance user engagement and showcase your skills in modern web technologies. In this post, we'll explore how to build an immersive 3D portfolio using React and Three.js.</p>

      <h2>Why 3D?</h2>
      <p>3D elements can make your portfolio stand out from the crowd. They demonstrate technical proficiency and create memorable user experiences.</p>

      <h2>Getting Started</h2>
      <p>First, install the necessary dependencies: React Three Fiber and Drei for easier Three.js integration.</p>

      <pre><code>npm install @react-three/fiber @react-three/drei three</code></pre>

      <h2>Implementation</h2>
      <p>Here's a basic example of setting up a 3D scene in your React component...</p>

      <p>This approach allows for interactive 3D elements that respond to user input, creating a dynamic portfolio experience.</p>
    `,
    date: "2025-01-01",
  },
  "nextjs-performance-optimization": {
    title: "Optimizing Next.js Apps for Better Performance",
    content: `
      <h2>Why Performance Matters</h2>
      <p>Fast-loading websites improve user experience and SEO rankings. Next.js provides excellent performance out of the box, but there are additional optimizations you can implement.</p>

      <h2>Key Optimization Techniques</h2>
      <ul>
        <li>Image optimization with Next.js Image component</li>
        <li>Code splitting and lazy loading</li>
        <li>Minimizing bundle size</li>
        <li>Caching strategies</li>
      </ul>

      <h2>Image Optimization</h2>
      <p>Use the Next.js Image component for automatic optimization, lazy loading, and responsive images.</p>

      <h2>Bundle Analysis</h2>
      <p>Regularly analyze your bundle size and remove unused dependencies to keep your app lightweight.</p>
    `,
    date: "2025-01-15",
  },
  "framer-motion-animations": {
    title: "Mastering Framer Motion for Smooth Animations",
    content: `
      <h2>Introduction to Framer Motion</h2>
      <p>Framer Motion is a powerful animation library for React that makes creating smooth, interactive animations simple and declarative.</p>

      <h2>Basic Animations</h2>
      <p>Start with simple entrance animations using the motion components.</p>

      <h2>Gesture-Based Animations</h2>
      <p>Add hover, tap, and drag interactions to make your UI more engaging.</p>

      <h2>Layout Animations</h2>
      <p>Animate changes in layout automatically with layout animations.</p>

      <h2>Performance Considerations</h2>
      <p>Use transform properties for better performance and avoid animating layout properties when possible.</p>
    `,
    date: "2025-01-30",
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return {};

  return {
    title: `${post.title} | ARJUN RAMASWAMY MUDALIYAR`,
    description: post.content.slice(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030014] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Blog
        </Link>
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <time className="text-gray-400">{post.date}</time>
          </header>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}