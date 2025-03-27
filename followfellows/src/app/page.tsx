import { CategorySection } from "@/components/categories-section";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {SearchBox} from "@/components/ui/search";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* Navigation Bar */}
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            FollowFellows
          </Link>
          <SearchBox placeholder="Search Fellowships" />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="bg-blue-700 text-white font-medium font-sans rounded-sm">
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Create a posting
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

    {/* Main content*/}
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="p-8 font-sans col-span-1">
        <CategorySection
          title="Startup Fellowships"
          categories={[
            {
              name: "Y Combinator",
              link: "#",
              description: "World's leading startup accelerator program",
              joinedDate: "2023"
            },
            {
              name: "Z Fellows",
              link: "#",
              description: "Fellowship program for student founders",
              joinedDate: "2023"
            },
            {
              name: "Nautilus",
              link: "#",
              description: "Supporting deep tech founders",
              joinedDate: "2023"
            }
          ]}
        />

        <CategorySection
          title="Government Fellowships"
          categories={[
            {
              name: "US Digital Corps",
              link: "https://digitalcorps.gsa.gov/",
              description: "Early-career fellowship in federal technology",
              joinedDate: "2023"
            },
            {
              name: "TechCongress Fellowship",
              link: "https://techcongress.io/",
              description: "Bringing tech expertise to Congress",
              joinedDate: "2023"
            },
            {
              name: "Presidential Innovation Fellows",
              link: "https://presidentialinnovationfellows.gov",
              description: "Modernizing federal government",
              joinedDate: "2023"
            }
          ]}
        />
      </div>

      <div className="p-8 font-sans col-span-1">
        <CategorySection
          title="PhD & Research Fellowships"
          categories={[
            {
              name: "Google PhD Fellowship",
              link: "#",
              description: "Supporting innovative PhD students",
              joinedDate: "2023"
            },
            {
              name: "IBM PhD Fellowship",
              link: "#",
              avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              description: "Supporting exceptional PhD students",
              joinedDate: "2023"
            },
            {
              name: "Adobe Research Fellowship",
              link: "#",
              description: "Research in computer science and engineering",
              joinedDate: "2023"
            }
          ]}
        />

        <CategorySection
          title="Tech Industry Fellowships"
          categories={[
            {
              name: "KPCB Fellowship",
              link: "#",
              description: "Engineering & Design Fellowship",
              joinedDate: "2023"
            },
            {
              name: "Code2040 Fellows",
              link: "#",
              description: "Career accelerator for Black and Latinx technologists",
              joinedDate: "2023"
            }
          ]}
        />
      </div>

      <div className="p-8 font-sans col-span-1">
        <CategorySection
          title="Accelerator Programs"
          categories={[
            {
              name: "Techstars",
              link: "#",
              avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Techstars_logo.png",
              description: "Global network that helps entrepreneurs succeed",
              joinedDate: "2023"
            },
            {
              name: "Antler",
              link: "#",
              avatarUrl: "https://www.antler.co/dist/images/antler-logo.svg",
              description: "Helps exceptional people build impactful companies",
              joinedDate: "2023"
            },
            {
              name: "Flagship Pioneering",
              link: "#",
              description: "Fellowship for biotech innovation",
              joinedDate: "2023"
            }
          ]}
        />
      </div>

      <div className="p-8 font-sans col-span-1">
        <CategorySection
          title="Specialized Fellowships"
          categories={[
            {
              name: "Climatebase Fellowship",
              link: "#",
              avatarUrl: "https://climatebase.org/images/logo.svg",
              description: "Helps professionals transition into climate tech",
              joinedDate: "2023"
            },
            {
              name: "Cornell Tech Venture Fellows",
              link: "https://www.tech.cornell.edu/",
              description: "Fellowship for tech entrepreneurs",
              joinedDate: "2023"
            },
            {
              name: "Paragon Fellowship",
              link: "#",
              description: "Supporting innovative tech leaders",
              joinedDate: "2023"
            }
          ]}
        />
      </div>
      </div>
    </div>
  );
}
