import { Inter } from "next/font/google";
import { Category } from "../components/landingPage/Category";
import { NewsSection } from "../components/landingPage/NewsSection";
// import { MCategories } from "@/components/landingPage/MCategories";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Category />
      <NewsSection />
    </div>
  );
}
