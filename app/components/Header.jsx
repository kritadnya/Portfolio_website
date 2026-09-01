"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [showResume, setShowResume] = useState(false);

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

        {/* Profile image */}
        <div>
          <Image
            src={assets.profile_img}
            alt="Kritadnya"
            className="rounded-full w-32"
          />
        </div>


        {/* Greeting */}
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          Hi! I'm Kritadnya

          <Image
            src={assets.hand_icon}
            alt=""
            className="w-6"
          />
        </h3>


        {/* Heading */}
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo text-light-black">
          Fullstack developer based in Bengaluru.
        </h1>


        {/* Description */}
        <p className="max-w-2xl text-xl mx-auto font-ovo">
          I'm a software developer with 2 years of experience in fullstack
          development. Currently working at Hewlett Packard Enterprise.
        </p>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

          {/* Contact */}
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            Contact me

            <Image
              src={assets.right_arrow_white}
              alt=""
              className="w-4"
            />
          </a>


          {/* Preview Resume */}
          <button
            onClick={() => setShowResume(true)}
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition duration-300"
          >
            Preview Resume

            <Image
              src={assets.download_icon}
              alt=""
              className="w-4"
            />
          </button>

        </div>


        {/* ==============================
            SOCIAL LINKS
        =============================== */}

        <nav className="mt-8">

          <div className="flex justify-center gap-5">

            {/* LinkedIn */}
            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-purple-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM3.555 20.452h3.558V8.999H3.555v11.453z" />
              </svg>
            </a>


            {/* GitHub */}
            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 hover:text-purple-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 .297a12 12 0 0 0-3.79 23.387c.6.113.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.435.375.81 1.096.81 2.21v3.285c0 .315.21.694.825.576A12.003 12.003 0 0 0 12 .297z" />
              </svg>
            </a>


            {/* Email */}
            <a
              href="mailto:kritadnyakk@gmail.com"
              aria-label="Email"
              className="text-gray-700 hover:text-purple-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>

          </div>

        </nav>

      </div>


      {/* =====================================
          RESUME PREVIEW MODAL
      ====================================== */}

      {showResume && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowResume(false)}
        >

          {/* Modal */}
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="h-16 px-5 flex items-center justify-between border-b border-gray-200 bg-white">

              <h2 className="text-lg font-semibold text-gray-900">
                My Resume
              </h2>


              <div className="flex items-center gap-3">

                {/* Download button */}
                <a
                  href="/Kritadnya_resume.pdf"
                  download="Kritadnya_Resume.pdf"
                  className="hidden sm:block px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-black/80 transition"
                >
                  Download
                </a>


                {/* Close button */}
                <button
                  onClick={() => setShowResume(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition text-xl"
                  aria-label="Close resume"
                >
                  ×
                </button>

              </div>

            </div>


            {/* PDF */}
            <div className="w-full h-[calc(90vh-4rem)] bg-gray-100">

              <iframe
                src="/Kritadnya_resume.pdf"
                className="w-full h-full"
                title="Kritadnya Resume"
              />

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Header;