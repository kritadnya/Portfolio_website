"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/assets/assets";
import WorkTimeline from "./WorkTimeLine";

export default function WorkExperience() {
  // Each experience can be expanded independently
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExperience = (index) => {
    setExpandedItems((current) => {
      if (current.includes(index)) {
        return current.filter((item) => item !== index);
      }

      return [...current, index];
    });
  };

  return (
    <section
      id="experience"
      className="w-full px-[8%] md:px-[12%] py-16 scroll-mt-20"
    >
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <h4 className="text-center mb-2 text-lg font-ovo">
        Professional background
      </h4>

      <h2 className="text-4xl md:text-5xl mb-8 text-center font-ovo">
        Work Experience
      </h2>

      <p className="text-center max-w-2xl mx-auto mb-16 font-ovo leading-7">
        Every role has added a new perspective. Explore the work,
        challenges and lessons that have shaped my professional journey.
      </p>

      {/* =====================================================
          EXPERIENCE GRID
      ====================================================== */}

      <div className="max-w-6xl mx-auto space-y-10">
        {experiences.map((experience, index) => {
          const isExpanded = expandedItems.includes(index);

          // Even: text left / image right
          // Odd:  image left / text right
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={`${experience.company}-${experience.role}-${index}`}
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                hover:shadow-pink
                transition-shadow
                duration-300
                hover:bg-light
                
              "
            >
              {/* =================================================
                  EXPERIENCE CONTENT
              ================================================== */}

              <div
                className={`
                  p-7
                  md:p-10
                  flex
                  flex-col
                  justify-center

                  ${isReversed ? "md:order-2" : "md:order-1"}
                `}
              >
                {/* Date */}
                <div className="mb-4">
                  <span
                    className="
                      inline-flex
                      px-4
                      py-1.5
                      bg-purple-100
                      text-purple-700
                      text-sm
                      font-semibold
                    "
                  >
                    {experience.period}
                  </span>
                </div>

                {/* Role */}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {experience.role}
                </h3>

                {/* Company */}
                <p className="mt-2 text-lg text-purple-600 font-medium">
                  {experience.company}
                </p>

                {/* Location */}
                {experience.location && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1114 0z"
                      />
                    </svg>

                    <span>{experience.location}</span>
                  </div>
                )}

                {/* Short description */}
                <p className="mt-5 text-gray-600 leading-7">
                  {experience.shortDescription}
                </p>

                {/* Expanded details */}
                {isExpanded && (
                  <ul className="mt-5 list-disc list-inside space-y-2 text-gray-600 leading-6">
                    {experience.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                {/* View More / Less */}
                <button
                  onClick={() => toggleExperience(index)}
                  className="
                    mt-6
                    w-fit
                    text-purple-600
                    font-medium
                    hover:text-purple-800
                    transition-colors
                    duration-200
                  "
                >
                  {isExpanded ? "View Less ↑" : "View More ↓"}
                </button>
              </div>

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className={`
                  relative
                  min-h-[300px]
                  md:min-h-[450px]
                  bg-gray-100
                  overflow-hidden

                  ${isReversed ? "md:order-1" : "md:order-2"}
                `}
              >
                {experience.image ? (
                  <Image
                    src={experience.image}
                    alt={`${experience.company} - ${experience.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                ) : (
                  <div className="w-full h-full min-h-[300px] flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}

                {/* Subtle overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          TIMELINE
          Completely separate from Work Experience
      ====================================================== */}

      <WorkTimeline />
    </section>
  );
}