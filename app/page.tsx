import MainHero from "./components/MainHero";
import FeaturedWorks from "./components/FeaturedWorks";
import AboutSection from "./components/AboutSection";
import BookMarks from "./components/BookMarks";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(20,2020)]">
      <MainHero />
      <FeaturedWorks />
      <AboutSection />
      <BookMarks />
    </div>
  );
}
