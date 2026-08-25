const timelineData = [
  {
    date: "08/06/2023",
    title: "Order Placed",
    description:
      "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    active: true,
  },
  {
    date: "09/06/2023",
    title: "Order Shipped",
    description:
      "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    active: true,
  },
  {
    date: "10/06/2023",
    title: "In Transit",
    description:
      "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    active: true,
  },
  {
    date: "12/06/2023",
    title: "Out of Delivery",
    description:
      "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    active: true,
  },
  {
    date: "12/08/2023",
    title: "Delivered",
    description:
      "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.",
    active: false,
  },
];

export default function OrderPlacementTimeline() {
  return (
    <section className="w-full px-[12%] py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo mb-2 text-indigo-500">
          My Journey
        </h4>

        <h2 className="text-4xl font-ovo">
          Timeline
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          A timeline of important milestones and events.
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

            md:before:mx-auto
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
            <div
              key={index}
              className={`
                relative
                flex
                items-center
                justify-between
                md:justify-normal

                md:odd:flex-row-reverse
                group
              `}
            >
              {/* Circle / Icon */}
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white
                  shadow
                  shrink-0
                  z-10

                  md:order-1

                  md:group-odd:-translate-x-1/2
                  md:group-even:translate-x-1/2

                  ${
                    item.active
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-300 text-slate-600"
                  }
                `}
              >
                {item.active ? (
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                  </svg>
                )}
              </div>

              {/* Card */}
              <div
                className="
                  w-[calc(100%-4rem)]
                  md:w-[calc(50%-2.5rem)]

                  bg-white
                  p-4
                  rounded
                  border
                  border-slate-200
                  shadow
                "
              >
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">
                    {item.title}
                  </div>

                  <time className="text-sm font-medium text-indigo-500">
                    {item.date}
                  </time>
                </div>

                <div className="text-slate-500 text-sm">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}