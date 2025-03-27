import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

function SearchBox({placeholder}: {placeholder: string}) {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="relative w-full max-w-md">
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export { SearchBox }
