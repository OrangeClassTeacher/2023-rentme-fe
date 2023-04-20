import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import CategoryCard from '../categories/CategoryCard';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IProductCategory } from '@/interfaces/product';

interface TopCategoriesProps {
  categories: IProductCategory[];
}

const TopCategoriesSection: FC<TopCategoriesProps> = ({ categories }) => (
  <div className="container mb-[120px]">
    <div className="mb-[51px] text-center">
      <h1 className="text-head text-3xl-bold mb-[9px]">Top Categories</h1>
      <p className="text-text text-md-regular">Lorem ipsum dolor sit amet, consectetur.</p>
    </div>

    <Swiper
      grabCursor={true}
      spaceBetween={30}
      slidesPerView={6}
      navigation={{
        nextEl: '.slider-style-2-next',
        prevEl: '.slider-style-2-prev',
      }}
      pagination={{ clickable: true, el: '.slider-style-2-pagination' }}
      modules={[Navigation, Pagination]}
    >
      {categories.map((category) => (
        <SwiperSlide key={category._id}>
          <CategoryCard category={category} />
        </SwiperSlide>
      ))}

      <div className="flex items-center justify-center gap-5 mt-[60px]">
        <button className="slider-style-2-prev">
          <BsArrowLeft />
        </button>
        <div className="slider-style-2-pagination" />
        <button className="slider-style-2-next">
          <BsArrowRight />
        </button>
      </div>
    </Swiper>
  </div>
);

export default TopCategoriesSection;
