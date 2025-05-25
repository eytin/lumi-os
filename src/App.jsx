import Hero from './components/hero';
import About from './components/sections/about';
import Vision from './components/sections/vision';
import GetInvolved from './components/sections/get-involved';

export default function App() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Vision />
      <GetInvolved />
    </main>
  );
}
