import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "ARJUN RAMASWAMY MUDALIYAR | PORTFOLIO",
  description: "Explore the portfolio of ARJUN RAMASWAMY MUDALIYAR, a skilled web developer specializing in React, Next.js, and modern web technologies. Discover innovative projects and creative designs.",
  keywords: [
    "ARJUN RAMASWAMY MUDALIYAR",
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
    name: "ARJUN RAMASWAMY MUDALIYAR",
    url: "https://github.com/arjunmudaliyar99-design",
  },
  openGraph: {
    title: "ARJUN RAMASWAMY MUDALIYAR | Portfolio",
    description: "Explore the portfolio of ARJUN RAMASWAMY MUDALIYAR, a skilled web developer specializing in React, Next.js, and modern web technologies. Discover innovative projects and creative designs.",
    url: "https://your-domain.com", // Replace with actual domain
    siteName: "ARJUN Portfolio",
    images: [
      {
        url: "/icon1.png", // Use an appropriate image
        width: 1200,
        height: 630,
        alt: "ARJUN RAMASWAMY MUDALIYAR Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARJUN RAMASWAMY MUDALIYAR | Portfolio",
    description: "Explore the portfolio of ARJUN RAMASWAMY MUDALIYAR, a skilled web developer specializing in React, Next.js, and modern web technologies. Discover innovative projects and creative designs.",
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
} as const;
