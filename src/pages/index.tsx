import { Inter } from "next/font/google";
import { Category } from "../components/landingPage/Category";
import NewsSection from "@/components/Home/NewsImagesSection";
import { MCategories } from "@/components/landingPage/MCategories";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Category />
      <NewsSection />
      <MCategories />
    </div>
  );
}
