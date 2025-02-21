import { Card, CardContent } from "@/components/ui/card";

export default function Exports() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Global Exports
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Delivering quality food products to markets worldwide with our established
              export network.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Our Export Facilities
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: "https://images.unsplash.com/photo-1705848533968-0d6bc12989f1",
              title: "Modern Warehousing",
              description:
                "State-of-the-art storage facilities ensuring product quality",
            },
            {
              image: "https://images.unsplash.com/photo-1723248691678-fb5c161076ec",
              title: "Quality Control",
              description:
                "Rigorous quality checks at every stage of the export process",
            },
            {
              image: "https://images.unsplash.com/photo-1735713212182-0e34797837cd",
              title: "Global Distribution",
              description:
                "Efficient distribution network reaching markets worldwide",
            },
          ].map((facility) => (
            <Card key={facility.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Export Markets */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Export Markets
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: "North America", countries: "USA, Canada" },
              { region: "Europe", countries: "UK, Germany, France" },
              { region: "Asia Pacific", countries: "Japan, South Korea, Australia" },
              { region: "Middle East", countries: "UAE, Saudi Arabia" },
            ].map((market) => (
              <div
                key={market.region}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {market.region}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{market.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
