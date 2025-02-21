import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover Our Story
              <span className="text-primary"> at Zenkinns</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ZEN means 'A state of well-being' and KINNS means 'People'. We at Zenkinns are in the business of spreading happiness with every bite among people.
            </p>
            <div className="mt-10 flex gap-x-6">
              <Button asChild size="lg">
                <Link href="/products">View Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Values
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Zenkinns believes in stringent in-house manufacturing processes, right from choosing the best of ingredients to hygienic handling, packaging, and delivery of the final product.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Quality First",
              description: "Nutrition forms the core of our pride in choosing the freshest of ingredients, ensuring freshness through our manufacturing process.",
              image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
            },
            {
              title: "Manufacturing Excellence",
              description: "State-of-the-art facilities and stringent quality control processes ensure the best product quality.",
              image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
            },
            {
              title: "Food Safety",
              description: "Our canning process eliminates the need for preservatives while maintaining product freshness and safety.",
              image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={value.image}
                  alt={value.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
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
              title: "Premium Snacks",
              image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
            },
            {
              title: "Organic Foods",
              image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
            },
            {
              title: "Fresh Produce",
              image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606",
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
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {product.title}
              </h3>
            </div>
          ))}
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