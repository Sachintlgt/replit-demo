import { Card, CardContent } from "@/components/ui/card";

const exportProducts = [
  {
    name: "Sarson Ka Saag",
    description: "Mustard Leaves Curried: Pulp from mustard and spinach leaves cooked with garlic, ginger, green chilies. Perfect North Indian winter dish with ghee or butter tempering.",
    category: "Vegetarian - Export",
    storage: "Canned",
  },
  {
    name: "Rajma Curried",
    description: "Red Kidney Beans Curried: Simmered overnight with condiments and green spices. A homemade treat with boiled rice and warqi paranthas.",
    category: "Vegetarian - Export",
    storage: "Canned",
  },
  {
    name: "Pindi Channa",
    description: "Chick Peas Curried: White chick peas cooked over a low flame with special grounded spices. A great Punjabi treat.",
    category: "Vegetarian - Export",
    storage: "Canned",
  },
  {
    name: "Dal Makhani",
    description: "Whole black lentils and red kidney beans with butter/ghee, best with warqi parantha.",
    category: "Vegetarian - Export",
    storage: "Canned",
  },
  {
    name: "Palak Paneer",
    description: "Cottage Cheese in Spinach Sauce: Spinach and cottage cheese with spices.",
    category: "Vegetarian - Export",
    storage: "Canned",
  },
];

const franchiseProducts = [
  {
    name: "Zenkinss Special Veg. Wrap",
    description: "Cottage cheese simmered with butter and spicy vegetables.",
    category: "Rolls & Wraps",
    storage: "Frozen",
  },
  {
    name: "Mix Veg Wrap",
    description: "Mixed vegetables in tomato-onion gravy.",
    category: "Rolls & Wraps",
    storage: "Frozen",
  },
  {
    name: "Paneer Kathi Roll",
    description: "Flaky roll with fresh cottage cheese and spicy vegetables.",
    category: "Rolls & Wraps",
    storage: "Frozen",
  },
  {
    name: "Dal Makhani",
    description: "Black lentils and red kidney beans with butter/ghee.",
    category: "Gravies",
    storage: "Frozen",
  },
  {
    name: "Shahi Paneer",
    description: "Cottage cheese in rich tomato gravy.",
    category: "Gravies",
    storage: "Frozen",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our range of high-quality food products made with the finest
              ingredients, available for export and franchise.
            </p>
          </div>
        </div>
      </div>

      {/* Export Products */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
          Products for Export
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Ready to Heat 'n Eat, Shelf Life: 24 Months, Stored at Ambient Temperature, No Preservatives, 100% Natural, Vacuum Packed Canned Products
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {exportProducts.map((product) => (
            <Card key={product.name} className="group overflow-hidden">
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium">
                  {product.category}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  Storage: {product.storage}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Franchise Products */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Products for Franchise
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {franchiseProducts.map((product) => (
              <Card key={product.name} className="group overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium">
                    {product.category}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    Storage: {product.storage}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}