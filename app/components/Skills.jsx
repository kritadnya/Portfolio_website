"use client";

import { useEffect, useState } from "react";
import { skills } from "@/assets/assets";

function SkillBar({ skill, index }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, 150 + index * 100);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="w-full">

      {/* Skill name + percentage */}
      <div className="flex items-center justify-between mb-2">

        <span className="text-sm font-medium text-gray-900">
          {skill.name}
        </span>

        <span className="text-sm text-gray-900 tabular-nums">
          {progress}%
        </span>

      </div>

      {/* Small progress bar */}
      <div className="w-full h-1.5 bg-gray-200 overflow-hidden">

        <div
          className="
            h-full
            
            bg-light-blue
            transition-all
            duration-1000
            ease-out
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default function Skills() {
  return (
    <section className="w-full px-[8%] md:px-[16%] py-20">

      {/* Heading */}
      <div className="text-center mb-10">

        <p className="text-lg text-gray-900 font-ovo mb-1">
          What I work with
        </p>

        <h2 className="text-3xl md:text-4xl font-ovo text-light-black">
          Skills
        </h2>

      </div>

      {/* Two-column skills */}
      <div
        className="
          max-w-3xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-x-10
          gap-y-6
        "
      >

        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}