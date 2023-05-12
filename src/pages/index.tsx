import { Inter } from "next/font/google";
import { Category } from "../components/landingPage/MCategories";
import NewsSection from "../components/landingPage/NewsSection";
import { MCategories } from "../components/landingPage/MCategories";
import Swiper from "@/components/Home/Swiper";
import CarouselSection from "@/components/Home/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Category />
      <CarouselSection />
      <Swiper />
      <NewsSection />
      <MCategories />
    </div>
  );
}
