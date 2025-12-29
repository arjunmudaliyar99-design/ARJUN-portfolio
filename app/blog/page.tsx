import Link from "next/link";

export const metadata = {
  title: "Blog | Arjun ramaswamy Mudaliyar",
  description: "Read my latest thoughts on web development, React, Next.js, and more.",
};

const posts = [
  {
    title: "Real-Time Hand Tracking: Building a Virtual Watch Overlay with Python & OpenCV",
    slug: "hand-tracking-opencv-mediapipe",
    excerpt: "Explore how I built a real-time hand detection system using OpenCV and MediaPipe, achieving 21-point landmark tracking with dynamic watch overlay.",
    date: "2024-07-15",
  },
  {
    title: "From Technical Support to Automation: My Journey at DataVista Solutions",
    slug: "technical-support-automation-journey",
    excerpt: "Discover how I achieved 95% first-contact resolution and built Python automation scripts that reduced manual workload by 40%.",
    date: "2025-01-20",
  },
  {
    title: "Building an AI-Powered Animal Emergency Response Platform",
    slug: "animal-emergency-platform-dialogflow",
    excerpt: "Learn how I developed a university project connecting pet owners, vets, and rescue teams using Dialogflow and WhatsApp API integration.",
    date: "2024-12-20",
  },
  {
    title: "Full-Stack Web Development: Building EEMS Educational Management System",
    slug: "eems-dashboard-fullstack-development",
    excerpt: "A deep dive into building a multi-role educational platform with PHP/MySQL, role-based authentication, and secure database operations.",
    date: "2025-01-25",
  },
  {
    title: "Fitness Tracking Meets Wearable Technology: AyuSangam Project",
    slug: "fitness-tracker-wearable-integration",
    excerpt: "Building a personal fitness tracker integrating HRV, RHR, and sleep data from wearables with real-time analytics dashboards.",
    date: "2025-01-28",
  },
  {
    title: "From Mentoring to Leadership: My Experience Teaching Programming",
    slug: "programming-mentorship-experience",
    excerpt: "How I taught 10+ students C, C++, HTML, CSS, and Python with 90% satisfaction rating, and what I learned about effective technical education.",
    date: "2025-01-22",
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