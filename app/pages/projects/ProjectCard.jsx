import Image from "next/image";

export default function ProjectCard({ work, currentTheme, isFirst = false }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-200 shadow-md dark:shadow-gray-800/20 ${
        currentTheme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      } border`}
    >
      <div
        className={`aspect-video relative overflow-hidden ${
          currentTheme === "dark" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        {work.bgImage && (
          <Image
            src={work.bgImage}
            alt={work.title}
            width={400}
            height={225}
            className="object-cover w-full h-full project-card-image"
            loading={isFirst ? "eager" : "lazy"}
            priority={isFirst}
            fetchPriority={isFirst ? "high" : "auto"} // Prioritize fetching for first card
            quality={isFirst ? 75 : 80} // Lower quality for first card to reduce size
            placeholder="blur" // Add blur placeholder for perceived performance
            // blurDataURL="/placeholder.jpg" // Add a small placeholder image in assets/
          />
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${
            isFirst
              ? "opacity-0"
              : "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          }`} // Disable transition for first card
        ></div>
        {work.featured && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-semibold z-10">
            Featured
          </div>
        )}
        <div
          className={`absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 ${
            currentTheme === "dark" ? "text-white" : "text-gray-800"
          } px-2 py-0.5 rounded-full text-xs font-medium z-10`}
        >
          {work.technologies[0]}
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 ${
            isFirst
              ? "opacity-0"
              : "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          } z-10`} // Disable transition for first card
        >
          <a
            href={work.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-semibold transition-colors shadow-md ${
              work.liveUrl && work.liveUrl !== "#"
                ? "hover:bg-gray-100"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Live Demo
          </a>
          <a
            href={work.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors shadow-md ${
              work.githubUrl && work.githubUrl !== "#"
                ? "hover:bg-gray-800"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            View Code
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3
          className={`font-bold text-lg sm:text-xl ${
            currentTheme === "dark" ? "text-white" : "text-gray-800"
          } mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200`}
        >
          {work.title}
        </h3>
        <p
          className={`text-sm mb-3 line-clamp-3 ${
            currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {work.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 rounded-full text-xs ${
                currentTheme === "dark"
                  ? "bg-blue-900/30 text-blue-300"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {tech}
            </span>
          ))}
          {work.technologies.length > 4 && (
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                currentTheme === "dark"
                  ? "bg-gray-700 text-gray-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              +{work.technologies.length - 4}
            </span>
          )}
        </div>
        <div
          className={`flex items-center justify-between text-xs ${
            currentTheme === "dark" ? "text-gray-400" : "text-gray-500"
          } pt-3 border-t ${
            currentTheme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {work.date}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                !work.liveUrl || work.liveUrl === "#"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-gray-700 dark:hover:text-gray-300 transition-colors ${
                !work.githubUrl || work.githubUrl === "#"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
