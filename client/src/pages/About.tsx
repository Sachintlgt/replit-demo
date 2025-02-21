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
              ZEN means 'A state of well-being' and KINNS means 'People'. We are in the business of spreading happiness with every bite among people.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a Mega Manufacturing Food facility located amidst the scenic foothills of the Shivalik Mountain Ranges in the Industrial town of Baddi, Himachal Pradesh. Our core competency lies in manufacturing vegetarian and non-vegetarian food products in state-of-the-art packaging formats – cans/tins, retort pouches, and microwaveable trays.
            </p>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
              alt="Our facility"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To CREATE A FOOD CONSCIOUS SOCIETY – one that is aware of the SOURCE STORY of their food and knows the REAL NUTRITION value of its contents.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To put a SMILE ON EVERY FACE that tries our product. For this, we have been INCESSANTLY INNOVATING AND INVENTING our food offerings through different ingredients, concoctions, techniques, and cuisines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
          Leadership
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rakesh Bhutani</h3>
            <p className="text-sm text-primary font-medium mb-4">Founder</p>
            <p className="text-gray-600">
              Carries forward his family's legacy in the food manufacturing business. With deep-rooted passion, he expanded into the ready-to-eat (RTE) market.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hitesh Bhutani</h3>
            <p className="text-sm text-primary font-medium mb-4">Export Management</p>
            <p className="text-gray-600">
              A graduate in Export Management, oversees Zenkinns' export operations and managerial aspects, ensuring quality and commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              <a href="mailto:zenkinns@gmail.com" className="text-primary hover:underline">
                zenkinns@gmail.com
              </a>
              {" | "}
              <span>01795-271127</span>
            </p>
            <p className="mt-4 text-lg text-gray-600">
              1-J EPIP, Phase 1, Jharmajri, Baddi, Distt. Solan, H.P. 174103
            </p>
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