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
              Export Opportunities
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Zenkinns is bridging the gap by providing a full range of vegetarian and non-vegetarian menus for the global market.
            </p>
            <div className="mt-10">
              <Button size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Market Advantages */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Strategic Advantages
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Geographical Advantage",
              description:
                "India's strategic location provides unique connectivity to Europe, the Middle East, Japan, Singapore, Thailand, Malaysia, and Korea.",
            },
            {
              title: "Growing Market",
              description:
                "The value of trade in agriculture and processed food between India and the Gulf region reached $41.55 billion in 2018-2019.",
            },
            {
              title: "Market Demand",
              description:
                "Large Indian diaspora in the Gulf region creates massive demand for Indian cuisine, which Zenkinns fulfills with our diverse menu.",
            },
            {
              title: "Dedicated Export Team",
              description:
                "Our dedicated team oversees Export management, successfully covering the UAE region with plans for expansion to other countries.",
            },
            {
              title: "Quality Assurance",
              description:
                "Our canned sterilization technique ensures hygienic processing with temperature and pressure control, maintaining product freshness.",
            },
            {
              title: "Global Reach",
              description:
                "Canned products enable efficient logistics and deliver authentic Indian taste anywhere in the world.",
            },
          ].map((advantage) => (
            <Card key={advantage.title}>
              <CardHeader>
                <CardTitle>{advantage.title}</CardTitle>
                <CardDescription>{advantage.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Quality Process */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Quality Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our canned sterilization technique is an extremely hygienic, temperature and pressure controlled process that helps in retaining the freshness of our food products. Our value system guides us in focusing on the quality of products and manufacturing processes.
            </p>
            <div className="mt-10">
              <Card>
                <CardHeader>
                  <CardTitle>Food Processing Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Temperature and pressure controlled sterilization</li>
                    <li>Hygienic processing environment</li>
                    <li>Freshness retention technology</li>
                    <li>Efficient logistics system</li>
                    <li>Quality-focused value system</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Export Categories */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Export Categories
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Vegetarian Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Traditional Indian curries</li>
                <li>Legume-based dishes</li>
                <li>Paneer specialties</li>
                <li>Rice preparations</li>
                <li>Indian desserts</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>24-month shelf life</li>
                <li>Ambient temperature storage</li>
                <li>No preservatives</li>
                <li>100% natural ingredients</li>
                <li>Vacuum packed canning</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}