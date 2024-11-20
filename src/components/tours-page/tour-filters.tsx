import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export interface FilterState {
  priceRange: [number, number]
  location: string
  difficulty: string
}

interface TourFiltersProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

export const TourFilters = ({ filters, setFilters }: TourFiltersProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <Slider
          min={0}
          max={5000}
          step={100}
          value={filters.priceRange}
          onValueChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: value as [number, number],
            }))
          }
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <Select
          value={filters.location}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, location: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-locations">All Locations</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="North America">North America</SelectItem>
            <SelectItem value="South America">South America</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Difficulty</label>
        <Select
          value={filters.difficulty}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, difficulty: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-difficulties">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
