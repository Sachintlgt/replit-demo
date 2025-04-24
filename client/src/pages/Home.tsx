import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[600px] w-full overflow-hidden">
          <img
            src="/attached_assets/Banner.jpeg"
            alt="Zenkinns Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Discover Our Story
                  <span className="text-primary"> at Zenkinns</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  ZEN means 'A state of well-being' and KINNS means 'People'. We at Zenkinns are in the business of spreading happiness with every bite among people.
                </p>
                <div className="mt-10 flex gap-x-6">
                  <Button asChild size="lg">
                    <Link href="/products">View Products</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Our Values
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
          We are committed to delivering excellence through our core values that shape everything we do.
        </p>
        <div className="mt-16 flex justify-center">
          <div className="relative w-[600px] h-[600px]">
            {[
              { title: "Quality", angle: 0 },
              { title: "Nutrition", angle: 120 },
              { title: "Sustainability", angle: 240 },
            ].map((value, index) => (
              <div
                key={value.title}
                className="absolute w-48 h-48 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${50 + 40 * Math.cos((value.angle * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((value.angle * Math.PI) / 180)}%`,
                }}
              >
                <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 border-2 border-primary">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center">Zenkinns Values</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Featured Products
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Sarson Ka Saag",
              description: "Traditional mustard leaves curried with spinach, perfect North Indian winter dish.",
              image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
              category: "Export Products",
            },
            {
              title: "Zenkinss Special Veg. Wrap",
              description: "Cottage cheese simmered with butter and spicy vegetables in a flaky wrap.",
              image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
              category: "Franchise Products",
            },
            {
              title: "Dal Makhani",
              description: "Whole black lentils and red kidney beans with butter/ghee, a classic comfort food.",
              image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606",
              category: "Export & Franchise",
            },
          ].map((product) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-primary font-medium">{product.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Food Safety Section */}
      <section className="bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Facts About Our Food Processing
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Our canned foods are not loaded with preservatives. The process of canning makes the use of preservatives unnecessary. The food is heated to a high enough temperature and pressure that kills bacteria, while the airtight seal keeps bacteria out and freshness in.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}