import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-20 px-6"
    >
      <SkillText />

      {/* All Skills Combined */}
      <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-10 items-center max-w-7xl">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            icon={skill.icon}
            name={skill.skill_name}
            color={skill.color}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
