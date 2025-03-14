import Link from "next/link"
import { Separator } from "@/components/ui/separator"

interface CategorySectionProps {
  title: string
  categories: { name: string; link: string }[]
  rightCategories?: { name: string; link: string }[]
}

export function CategorySection({ title, categories, rightCategories }: CategorySectionProps) {
  return (
    <div className="mb-8 border border-gray-300 rounded-md overflow-hidden">
      <h2 className="text-center font-semibold py-2 bg-gray-100">{title}</h2>
      <Separator />
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-4">
        <div className="space-y-1">
          {categories.map((category, index) => (
            <div key={index}>
              <Link href={category.link} className="text-sm text-gray-700 hover:underline">
                {category.name}
              </Link>
            </div>
          ))}
        </div>

        {rightCategories && (
          <div className="space-y-1">
            {rightCategories.map((category, index) => (
              <div key={index}>
                <Link href={category.link} className="text-sm text-gray-700 hover:underline">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}