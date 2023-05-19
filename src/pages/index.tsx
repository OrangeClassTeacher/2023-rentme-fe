import { Inter } from "next/font/google";
import Category from "../components/landingPage/Category";
import NewsSection from "@/components/Home/NewsImagesSection";
import { MCategories } from "@/components/landingPage/MCategories";
import Swiper from "@/components/Home/Swiper";
import CarouselSection from "@/components/Home/Carousel";
import { Items } from "@/components/landingPage/items";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-10">
      <Category />
      <CarouselSection />
      <Swiper />
      <NewsSection />
      <MCategories />
      <Items />
    </div>
  );
}
