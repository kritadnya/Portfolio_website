import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Landing page background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={assets.home_page}
          alt=""
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>

      {/* Optional fade */}
      <div className="absolute inset-0 -z-10 bg-white/50" />

      {/* Header content */}
      <div className="relative z-10 w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4">

        <div>
          <Image
            src={assets.profile_img}
            alt="Kritadnya"
            className="rounded-full w-32"
          />
        </div>

        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          Hi! I'm Kritadnya
          <Image
            src={assets.hand_icon}
            alt=""
            className="w-6"
          />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
          Fullstack developer based in Bengaluru.
        </h1>

        <p className="max-w-2xl text-xl mx-auto font-ovo">
          I'm a software developer with 2 years of experience in fullstack
          development. Currently working at Hewlett Packard Enterprise.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me

            <Image
              src={assets.right_arrow_white}
              alt=""
              className="w-4"
            />
          </a>

          <a
            href="/Kritadnya_resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume

            <Image
              src={assets.download_icon}
              alt=""
              className="w-4"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Header;