"use client";
import { memo, useState, useTransition, useCallback } from "react";
import { useRouter } from "next/navigation";

const FilterButtons = ({ categories, initialCategory, currentTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || "all"
  );
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = useCallback(
    (categoryId) => {
      startTransition(() => {
        setSelectedCategory(categoryId);
        router.push(`/pages/projects?initialCategory=${categoryId}`, {
          scroll: false,
        });
      });
    },
    [router]
  );

  const mobileCategoryNames = {
    all: "All",
    react: "React",
    nextjs: "Next.js",
    javascript: "Javascript",
    jQuery: "jQuery",
  };

  return (
    <div className="flex justify-start sm:justify-center flex-nowrap gap-2 mb-8 sm:gap-4 sm:mb-12 overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleFilterChange(category.id)}
          disabled={isPending}
          aria-label={`Filter by ${category.name}`}
          className={`min-w-[90px] px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 border border-transparent will-change-transform ${
            selectedCategory === category.id
              ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md shadow-blue-500/20"
              : currentTheme === "dark"
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:border-gray-300"
          } ${
            isPending
              ? "opacity-50 cursor-not-allowed"
              : "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          } snap-center`}
        >
          <span className="truncate">
            <span className="sm:hidden">
              {mobileCategoryNames[category.id]}
            </span>
            <span className="hidden sm:inline">{category.name}</span>
          </span>
          <span
            className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs ${
              selectedCategory === category.id
                ? "bg-white/20 text-white"
                : currentTheme === "dark"
                ? "bg-gray-700 text-gray-400"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default memo(FilterButtons);
