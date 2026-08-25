const timelineData = [
  {
    date: "Apr 7, 2024",
    name: "Mark Mikrol",
    action: "opened the request",
    description:
      "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
    type: "start",
  },
  {
    date: "Apr 7, 2024",
    name: "John Mirkovic",
    action: "commented the request",
    description:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    type: "comment",
  },
  {
    date: "Apr 8, 2024",
    name: "Vlad Patterson",
    action: "commented the request",
    description:
      "Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Ipsum.",
    type: "comment",
  },
  {
    date: "Apr 8, 2024",
    name: "Mila Capentino",
    action: "commented the request",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    type: "comment",
  },
  {
    date: "Apr 9, 2024",
    name: "Mark Mikrol",
    action: "closed the request",
    description:
      "If you are going to use a passage of Lorem Ipsum!",
    type: "end",
  },
];

function TimelineIcon({ type }) {
  if (type === "start") {
    return (
      <svg
        className="fill-emerald-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
      </svg>
    );
  }

  if (type === "end") {
    return (
      <svg
        className="fill-red-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        className="fill-slate-300"
        d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
      />
      <path
        className="fill-slate-500"
        d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
      />
    </svg>
  );
}

export default function TimelineThree() {
  return (
    <section className="w-full px-[12%] py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo mb-2 text-indigo-500">
          My Journey
        </h4>

        <h2 className="text-4xl font-ovo">
          Activity Timeline
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          A chronological view of important events.
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-3xl mx-auto">
        <div
          className="
            space-y-8
            relative

            before:absolute
            before:inset-0
            before:ml-5
            before:-translate-x-px

            md:before:ml-[8.75rem]
            md:before:translate-x-0

            before:h-full
            before:w-0.5

            before:bg-gradient-to-b
            before:from-transparent
            before:via-slate-300
            before:to-transparent
          "
        >
          {timelineData.map((item, index) => (
            <div key={index} className="relative">
              {/* Header */}
              <div className="md:flex items-center md:space-x-4 mb-3">
                <div className="flex items-center space-x-4 md:space-x-2">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-full
                      bg-white
                      shadow
                      shrink-0
                      z-10
                    "
                  >
                    <TimelineIcon type={item.type} />
                  </div>

                  {/* Date */}
                  <time className="font-medium text-lg text-indigo-500 md:w-28">
                    {item.date}
                  </time>
                </div>

                {/* Title */}
                <div className="text-slate-500 ml-14 md:ml-0">
                  <span className="text-slate-900 font-bold">
                    {item.name}
                  </span>{" "}
                  {item.action}
                </div>
              </div>

              {/* Description */}
              <div
                className="
                  bg-white
                  p-4
                  rounded
                  border
                  border-slate-200
                  text-slate-500
                  shadow

                  ml-14
                  md:ml-44
                "
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}