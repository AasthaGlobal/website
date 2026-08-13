import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";

export default function Home() {
  return (
    <main className="home">
      <Navbar />
      <Hero />
    </main>
  );
}