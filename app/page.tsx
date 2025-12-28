import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { ResumeButton } from "@/components/main/resume-button";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full max-w-full overflow-x-hidden">
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full max-w-full">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
      </div>
      <ResumeButton />
    </main>
  );
}
