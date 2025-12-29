import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Arjun ramaswamy Mudaliyar | PORTFOLIO",
  description: "Explore the portfolio of Arjun ramaswamy Mudaliyar, a skilled web developer specializing in React, Next.js, and modern web technologies. Discover innovative projects and creative designs.",
  keywords: [
    "Arjun ramaswamy Mudaliyar",
    "web developer portfolio",
    "React developer",
    "Next.js portfolio",
    "full stack developer",
    "UI/UX designer",
    "JavaScript developer",
    "TypeScript projects",
    "3D portfolio website",
    "modern web development",
    "framer motion animations",
    "tailwind CSS portfolio",
    "space-themed portfolio",
    "innovative web projects",
    "frontend developer",
    "backend developer",
    "responsive web design",
    "web development tutorials",
    "coding portfolio examples",
  ] as Array<string>,
  authors: {
    name: "Arjun ramaswamy Mudaliyar",
    url: "https://github.com/arjunmudaliyar99-design",
  },
  openGraph: {
    title: "Arjun ramaswamy Mudaliyar | Portfolio",
    description: "Explore the portfolio of Arjun ramaswamy Mudaliyar.",
    url: "https://arjun-portfolio-wheat.vercel.app/", // Replace with actual domain
    siteName: "Arjun Portfolio",
    images: [
      {
        url: "/icon1.png", // Use an appropriate image
        width: 1200,
        height: 630,
        alt: "Arjun ramaswamy Mudaliyar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun ramaswamy Mudaliyar | Portfolio",
    description: "Explore the portfolio of Arjun ramaswamy Mudaliyar.",
    images: ["/icon1.png"],
    creator: "@yourtwitterhandle", // Replace if applicable
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
