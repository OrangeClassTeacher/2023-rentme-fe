import React from "react";
import dog from "../../images/dog.png";
import Image from "next/image";
import bimage from "../../assets/backimg.svg";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
// import Category from "./MCategories";

export const NewsSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <h1>News Section</h1>
      </div>

      <div className="w-full h-96 flex justify-evenly  my-8">
        <Image src={dog} className="w-auto h-auto" />
        <Image src={dog} className="w-auto h-auto" />
        <Image src={dog} className="w-auto h-auto" />
        <Image src={dog} className="w-auto h-auto" />
        {/* <div className="w-2/4">
        <Image src={harizm} className="w-full h-full" />
      </div>
      <div className="w-2/4">
        <Image src={logo} className="w-full h-full" />
      </div> */}
      </div>
      <div>{/* <Category /> */}</div>
      <div className="container text-head mt-[60px] mb-[69px] lg:mt-[120px] lg:mb-[112px]">
        <div className="flex flex-col items-start mb-[30px] lg:flex-row lg:items-center lg:justify-between lg:mb-[51px] gap-[30px]">
          {/* <div>
        <h1 className="text-3xl-bold mb-[9px]">Rental Newss</h1>
        <p className="text-text font-md-regular">Latest Rental Item</p>
      </div> */}

          <Link className="arrow-btn-1" href="/item">
            All Rental Items
            <HiOutlineArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[30px]">
          <div>
            <Link
              href="/"
              className="block w-full overflow-hidden rounded-lg mb-5 group relative"
            >
              <Image
                src={bimage}
                alt="News"
                className="w-full aspect-[1.2/1] object-cover group-hover:scale-110 duration-300"
              />

              <div className="absolute top-0 right-0 left-0 w-full h-full group-hover:bg-head/50 duration-300" />
            </Link>
            <span className="block uppercase text-color-1 text-sm-medium mb-[10px]">
              Top Rental Item
            </span>
            <Link
              href="/"
              className="block text-[#242239] text-2xl-medium leading-9 mb-[10px] hover:text-[#242239]/70 duration-300"
            >
              Rental Product Future
            </Link>
            <span className="text-text block text-md-regular">
              December 16, 2022
            </span>
          </div>

          <div>
            <Link
              href="/"
              className="block w-full overflow-hidden rounded-lg mb-5 group relative"
            >
              <Image
                src={bimage}
                alt="News"
                className="w-full aspect-[1.2/1] object-cover group-hover:scale-110 duration-300"
              />

              <div className="absolute top-0 right-0 left-0 w-full h-full group-hover:bg-head/50 duration-300" />
            </Link>
            <span className="block uppercase text-color-1 text-sm-medium mb-[10px]">
              Top Rental Item
            </span>
            <Link
              href="/"
              className="block text-[#242239] text-2xl-medium leading-9 mb-[10px] hover:text-[#242239]/70 duration-300"
            >
              Rental Product Future
            </Link>
            <span className="text-text block text-md-regular">
              December 16, 2022
            </span>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="block w-[140px] h-[140px] rounded-lg overflow-hidden relative group"
              >
                <Image
                  alt="News"
                  src={bimage}
                  className="w-full aspect-square object-cover group-hover:scale-110 duration-300"
                />

                <div className="absolute top-0 right-0 left-0 w-full h-full group-hover:bg-head/50 duration-300" />
              </Link>

              <div>
                <span className="block uppercase text-color-1 text-xs-medium mb-[10px]">
                  Item
                </span>
                <Link
                  className="block text-lg-medium mb-[10px] w-[20ch] hover:text-head/70 duration-300"
                  href="/"
                >
                  Bag
                </Link>
                <span className="block text-text text-xs-regular">
                  December 16, 2022
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="block w-[140px] h-[140px] rounded-lg overflow-hidden relative group"
              >
                <Image
                  alt="News"
                  src={bimage}
                  className="w-full aspect-square object-cover group-hover:scale-110 duration-300"
                />

                <div className="absolute top-0 right-0 left-0 w-full h-full group-hover:bg-head/50 duration-300" />
              </Link>

              <div>
                <span className="block uppercase text-color-1 text-xs-medium mb-[10px]">
                  Item
                </span>
                <Link
                  className="block text-lg-medium mb-[10px] w-[20ch] hover:text-head/70 duration-300"
                  href="/"
                >
                  {" "}
                  Bag
                </Link>
                <span className="block text-text text-xs-regular">
                  December 16, 2022
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="block w-[140px] h-[140px] rounded-lg overflow-hidden relative group"
              >
                <Image
                  alt="News"
                  src={bimage}
                  className="w-full aspect-square object-cover group-hover:scale-110 duration-300"
                />
                Bag
                <div className="absolute top-0 right-0 left-0 w-full h-full group-hover:bg-head/50 duration-300" />
              </Link>

              <div>
                <span className="block uppercase text-color-1 text-xs-medium mb-[10px]">
                  Item
                </span>
                <Link
                  className="block text-lg-medium mb-[10px] w-[20ch] hover:text-head/70 duration-300"
                  href="/"
                >
                  Bag
                </Link>
                <span className="block text-text text-xs-regular">
                  December 16, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
