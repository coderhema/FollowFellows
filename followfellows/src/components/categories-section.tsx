import { Separator } from "./ui/separator"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card"
import { Button } from "./ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

interface CategorySectionProps {
  title: string
  categories: { name: string; link: string; avatarUrl?: string; description?: string; joinedDate?: string }[]
  rightCategories?: { name: string; link: string; avatarUrl?: string; description?: string; joinedDate?: string }[]
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
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="text-sm text-gray-700 p-0 h-auto">
                    {category.name}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={category.avatarUrl || "https://github.com/vercel.png"} />
                      <AvatarFallback>{category.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{category.name}</h4>
                      <p className="text-sm">
                        {category.description || "No description available"}
                      </p>
                      {category.joinedDate && (
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-muted-foreground">
                            Joined {category.joinedDate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        {rightCategories && (
          <div className="space-y-1">
            {rightCategories.map((category, index) => (
              <div key={index}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="text-sm text-gray-700 p-0 h-auto">
                      {category.name}
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src={category.avatarUrl || "https://github.com/vercel.png"} />
                        <AvatarFallback>{category.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{category.name}</h4>
                        <p className="text-sm">
                          {category.description || "No description available"}
                        </p>
                        {category.joinedDate && (
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              Joined {category.joinedDate}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
