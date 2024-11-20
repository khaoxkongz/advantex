import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const SearchDestinations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative z-10 rounded-xl bg-white p-4 shadow-lg sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium ">Destination</label>
            <Input placeholder="Where to?" className="w-full bg-white/90" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium ">When</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <SelectItem key={month} value={month.toLowerCase()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium ">Travelers</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Number of people" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, "6+"].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Person" : "People"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full" size="lg">
              <Search className="mr-2 size-4" /> Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
