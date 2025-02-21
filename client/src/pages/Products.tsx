import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Premium Snacks",
    description: "High-quality snacks made with natural ingredients",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    category: "Snacks",
  },
  {
    name: "Organic Grains",
    description: "Certified organic grains sourced from trusted farmers",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    category: "Grains",
  },
  {
    name: "Fresh Produce",
    description: "Farm-fresh vegetables and fruits",
    image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606",
    category: "Produce",
  },
  {
    name: "Artisan Breads",
    description: "Freshly baked artisanal breads",
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5",
    category: "Bakery",
  },
  {
    name: "Premium Dairy",
    description: "High-quality dairy products",
    image: "https://images.unsplash.com/photo-1464306208223-e0b4495a5553",
    category: "Dairy",
  },
  {
    name: "Specialty Foods",
    description: "Unique and specialty food items",
    image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6",
    category: "Specialty",
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
              ingredients.
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium">
                    {product.category}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
