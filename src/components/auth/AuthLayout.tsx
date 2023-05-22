import { FC } from "react";
import Image from "next/image";
import authShapes from "@/assets/authShapes.svg";
import authBg from "@/assets/authBg.svg";
import authBgSmall1 from "@/assets/bg-1.svg";
import authBgSmall2 from "@/assets/bg-2.svg";
import authBgSmall3 from "@/assets/bg-3.svg";
interface AuthLayoutProps {
  children: JSX.Element;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => (
  <>
    <main className="min-w-screen min-h-screen grid grid-cols-3">
      <div className="col-span-1 bg-head relative overflow-hidden grid place-items-center">
        <Image
          src={authShapes}
          alt="Background shape"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-[1] w-[450px] h-[450px]"
        />
        <div className="relative">
          <div className="w-[400px] h-[400px] bg-color-1 rounded-full overflow-hidden">
            <Image
              src={authBg}
              alt="Studying"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="absolute overflow-hidden w-[90px] h-[90px] bg-[#efccc7] rounded-full top-20 -left-8">
            <Image
              alt="Bg Small"
              src={authBgSmall1}
              className="w-full aspect-square object-contain"
            />
          </div>
          <div className="absolute overflow-hidden w-[90px] h-[90px] bg-color-6 rounded-full top-20 -right-8">
            <Image
              alt="Bg Small"
              src={authBgSmall2}
              className="w-full aspect-square object-contain"
            />
          </div>
          <div className="absolute overflow-hidden w-[90px] h-[90px] bg-[#8FD4B8] rounded-full bottom-0 right-5">
            <Image
              alt="Bg Small"
              src={authBgSmall3}
              className="w-full aspect-square object-contain bg-right"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-bg-5 grid place-items-center">
        {children}
      </div>
    </main>
  </>
);

export default AuthLayout;
