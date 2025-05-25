export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-neutral-100 dark:bg-neutral-800 transition-colors"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Get Involved</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
          LumiOS is open source and evolving. Follow the GitHub repo, contribute ideas, or help design the future.
        </p>
        <a
          href="https://github.com/yourusername/lumios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-all"
        >
          Visit GitHub →
        </a>
      </div>
    </section>
  );
}
