import { CityHighlights } from "@/components/home-page/city-highlights"
import { FeaturedTours } from "@/components/home-page/featured-tours"
import { Gallery } from "@/components/home-page/gallery"
import { HeroCarousel } from "@/components/home-page/hero-carousel"
import { SearchDestinations } from "@/components/home-page/search-destinations"
import { Testimonials } from "@/components/home-page/testimonials"

export default function IndexPage() {
  return (
    <div className="relative">
      <HeroCarousel />
      <div className="space-y-16 pb-16 md:space-y-24">
        <SearchDestinations />
        <CityHighlights />
        <FeaturedTours />
        <Testimonials />
        <Gallery />
      </div>
    </div>
  )
}
