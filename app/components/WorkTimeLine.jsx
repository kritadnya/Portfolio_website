"use client";

import { useEffect, useRef, useState } from "react";
import { timelineData } from "@/assets/assets";

export default function WorkTimeLine() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      // Start progress when timeline enters viewport
      const start = viewportHeight * 0.45;

      // End progress when timeline reaches this point
      const end = viewportHeight * 0.55;

      const totalDistance = rect.height + start - end;

      const currentPosition = start - rect.top;

      let percentage = currentPosition / totalDistance;

      percentage = Math.max(0, Math.min(1, percentage));

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="w-full px-[8%] md:px-[12%] py-20">

      {/* Section heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">

        <p className="text-lg font-ovo mb-2">
          Timeline
        </p>

        <h2 className="text-4xl md:text-5xl font-ovo text-light-black">
          My Journey
        </h2>

        <p className="mt-5 leading-7 font-ovo text-md">
          From classrooms to building software at scale, here's a glimpse
          into my professional and academic journey.
        </p>

      </div>

      {/* Timeline */}
      <div
        ref={timelineRef}
        className="relative max-w-4xl mx-auto"
      >

        {/* ==============================
            BASE CONNECTOR
        =============================== */}

        <div
          className="
            absolute
            left-[15px]
            top-0
            bottom-0
            w-[2px]
            bg-gray-200
          "
        />

        {/* ==============================
            SCROLL PROGRESS CONNECTOR
        =============================== */}

        <div
          className="
            absolute
            left-[15px]
            top-4
            w-[2px]
            bg-gradient-to-b
            from-pink-600
            to-emerald-500
            transition-[height]
            duration-100
            ease-linear
          "
          style={{
            height: `${progress * 100}%`,
          }}
        />

        {timelineData.map((item, index) => {

          const isWork = item.type === "work";

          return (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              progress={progress}
              total={timelineData.length}
              isWork={isWork}
            />
          );
        })}

      </div>
    </section>
  );
}


/* =========================================
   TIMELINE ITEM
========================================= */

function TimelineItem({
  item,
  index,
  progress,
  total,
  isWork,
}) {
  const [showMore, setShowMore] = useState(false);

  const itemProgress =
    total === 1
      ? 1
      : index / (total - 1);

  const isActive = progress >= itemProgress - 0.15;

  const visiblePoints = showMore
    ? item.points
    : item.points.slice(0, 3);

  return (
    <div
      className="
        relative
        flex
        gap-6
        md:gap-10
        pb-14
      "
    >

      {/* DOT */}

      <div className="relative z-10 flex-shrink-0">

        <div
          className={`
            w-8
            h-8
            rounded-full
            border-4
            border-white
            flex
            items-center
            justify-center
            transition-all
            duration-500

            ${
              isActive
                ? isWork
                  ? "bg-dot-pink scale-110"
                  : "bg-dot-green scale-110 shadow-emerald-200"
                : "bg-gray-300"
            }
          `}
        >

          <div
            className={`
              w-2
              h-2
              rounded-full
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-white"
                  : "bg-gray-400"
              }
            `}
          />

        </div>

      </div>


      {/* CONTENT */}

      <div className="flex-1 -mt-1">

        {/* DATE */}

        <div className="mb-3">

          <span
            className={`
              inline-flex
              px-4
              py-1.5
              rounded-md
              text-sm
              font-semibold
              transition-all
              duration-500

              ${
                isActive
                  ? isWork
                    ? "border border-light-pink text-pink bg-background-pink"
                    : "border border-highlight-border text-green bg-background-green"
                  : "text-gray-500 bg-gray-100"
              }
            `}
          >
            {item.date}
          </span>

        </div>


        {/* TITLE */}

        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {item.title}
        </h3>


        {/* ORGANIZATION */}

        <p
          className={`
            mt-1
            text-lg
            font-medium
            font-ovo

            ${
              isWork
                ? "text-indigo-700"
                : "text-regular-green"
            }
          `}
        >
          {item.organization}
        </p>


        {/* LOCATION */}

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-800">

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

          <span>{item.location}</span>

        </div>


        {/* POINTS */}

        <div className="mt-4 max-w-2xl hover:bg-light text-justify">

          <ul className="space-y-2.5">

            {visiblePoints.map((point, pointIndex) => (

              <li
                key={pointIndex}
                className="flex gap-3 text-gray-900 leading-7"
              >

                <span
                  className={`
                    mt-3
                    w-1.5
                    h-1.5
                    rounded-full
                    flex-shrink-0
                    ${
                      isWork
                        ? "bg-pink-600 "
                        : "bg-emerald-500"
                    }
                  `}
                />

                <span>{point}</span>

              </li>

            ))}

          </ul>


          {/* SHOW MORE / LESS */}

          {item.points.length > 3 && (

            <button
              onClick={() => setShowMore(!showMore)}
              className={`
                mt-4
                text-sm
                font-semibold
                transition-colors
                hover:underline

                ${
                  isWork
                    ? "text-pink hover:text-pink-700"
                    : "text-emerald-600 hover:text-emerald-700"
                }
              `}
            >
              {showMore ? "Show less ↑" : "Show more ↓"}
            </button>

          )}

        </div>


        {/* HIGHLIGHTS */}

        {item.highlights && (

          <div className="mt-5 flex flex-wrap gap-2">

            {item.highlights.map((highlight, highlightIndex) => (

              <span
                key={highlightIndex}
                className="
                  text-sm
                  px-3
                  py-1.5
                  rounded-lg
                  bg-highlight
                  border
                  border-highlight-border
                  text-regular-green
                "
              >
                {highlight}
              </span>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}