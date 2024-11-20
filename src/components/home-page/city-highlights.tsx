import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

const cities = [
  {
    name: "上海 Shanghai",
    description: "Experience the blend of modern and traditional",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403",
    href: "/destinations/shanghai",
  },
  {
    name: "北京 Beijing",
    description: "Discover ancient history and culture",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
    href: "/destinations/beijing",
  },
  {
    name: "成都 Chengdu",
    description: "Home of pandas and spicy cuisine",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403",
    href: "/destinations/chengdu",
  },
  {
    name: "西安 Xi'an",
    description: "Ancient capital with terracotta warriors",
    image: "https://images.unsplash.com/photo-1561387809-9117e4e5b52c",
    href: "/destinations/xian",
  },
  {
    name: "杭州 Hangzhou",
    description: "Paradise on earth with West Lake",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403",
    href: "/destinations/hangzhou",
  },
  {
    name: "杭州 Hangzhou1",
    description: "Paradise on earth with West Lake",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403",
    href: "/destinations/hangzhou",
  },
]

export const CityHighlights = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          城市亮点 City Highlights
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Explore the vibrant cities of China, each offering unique experiences
          and cultural treasures
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
        {/* Left side - 6 columns */}
        <div className="grid gap-4 md:col-span-6">
          {/* Top wide card */}
          <Link href={cities[0].href}>
            <Card className="group overflow-hidden">
              <CardContent className="relative aspect-[16/9] p-0 sm:aspect-[3/2]">
                <Image
                  src={cities[0].image}
                  alt={cities[0].name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="mb-1 font-semibold">{cities[0].name}</h3>
                  <p className="text-sm text-white/90">
                    {cities[0].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Bottom two cards */}
          <div className="grid grid-cols-2 gap-4">
            {cities.slice(1, 3).map((city) => (
              <Link key={city.name} href={city.href}>
                <Card className="group overflow-hidden">
                  <CardContent className="relative p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="mb-1 font-semibold">{city.name}</h3>
                        <p className="text-sm text-white/90">
                          {city.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - 6 columns */}
        <div className="grid h-full grid-cols-2 gap-4 md:col-span-6">
          {/* Left tall card */}
          <Link href={cities[3].href} className="h-full">
            <Card className="group h-full overflow-hidden">
              <CardContent className="relative h-full p-0">
                <div className="relative h-full">
                  <Image
                    src={cities[3].image}
                    alt={cities[3].name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="mb-1 font-semibold">{cities[3].name}</h3>
                    <p className="text-sm text-white/90">
                      {cities[3].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Right stacked cards */}
          <div className="grid h-full gap-4">
            {[cities[4], cities[5]].map((city) => (
              <Link key={city.name} href={city.href} className="h-full">
                <Card className="group h-full overflow-hidden">
                  <CardContent className="relative h-full p-0">
                    <div className="relative h-full">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="mb-1 font-semibold">{city.name}</h3>
                        <p className="text-sm text-white/90">
                          {city.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
