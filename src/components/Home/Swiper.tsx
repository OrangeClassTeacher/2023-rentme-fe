import "swiper/css";
import "swiper/css/navigation";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
// import ProductSwiperCard from "./ProductSwiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import pro1 from "@/images/1.jpg";
import pro2 from "@/images/2.jpg";
import pro3 from "@/images/3.jpg";
import pro4 from "@/images/4.jpg";

const SwiperSection: FC = () => (
  <div className="bg-color-1 pt-[10px] pb-[10px] text-white">
    <div className="">
      <div className="text-center mb-[31px] px-[360px]">
        <h1 className="text-black text-3xl-bold mb-[10px] text-2xl p-5">
          --- Онцлох Түрээсийн Бараа ---
        </h1>
      </div>

      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".slider-style-1-next",
          prevEl: ".slider-style-1-prev",
        }}
        modules={[Navigation]}
        className="mb-[30px] md:mb-[40px] lg:mb-[56px]"
      >
        <SwiperSlide>
<<<<<<< HEAD
          <Image
            src={pro1} alt="pro" className="h-[450px]" />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={pro2} alt="pro" className="h-[450px]" />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={pro3} alt="pro" className="h-[450px]" />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={pro4} alt="pro" className="h-[450px]" />
        </SwiperSlide>

        <SwiperSlide>
          <ProductSwiperCard />
=======
          <Image src={pro2} alt="pro" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={pro3} alt="pro" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={pro4} alt="pro" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={pro1} alt="pro" className="h-[290px]" />
>>>>>>> 3951368641b362c9650521b1eb86337f28c2ef8b
        </SwiperSlide>

        <div className="flex items-center justify-end gap-5 mt-[60px]">
          <button className="slider-style-1-prev text-size-4 text-black">
            <BsArrowLeft />
          </button>
          <button className="slider-style-1-next text-black">
            <BsArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  </div>
);

export default SwiperSection;
