import Image from "next/image"
import { Clock, Star, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const tours = [
  {
    id: 1,
    title: "Bali Paradise Explorer",
    description: "10 days of tropical adventure",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 2499,
    rating: 4.8,
    duration: "10 days",
    groupSize: "12 max",
    featured: true,
  },
  {
    id: 2,
    title: "Japanese Culture Tour",
    description: "Experience ancient traditions",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 3299,
    rating: 4.9,
    duration: "12 days",
    groupSize: "10 max",
    featured: true,
  },
  {
    id: 3,
    title: "Greek Islands Cruise",
    description: "Island hopping adventure",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    price: 1999,
    rating: 4.7,
    duration: "8 days",
    groupSize: "15 max",
    featured: true,
  },
]

export const FeaturedTours = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
          Featured Tour Packages
        </h2>
        <p className="mx-auto max-w-2xl px-4 text-muted-foreground">
          Discover our most popular adventures, carefully curated for
          unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            className="group transition-shadow hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                height={2977}
                width={3951}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Badge className="absolute right-4 top-4">Featured</Badge>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{tour.title}</CardTitle>
              <CardDescription>{tour.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center">
                  <Star className="mr-1 size-4 text-yellow-400" />
                  <span>{tour.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 size-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 size-4" />
                  <span>{tour.groupSize}</span>
                </div>
              </div>
              <p className="text-xl font-bold sm:text-2xl">
                ${tour.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /person
                </span>
              </p>
            </CardContent>

            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
