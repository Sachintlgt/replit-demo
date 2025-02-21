import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Franchise() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Franchise Opportunities
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our successful network of franchise partners and build your own
              business with our proven model.
            </p>
            <div className="mt-10">
              <Button size="lg">Request Information</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Why Choose Our Franchise
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Proven Business Model",
              description:
                "Benefit from our years of experience and established systems in the food industry",
            },
            {
              title: "Comprehensive Training",
              description:
                "Get thorough training in food preparation, management, and operations with ongoing support",
            },
            {
              title: "Quality Products",
              description:
                "Access to our complete range of high-quality vegetarian and non-vegetarian products",
            },
            {
              title: "Marketing Support",
              description:
                "Professional marketing materials and campaigns to help grow your business",
            },
            {
              title: "Established Brand",
              description:
                "Leverage our respected brand name and market presence in the food industry",
            },
            {
              title: "Territory Protection",
              description:
                "Exclusive territory rights to build and grow your business",
            },
          ].map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Franchise Product Categories
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Ready-to-Eat Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Rolls & Wraps
                      <ul className="list-disc pl-8 mt-2">
                        <li>Zenkinss Special Veg Wrap</li>
                        <li>Mix Veg Wrap</li>
                        <li>Paneer Kathi Roll</li>
                      </ul>
                    </li>
                    <li>Gravies
                      <ul className="list-disc pl-8 mt-2">
                        <li>Dal Makhani</li>
                        <li>Shahi Paneer</li>
                        <li>Mixed Vegetable Curried</li>
                      </ul>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Initial setup assistance</li>
                    <li>Staff training programs</li>
                    <li>Quality control systems</li>
                    <li>Inventory management</li>
                    <li>Marketing and promotions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Information */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Investment Overview
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Initial Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Franchise fee</li>
                <li>Equipment and inventory</li>
                <li>Store build-out</li>
                <li>Initial marketing</li>
                <li>Working capital</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ongoing Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Operational guidance</li>
                <li>Marketing assistance</li>
                <li>Product development</li>
                <li>Technical support</li>
                <li>Training programs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}