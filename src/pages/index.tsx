import { Inter } from "next/font/google";

import { NewsSection } from "../components/landingPage/NewsSection";
// import { MCategories } from "@/components/landingPage/MCategories";
import { Items } from "@/components/landingPage/Items";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NewsSection />
      <Items />
    </div>
  );
}
