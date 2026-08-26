import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="w-full px-[8%] md:px-[12%] py-10 scroll-mt-20"
    >
      <footer className="bg-base-200 text-base-content rounded-2xl p-10">

        {/* Navigation */}
        <nav className="grid grid-flow-col gap-6 justify-center">
          <a href="#about" className="link link-hover">
            About
          </a>
 <a href="#projects" className="link link-hover">
            Projects
          </a>
          <a href="#experience" className="link link-hover">
            Experience
          </a>

         

          <a href="#contact" className="link link-hover">
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <nav className="mt-8">
          <div className="flex justify-center gap-5">

            {/* LinkedIn */}
            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM3.555 20.452h3.558V8.999H3.555v11.453z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-600 transition"
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
              href="mailto:YOUR_EMAIL@gmail.com"
              aria-label="Email"
              className="hover:text-purple-600 transition"
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

        {/* Divider */}
        <div className="border-t border-gray-300 my-8" />

        {/* Copyright */}
        <aside className="text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Kritadnya. All rights reserved.
          </p>

          <p className="mt-1">
            Built with Next.js, React & Tailwind CSS.
          </p>
        </aside>

      </footer>
    </div>
  );
};

export default Footer;