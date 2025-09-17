import { portfolioData } from "@/assets/assets";
import { Suspense } from "react";
import Loading from "./loading";
import { cookies } from "next/headers";
import Header from "./HeaderProject";
import FilterButtons from "./FilterButtons";
import ProjectCard from "./ProjectCard";
import StatsSection from "./StatsSection";

async function fetchPortfolioData() {
  // Removed artificial delay for better performance
  return portfolioData;
}

export default async function ProjectsPage({ searchParams }) {
  const data = await fetchPortfolioData();
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get("theme")?.value || "light";
  const validCategories = ["all", "react", "nextjs", "javascript", "jQuery"];
  const selectedCategory = validCategories.includes(
    searchParams.initialCategory
  )
    ? searchParams.initialCategory
    : "all";

  const filteredWork =
    selectedCategory === "all"
      ? data
      : data.filter((project) =>
          selectedCategory === "react"
            ? project.technologies.includes("React")
            : selectedCategory === "nextjs"
            ? project.technologies.includes("Next.js")
            : selectedCategory === "javascript"
            ? project.technologies.includes("JavaScript")
            : selectedCategory === "jQuery"
            ? project.technologies.includes("jQuery")
            : true
        );

  const categories = [
    { id: "all", name: "All Projects", count: data.length },
    {
      id: "react",
      name: "React Projects",
      count: data.filter((p) => p.technologies.includes("React")).length,
    },
    {
      id: "nextjs",
      name: "Next.js Projects",
      count: data.filter((p) => p.technologies.includes("Next.js")).length,
    },
    {
      id: "javascript",
      name: "JavaScript Projects",
      count: data.filter((p) => p.technologies.includes("JavaScript")).length,
    },
    {
      id: "jQuery",
      name: "jQuery Projects",
      count: data.filter((p) => p.technologies.includes("jQuery")).length,
    },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`min-h-screen ${
          currentTheme === "dark" ? "bg-black" : "bg-white"
        } transition-colors duration-200`}
      >
        <main className="w-full px-[5%] lg:px-[12%] py-12 pt-32">
          <Header
            currentTheme={currentTheme}
            selectedCategory={selectedCategory}
          />
          <FilterButtons
            categories={categories}
            initialCategory={selectedCategory}
            currentTheme={currentTheme}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredWork.map((work, index) => (
              <ProjectCard
                key={work.id}
                work={work}
                currentTheme={currentTheme}
                isFirst={index === 0} // Mark the first card for LCP optimization
              />
            ))}
          </div>
          <StatsSection data={data} currentTheme={currentTheme} />
        </main>
      </div>
    </Suspense>
  );
}
