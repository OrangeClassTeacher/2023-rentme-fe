import "swiper/css";
import "swiper/css/navigation";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ProductSwiperCard from "./ProductSwiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SwiperSection: FC = () => (
  <div className="bg-color-1 pt-[10px] pb-[10px] text-white">
    <div className="">
      <div className="text-center mb-[31px] px-[360px]">
        <h1 className="text-black text-3xl-bold mb-[10px] text-2xl p-5">
          --- Онцлох Түрүүсийн Бараа ---
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
          <ProductSwiperCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductSwiperCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductSwiperCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductSwiperCard />
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
