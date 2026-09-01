"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { dailyRoutine } from "@/assets/assets";

function AnimatedNumber({ value, duration = 900 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = Number(value);

    if (isNaN(target)) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);

  }, [value, duration]);

  return <>{count}</>;
}

export default function DailyRoutine() {
  return (
    <section className="w-full px-[8%] md:px-[12%] py-20 bg-blue-50">

      {/* =========================
          HEADING
      ========================== */}

      <div className="text-center mb-14">

        <p className="text-xl text-gray-900 font-ovo mb-2">
          A little glimpse into my routine
        </p>

        <h2 className="text-4xl md:text-4xl font-ovo text-light-black">
          How I Spend My Day
        </h2>

        <p className='text-center text-lg max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
          I'm a curious person with a lot of hobbies and interests!
        </p>

      </div>


      {/* =========================
          DAILY ROUTINE
      ========================== */}

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">

          {dailyRoutine.map((item, index) => (

            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                text-center
                group
              "
            >

              {/* =========================
                  IMAGE
              ========================== */}

              <div
                className="
                  relative
                  w-20
                  h-21
                  mb-5
                  
                  overflow-hidden
                  
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >

                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="90px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-gray-300 text-lg">
                    +
                  </span>
                )}

              </div>


              {/* =========================
                  ANIMATED NUMBER
              ========================== */}

              <div
                className="
                  text-xl
                  md:text-4xl
                  
                  text-gray-900
                  tabular-nums
                "
              >
                <AnimatedNumber value={item.time} />
              </div>


              {/* =========================
                  DESCRIPTION
              ========================== */}

              <p
                className="
                  mt-3
                  text-sm
                  md:text-base
                  text-black
                  leading-6
                  max-w-[180px]
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}