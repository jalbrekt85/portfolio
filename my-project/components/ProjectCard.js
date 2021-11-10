export default function ProjectCard({
  title,
  description,
  href,
  icon,
  tags,
  badge,
  color,
  badgeText,
}) {
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        <div className="h-8 w-8 ml-2 mr-4">{icon}</div>

        <div>
          <>
            <grid>
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}&nbsp;&nbsp;
                {badge && (
                  <span className="inline-flex items-center justify-center px-3 py-1 mr-2 text-xs font-bold leading-none bg-gradient-to-r from-blue-400 to-indigo-500 text-gray-100 rounded-full">
                    {badgeText}
                  </span>
                )}
              </h4>
            </grid>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              {description}
            </p>

            <div className="pt-2 flex md:flex-row space-x-2">
              {tags?.map((tag, idx) => (
                <p
                  key={idx}
                  className={`leading-5 dark:border text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  `}
                >
                  {tag}
                </p>
              ))}
            </div>
          </>
        </div>
      </div>
    </a>
  );
}
