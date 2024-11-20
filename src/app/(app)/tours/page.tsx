"use client"

import * as React from "react"
import { LayoutGrid, List, Search, SlidersHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TourCard } from "@/components/tours-page/tour-card"
import {
  TourFilters,
  type FilterState,
} from "@/components/tours-page/tour-filters"

const tours = [
  {
    id: "1",
    title: "Bali Paradise Explorer",
    description:
      "10 days of tropical adventure through pristine beaches and ancient temples",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 2499,
    rating: 4.8,
    duration: "10 days",
    groupSize: "12 max",
    featured: true,
    location: "Asia",
    difficulty: "Easy",
  },
  {
    id: "2",
    title: "Japanese Culture Tour",
    description:
      "Experience ancient traditions and modern wonders in the Land of the Rising Sun",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 3299,
    rating: 4.9,
    duration: "12 days",
    groupSize: "10 max",
    featured: true,
    location: "Asia",
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Greek Islands Cruise",
    description:
      "Island hopping adventure through the crystal-clear waters of the Aegean Sea",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    price: 1999,
    rating: 4.7,
    duration: "8 days",
    groupSize: "15 max",
    featured: true,
    location: "Europe",
    difficulty: "Easy",
  },
  {
    id: "4",
    title: "Machu Picchu Trek",
    description:
      "Journey through the ancient Inca Trail to the mystical citadel",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    price: 2799,
    rating: 4.9,
    duration: "7 days",
    groupSize: "8 max",
    featured: false,
    location: "South America",
    difficulty: "Hard",
  },
  {
    id: "5",
    title: "African Safari Adventure",
    description:
      "Witness the incredible wildlife of the Serengeti and Masai Mara",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: 4299,
    rating: 4.8,
    duration: "14 days",
    groupSize: "6 max",
    featured: true,
    location: "Africa",
    difficulty: "Medium",
  },
  {
    id: "6",
    title: "New Zealand Nature Explorer",
    description: "Discover the stunning landscapes of Middle Earth",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    price: 3799,
    rating: 4.6,
    duration: "15 days",
    groupSize: "10 max",
    featured: false,
    location: "Oceania",
    difficulty: "Medium",
  },
]

type ViewMode = "grid" | "list"

export default function TourPackages() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filters, setFilters] = React.useState<FilterState>({
    priceRange: [0, 5000],
    location: "all-locations",
    difficulty: "all-difficulties",
  })

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice =
      tour.price >= filters.priceRange[0] && tour.price <= filters.priceRange[1]
    const matchesLocation =
      filters.location === "all-locations" || tour.location === filters.location
    const matchesDifficulty =
      filters.difficulty === "all-difficulties" ||
      tour.difficulty === filters.difficulty

    return matchesSearch && matchesPrice && matchesLocation && matchesDifficulty
  })

  return (
    <article className="container mx-auto p-4">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-3xl font-bold">Tour Packages</h1>

        <div className="flex w-full items-center gap-4 md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search tours..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Tours</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <TourFilters filters={filters} setFilters={setFilters} />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex gap-1 rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-none", viewMode === "grid" && "bg-muted")}
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-none", viewMode === "list" && "bg-muted")}
              onClick={() => setViewMode("list")}
            >
              <List className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Desktop Filters */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-24 rounded-lg border bg-white p-6">
            <h2 className="mb-6 font-semibold">Filters</h2>
            <TourFilters filters={filters} setFilters={setFilters} />
          </div>
        </aside>

        {/* Tour Grid */}
        <div className="flex-1">
          <div
            className={cn(
              "grid gap-6",
              viewMode === "grid"
                ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1"
            )}
          >
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
