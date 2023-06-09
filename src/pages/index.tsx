// import { Category } from "../components/landingPage/Category";
import NewsSection from "@/components/Home/NewsImagesSection";
import { MCategories } from "@/components/landingPage/MCategories";
import Swiper from "@/components/Home/Swiper";
import CarouselSection from "@/components/Home/Carousel";
import { Items } from "@/components/landingPage/items";

export default function Home(): JSX.Element {
  return (
    <div className="mx-10">
      {/* <Category /> */}
      <CarouselSection />
      <Swiper />
      <div className="pb-[140px]">
        <NewsSection />
      </div>
      <MCategories />
      <Items />
    </div>
  );
}
