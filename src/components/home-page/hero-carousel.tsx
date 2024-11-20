"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  },
  {
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[50vh] min-h-[600px] w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}
