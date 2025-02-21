export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Zenkinns
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're dedicated to bringing quality food products to tables around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 1995, Zenkinns has grown from a small family business to a
              leading producer of quality food products. Our commitment to excellence
              and innovation has helped us expand our reach while maintaining the
              highest standards of quality.
            </p>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
              alt="Our team"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Values
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quality",
                  description:
                    "We never compromise on the quality of our ingredients and products.",
                },
                {
                  title: "Innovation",
                  description:
                    "Constantly improving our products and processes to serve you better.",
                },
                {
                  title: "Sustainability",
                  description:
                    "Committed to environmentally responsible production methods.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Our Team
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              name: "Production",
            },
            {
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
              name: "Quality Control",
            },
            {
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
              name: "Research",
            },
          ].map((member) => (
            <div key={member.name} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}