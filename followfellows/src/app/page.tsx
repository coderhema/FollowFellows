import { CategorySection } from "@/components/categories-section";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
    <div className="p-8 font-sans col-span-1">
      <CategorySection
      title = "PHD Fellowships"
      categories = {[
        {name: "IBM PhD Fellowship", link: "#"},
      ]}
      rightCategories = {[
        {name: "NSF Graduate Research Fellowship (GRFP)", link: "#"},
      ]}
      />

<CategorySection
      title = "Science Fellowships"
      categories = {[
        {name: "EERE Science and Technology Policy Fellowships", link: "#"},
      ]}
      rightCategories = {[
        {name: "Climatebase Fellowship", link: "#"},
      ]}
      />
          </div>

          <div className="p-8 font-sans col-span-1">
      <CategorySection
      title = "FAANG Fellowships"
      categories = {[
        {name: "NVIDIA Graduate Fellowship", link: "#"},
      ]}
      rightCategories = {[
        {name: "MongoDB PhD Fellowship", link: "#"},
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
