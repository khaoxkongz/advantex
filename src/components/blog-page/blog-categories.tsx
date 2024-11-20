import { Button } from "@/components/ui/button"

interface BlogCategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categories = [
  { id: "all", name: "All Articles" },
  { id: "destinations", name: "Destinations" },
  { id: "culture", name: "Culture" },
  { id: "adventure", name: "Adventure" },
  { id: "tips", name: "Travel Tips" },
  { id: "food", name: "Food & Cuisine" },
]

export const BlogCategories = ({
  selectedCategory,
  onSelectCategory,
}: BlogCategoriesProps) => {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 font-semibold">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
