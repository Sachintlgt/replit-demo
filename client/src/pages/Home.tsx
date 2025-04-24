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
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6">
              FACTS ABOUT CANNING AND PROCESSED FOOD!
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Zenkinns is here to debunk all your myths and predispositions regarding these topics.
            </p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WHAT IS PROCESSED FOOD?</h3>
                <p className="text-gray-600">
                  Everything Is a Process! In the strictest definition of the term, anything you do to change a food's original form constitutes "processing." Food Insight, a food-industry information website, points out that foods have been "processed" by cooking, drying, salting, smoking and pickling since prehistoric times. Usually these techniques are used to either make a food safe to eat or to preserve a food so it remains edible for longer. Longevity and food safety are worthy goals, and the modern-day industry is remarkably good at them.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WHAT IS CANNING?</h3>
                <p className="text-gray-600">
                  A simple process of preserving processed food for a longer duration of time without losing its essential ingredients and nutrition value.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">CANNED FOOD?</h4>
                <p className="text-gray-600">
                  Food sterilized by heat in a closed, durable container such as tin and aluminum containers. Preserving the goodness with canning: easy handling, fast filling with low spoilage makes cans a natural choice for streamlined cost-efficient production & reliable distribution. Because food lasts longer at an ambient temperature and can be used as needed, there is considerably less waste & more delight for the customer.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ZENKINNS is here to debunk the myths!</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                  <li>Canned food is readily available, simple to store and easy on the budget. But there are a number of myths about canned foods that are being passed around and these myths can be easily confused with facts.</li>
                  <li>These myths sometimes make people think twice about whether or not canned food is the best choice as a method of preserving and consuming food.</li>
                  <li>We, at ZENKINNS want to hold the baton for this amazing innovative industry and are here to set the record straight!</li>
                  <li>We reveal the top myths about canned food in general, followed by the myths and facts about canning your own food. All of this will then be put into the context of prepping and long-term storage of canned foods.</li>
                </ul>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fact #1: Canned foods are NOT loaded with preservatives</h4>
                    <p className="text-gray-600">The process of canning makes the use of preservatives unnecessary. Canned food is heated to a high enough temperature and pressure that kills any bacteria that would pose a threat. There is nothing added to the food other than desired sweeteners or seasoning. As the food is canned, an airtight seal is formed that keeps bacteria out and freshness in.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fact #2: Canned Foods are not nutritious compared to fresh or frozen</h4>
                    <p className="text-gray-600">It's definitely true that the most nutritious food is fresh food. The sooner it is eaten after being harvested or killed, the higher the nutritional content of the food. Cooking can also cause some nutritional losses from some foods. However, canned foods, particularly those that are canned close to harvest, retain the majority of their nutrients. Canned foods retain their full fiber and protein content, effects on carbohydrates and fatty acids are negligible, and there are only minor losses to some vitamins. In fact, canning some fruits and vegetables increases their nutritional impact.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fact #3: Canned foods are Processed foods</h4>
                    <p className="text-gray-600">If you think about it, as soon as you cook any food, you are processing it. Roasting a chicken, boiling potatoes, baking bread are all methods of processing the food into a form in which we can/prefer to eat it. Canned foods are really no more processed than regular cooked foods. The primary difference is that they are cooked at higher temperatures and pressures and then vacuum-sealed.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fact #4: Canned foods taste bad!</h4>
                    <p className="text-gray-600">Let's face it. The taste of a can of peaches is delightful. Yum! Similarly, is the taste of cooked Rajma (red beans). Canned foods, when canned at the height of ripeness and soon after harvest or cooking process, retain their flavor at least until their expiry date and longer if properly stored in cool, dry environment.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fact #5: Canned foods have high sodium content</h4>
                    <p className="text-gray-600">It's true that canned foods often have salt in them. However, this is not required for the canning and preservation of these foods. Salt is added simply for the benefit of flavor in just the same way you would add salt to your French fries or a bowl of soup. There are plenty of low-sodium options when it comes to canned foods.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
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