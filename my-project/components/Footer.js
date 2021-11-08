const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <p className="flex flex-row text-gray-400">
        Built with{" "}
        <a href="https://nextjs.org" target="__blank">
          <img src="/logos/nextjs.svg" className="h-6 w-6 mx-1" />
        </a>{" "}
        <a href="https://tailwindcss.com" target="__blank">
          <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" />
        </a>{" "}
        and{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="__blank">
          &nbsp; 💛
        </a>
      </p>
    </footer>
  );
}
