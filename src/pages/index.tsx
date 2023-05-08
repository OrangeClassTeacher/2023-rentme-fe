import { Inter } from "next/font/google";
import { Category } from "../components/landingPage/Category";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Category />
    </div>
  );
}
