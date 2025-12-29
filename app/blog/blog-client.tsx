'use client';

import Link from "next/link";
import React, { useState } from "react";

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

interface BlogPageClientProps {
  posts: Post[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(posts.map(p => p.category)));
  const filteredPosts = selectedCategory ? posts.filter(p => p.category === selectedCategory) : posts;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#030014] via-[#0a0033] to-[#1a0055] text-white py-20 px-4 pt-[90px]">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech & Life Insights
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Deep dives into full-stack development, AI/ML, leadership, and professional growth
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-[rgba(112,66,248,0.2)] text-gray-300 hover:bg-[rgba(112,66,248,0.4)]"
              }`}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                    : "bg-[rgba(112,66,248,0.2)] text-gray-300 hover:bg-[rgba(112,66,248,0.4)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group h-full"
            >
              <article className="h-full bg-gradient-to-br from-[rgba(112,66,248,0.1)] to-[rgba(59,130,246,0.05)] border border-[rgba(112,66,248,0.3)] rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/50">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(112,66,248,0.2)]">
                  <time className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-xs text-blue-400 font-medium">{post.readTime}</span>
                </div>

                {/* Read More Arrow */}
                <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm">
                  Read Article →
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No posts found in this category</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-[rgba(112,66,248,0.2)]">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">{posts.length}</div>
            <p className="text-gray-400 text-sm mt-2">Articles Published</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">{categories.length}</div>
            <p className="text-gray-400 text-sm mt-2">Topics Covered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400">100+</div>
            <p className="text-gray-400 text-sm mt-2">Minutes of Reading</p>
          </div>
        </div>
      </div>
    </main>
  );
}
