"use client";

import { useState } from "react";
import { experiences } from '@/assets/assets'
import WorkTimeline from "./WorkTimeLine";


export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExperience = (index) => {
    setExpandedIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">
        Professional background
      </h4>

      <h2 className="text-5xl  mb-10 text-center font-ovo">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((experience, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={experience.company}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {experience.role}
              </h3>

              <p className="text-gray-600">
                {experience.company}
              </p>

              <p className="text-sm text-gray-500">
                {experience.period}
              </p>

              <p className="mt-4">
                {experience.shortDescription}
              </p>

              {isExpanded && (
                <ul className="mt-4 list-disc list-inside space-y-2">
                  {experience.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => toggleExperience(index)}
                className="mt-5 text-purple-600 font-medium"
              >
                {isExpanded ? "View Less" : "View More"}
              </button>
            </div>
          );
        })}
      </div>

        <WorkTimeline />
        
        
      
    </section>
  );
}