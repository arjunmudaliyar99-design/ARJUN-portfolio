import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Animated Background Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-200px] sm:top-[-100px] md:top-[-200px] left-0 w-full h-full object-cover -z-20 opacity-80"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Gradient Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/30 to-[#030014] -z-10" />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-pulse -z-10" style={{ animationDelay: '1.5s' }} />

      <HeroContent />
    </div>
  );
};
