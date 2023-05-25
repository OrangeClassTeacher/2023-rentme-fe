import "swiper/css";
import "swiper/css/navigation";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from 'next/image';
import carso2 from "@/images/5.jpg"



import { EffectCoverflow, Pagination } from "swiper";

const CarouselSection: FC = () => (
    <div className="w-full">
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
                <div className="relative h-screen w-full">
                    <video id="myVideo"
                        src={require("../../../public/cover.mp4")}
                        autoPlay
                        loop
                        muted
                        className="object-cover h-full w-full absolute py-[4%]"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-screen w-full">
                    <Image src={carso2} alt="" className="h-[800px]" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
);

export default CarouselSection;