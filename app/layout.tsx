import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const StarsCanvas = dynamic(
  () => import("@/components/main/star-background").then((mod) => mod.StarsCanvas),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ARJUN RAMASWAMY MUDALIYAR",
    url: "https://your-domain.com", // Replace with actual domain
    sameAs: [
      "https://github.com/arjunmudaliyar99-design",
      // Add LinkedIn, Twitter if available
    ],
    jobTitle: "Web Developer", // Adjust as needed
    description: "Portfolio of ARJUN RAMASWAMY MUDALIYAR, showcasing projects in web development and UI/UX design.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
