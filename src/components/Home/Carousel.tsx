import "swiper/css";
import "swiper/css/navigation";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from 'next/image';
import biamge from '@/assets/backimg.svg';




import { EffectCoverflow, Pagination } from "swiper";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const CarouselSection: FC = () => (
    <div className="">
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-1/2 h-1/2">
                    <Image src={biamge} alt="" className="w-full h-full object-cover" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
);

export default CarouselSection;