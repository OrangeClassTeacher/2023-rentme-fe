import { Inter } from "next/font/google";
import { Category } from "../components/landingPage/Category";
<<<<<<< HEAD
import NewsSection from "@/components/Home/NewsImagesSection";
=======
import { NewsSection } from "@/components/landingPage/NewsSection";
>>>>>>> 718f743 (D)
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Category />
<<<<<<< HEAD
      <NewsSection/>
=======
      <NewsSection />
>>>>>>> 718f743 (D)
    </div>
  );
}
