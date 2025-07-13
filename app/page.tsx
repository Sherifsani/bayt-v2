import MainHero from "./components/MainHero";
import FeaturedWorks from "./components/FeaturedWorks";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(20,20,20)]">
      <MainHero />
      <FeaturedWorks/>
    </div>
  );
}
