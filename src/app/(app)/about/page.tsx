import * as React from "react"
import Image from "next/image"
import { Award, Globe2, Heart, Users } from "lucide-react"

import BlurFade from "@/components/ui/blur-fade"

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Happy Travelers",
  },
  {
    icon: Globe2,
    value: "100+",
    label: "Destinations",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Satisfaction Rate",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "With over 15 years in the travel industry, Sarah founded Wanderlust with a vision to create meaningful travel experiences.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Michael ensures every trip runs smoothly, from planning to execution, with his extensive background in travel logistics.",
  },
  {
    name: "Emma Wilson",
    role: "Lead Travel Curator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Emma's passion for discovering hidden gems and authentic experiences helps create unforgettable journeys for our clients.",
  },
]

export default function AboutPage() {
  return (
    <article>
      {/* Hero Section */}
      <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative px-4 text-center text-white">
          <BlurFade>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              Creating unforgettable travel experiences since 2009
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <BlurFade key={idx} delay={0.1 * idx}>
                <div className="text-center">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="size-6" />
                  </div>
                  <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade>
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Wanderlust, we believe travel has the power to transform
                lives. Our mission is to create authentic, sustainable, and
                unforgettable travel experiences that connect people with
                diverse cultures, preserve natural environments, and support
                local communities.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, idx) => (
              <BlurFade key={idx} delay={0.1 * idx}>
                <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={2977}
                      width={3951}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-primary">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
