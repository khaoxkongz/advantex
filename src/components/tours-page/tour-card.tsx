import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star, Users } from "lucide-react"

import { cn } from "@/lib/utils"
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

interface Tour {
  id: string
  title: string
  description: string
  image: string
  price: number
  rating: number
  duration: string
  groupSize: string
  featured: boolean
  location: string
  difficulty: string
}

interface TourCardProps {
  tour: Tour
  viewMode: "grid" | "list"
}

export const TourCard = ({ tour, viewMode }: TourCardProps) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-shadow hover:shadow-lg",
        viewMode === "list" && "flex flex-col md:flex-row"
      )}
    >
      <div
        className={cn("relative", viewMode === "list" ? "md:w-1/3" : "w-full")}
      >
        <Image
          src={tour.image}
          alt={tour.title}
          height={2977}
          width={3951}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {tour.featured && (
          <Badge className="absolute right-4 top-4">Featured</Badge>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          viewMode === "list" && "md:max-w-2xl"
        )}
      >
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{tour.location}</span>
            <Badge variant="secondary">{tour.difficulty}</Badge>
          </div>
          <CardTitle className="text-xl">{tour.title}</CardTitle>
          <CardDescription>{tour.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="mb-4 flex flex-wrap items-center gap-4">
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
          <p className="text-2xl font-bold">
            ${tour.price}
            <span className="text-sm font-normal text-muted-foreground">
              /person
            </span>
          </p>
        </CardContent>

        <CardFooter
          className={cn(
            "mt-auto space-x-2",
            viewMode === "list" && "md:justify-end"
          )}
        >
          <Button asChild>
            <Link href={`/tours/${tour.id}`}>Book Now</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
