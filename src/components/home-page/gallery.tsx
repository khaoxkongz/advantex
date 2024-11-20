import Image from "next/image"

import BlurFade from "@/components/ui/blur-fade"

const images = [
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
  "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
  "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
  "https://images.unsplash.com/photo-1731082417879-710ff0c868ae",
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801",
]

export const Gallery = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Captured Moments</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A glimpse into the extraordinary experiences that await you on your
          next adventure
        </p>
      </div>

      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 w-full rounded-lg object-cover"
              src={imageUrl}
              height={2977}
              width={3951}
              alt={`Travel moment ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
