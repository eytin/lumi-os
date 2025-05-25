import Hero from './components/hero';
import Dynamic from './components/dynamic';

export default function App() {
  return (
    <main className="relative w-full h-[400vh] bg-[#fbf1c7] dark:bg-[#282828] text-[#3c3836] dark:text-[#ebdbb2]">
      <Hero />
      <Dynamic />
    </main>
  );
}
