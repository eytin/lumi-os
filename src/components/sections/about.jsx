export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-neutral-100 dark:bg-neutral-800 transition-colors"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">What is LumiOS?</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          LumiOS is a lightweight, intentional operating environment built for clarity. It puts your input first —
          reducing UI noise, surfacing intelligence, and letting you focus on what matters most.
        </p>
      </div>
    </section>
  );
}
