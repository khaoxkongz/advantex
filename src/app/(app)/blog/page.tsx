"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogCard } from "@/components/blog-page/blog-card"
import { BlogCategories } from "@/components/blog-page/blog-categories"

// In a real app, this would come from an API
const blogs = [
  {
    id: "1",
    title: "Bali Paradise Explorer: A Journey Through the Island of Gods",
    excerpt:
      "Discover the magic of Bali through our carefully curated 10-day adventure that takes you from pristine beaches to ancient temples.",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    category: "Destinations",
    readTime: "5 min read",
    publishDate: "2024-03-15",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  },
  {
    id: "2",
    title: "Japanese Culture: Traditional Meets Modern",
    excerpt:
      "Experience the perfect blend of ancient traditions and modern wonders in the Land of the Rising Sun.",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    category: "Culture",
    readTime: "4 min read",
    publishDate: "2024-03-14",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  },
  {
    id: "3",
    title: "Greek Islands: A Mediterranean Paradise",
    excerpt:
      "Island hopping adventure through the crystal-clear waters of the Aegean Sea, exploring ancient ruins and beautiful beaches.",
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    category: "Adventure",
    readTime: "6 min read",
    publishDate: "2024-03-13",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
]

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" ||
      blog.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Travel Stories & Insights</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Discover travel tips, cultural insights, and detailed guides to help
            you plan your next adventure
          </p>
          <div className="relative mx-auto max-w-lg">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search articles..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogCategories
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="lg:col-span-3">
            <div className="grid gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
