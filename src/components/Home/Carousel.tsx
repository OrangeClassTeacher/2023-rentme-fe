import "swiper/css";
import "swiper/css/navigation";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from 'next/image';
import carso1 from '@/images/6.jpg'
import carso2 from "@/images/5.jpg"



import { EffectCoverflow, Pagination } from "swiper";

const CarouselSection: FC = () => (
    <div className="container mx-[40px]">
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
                <div className="">
                    <Image src={carso1} alt="" className="w-full h-[600px] object-cover" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <Image src={carso2} alt="" className="w-full h-[600px] object-cover" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
);

export default CarouselSection;