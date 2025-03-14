import { CategorySection } from "@/components/categories-section";


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
    <div className="p-8 font-sans col-span-1">
      <CategorySection
      title = "PHD Fellowships"
      categories = {[
        {
          name: "IBM PhD Fellowship", 
          link: "#",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
          description: "Supports exceptional PhD students in computer science and engineering",
          joinedDate: "2023"
        },
      ]}
      rightCategories = {[
        {
          name: "NSF Graduate Research Fellowship (GRFP)", 
          link: "#",
          avatarUrl: "https://www.nsf.gov/images/logos/NSF_4-Color_bitmap_Logo.png",
          description: "Recognizes and supports outstanding graduate students in NSF-supported STEM disciplines",
          joinedDate: "2022"
        },
      ]}
      />

<CategorySection
      title = "Science Fellowships"
      categories = {[
        {
          name: "EERE Science and Technology Policy Fellowships", 
          link: "#",
          avatarUrl: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/2021-03/DOE_logo_0.png",
          description: "Provides opportunities for scientists and engineers to contribute to energy policy",
          joinedDate: "2021"
        },
      ]}
      rightCategories = {[
        {
          name: "Climatebase Fellowship", 
          link: "#",
          avatarUrl: "https://climatebase.org/images/logo.svg",
          description: "Helps professionals transition into climate tech careers",
          joinedDate: "2023"
        },
      ]}
      />
          </div>

    <div className="p-8 font-sans col-span-1">
      <CategorySection
      title = "FAANG Fellowships"
      categories = {[
        {
          name: "NVIDIA Graduate Fellowship", 
          link: "#",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
          description: "Supports PhD students doing GPU-based research",
          joinedDate: "2023"
        },
      ]}
      rightCategories = {[
        {
          name: "MongoDB PhD Fellowship", 
          link: "#",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
          description: "Supports PhD students working on database research",
          joinedDate: "2022"
        },
      ]}
      />

<CategorySection
      title = "Country Fellowships"
      categories = {[
        {name: "America On Tech Fellowships", link: "#"},
      ]}
      rightCategories = {[
        {name: "India Smart Cities Fellowship", link: "#"},
      ]}
      />
      </div>

      <div className="p-8 font-sans col-span-1">
      <CategorySection
      title = "Residency Fellowships"
      categories = {[
        {
          name: "The Residency", 
          link: "#",
          avatarUrl: "https://theresidency.io/static/media/logo.1e8a8e2b.svg",
          description: "Supports early-stage founders building the future of work",
          joinedDate: "2023"
        },
        {
          name: "FdotInc", 
          link: "#",
          avatarUrl: "https://fdotinc.com/wp-content/uploads/2021/12/FdotInc-Logo.png",
          description: "Accelerates startups focused on digital transformation",
          joinedDate: "2022"
        },
        {
          name: "Techstars", 
          link: "#",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Techstars_logo.png",
          description: "Global network that helps entrepreneurs succeed",
          joinedDate: "2021"
        },
      ]}
      rightCategories = {[
        {
          name: "Athena", 
          link: "#",
          avatarUrl: "https://www.athena.vc/images/logo.svg",
          description: "Supports female founders building scalable businesses",
          joinedDate: "2023"
        },
        {
          name: "Antler", 
          link: "#",
          avatarUrl: "https://www.antler.co/dist/images/antler-logo.svg",
          description: "Helps exceptional people build impactful companies",
          joinedDate: "2022"
        },
      ]}
      />

<CategorySection
      title = "Country Fellowships"
      categories = {[
        {name: "America On Tech Fellowships", link: "#"},
      ]}
      rightCategories = {[
        {name: "India Smart Cities Fellowship", link: "#"},
      ]}
      />
          </div>
          </div>
  );
}
