import React, { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "@/interfaces/product";
import { Utils } from "../../utils/helper";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

<<<<<<< HEAD
export default function NewsSection(): JSX.Element {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    getItemData();
  }, []);
  const getItemData = (): void => {
    axios
      .get(`${Utils.API_URL}/itemsDate`)
      .then((res) => setItemData(res.data.result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-start mb-[30px] lg:flex-row lg:items-center lg:justify-between lg:mb-[51px] gap-[30px]">
        <div>
          <h1 className="text-3xl-bold mb-[9px]">Хамгийн их түрээслэгдсэн бүтээгдэхүүн</h1>
=======
const NewsSection: FC<NewsSectionProps> = ({ product }: any) => (
  <div className="container text-head mt-[60px] mb-[69px] lg:mt-[120px] lg:mb-[112px]">
    <div className="flex flex-col items-start mb-[30px] lg:flex-row lg:items-center lg:justify-between lg:mb-[51px] gap-[30px]">
      <div>
        <h1 className="text-3xl-bold mb-[9px]">Түрээсийн Мэдээлэл</h1>
      </div>

      <Link className="arrow-btn-1" href="/item">
        Бүх Түрээсийн Бараануудыг Харах
        <HiOutlineArrowUpRight size={15} />
      </Link>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[30px]">
      {product?.slice(0, 2).map((product) => (
        <div key={product._id}>
          <Link
            href={`/item/${product._id}`}
            className="block w-full overflow-hidden rounded-lg mb-5 group relative"
          >
            <Image
              src={product.itemPhoto}
              alt=""
              width={800}
              height={800}
              className="w-full aspect-[1.2/1] object-cover group-hover:scale-110 duration-300"
            />

            <div className="absolute top-0 right-0 left-0 w-full h-full group-hover:bg-head/50 duration-300" />
          </Link>
          <span className="block uppercase text-color-1 text-sm-medium mb-[10px]">
            Education
          </span>
          <Link
            href={`/blogs/${product._id}`}
            className="block text-[#242239] text-2xl-medium leading-9 mb-[10px] hover:text-[#242239]/70 duration-300"
          >
            {product.itemName}
          </Link>
          <span className="text-text block text-md-regular">
            {new Date(product.updatedAt).toLocaleDateString("en-US")}
          </span>
>>>>>>> 3951368641b362c9650521b1eb86337f28c2ef8b
        </div>

        <Link className="arrow-btn-1" href="/item">
          Бүх Бүтээгдэхүүн Харах
          <HiOutlineArrowUpRight size={20} />
        </Link>
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-2">
        {itemData?.slice(0, 4).map((item: Iproduct, index) => {
          if (item.status != "Rented") {
            return (
              <div
                key={index}
                className="w-full max-w-sm bg-white rounded-lg shadow "
              >
                <div>
                  <Link
                    href={`/item/${item._id}`}
                  >
                    <img
                      src={item.itemPhoto}
                      alt="itemPhoto"
                      className="w-full rounded-t-lg h-[400px]"
                    />
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black text-center">
                      {" "}
                      {item.itemName}
                    </h1>
                    <div className="px-5 pb-5">
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate">
                        Description : {item.description}
                      </h3>
                      <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate">
                        {new Date(item.updatedAt).toLocaleDateString("en-US")}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-2">
        {itemData?.slice(0).map((item: Iproduct, index) => {
          if (item.status != "Rented") {
            return (
              <div
                key={index}
                className="w-full max-w-sm bg-white rounded-lg shadow "
              >
                <div>
                  <Link
                    href={`/item/${item._id}`}
                  >
                    <img
                      src={item.itemPhoto}
                      alt="itemPhoto"
                      className="w-full rounded-t-lg h-[400px]"
                    />
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black text-center">
                      {" "}
                      {item.itemName}
                    </h1>
                    <div className="px-5 pb-5">
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate">
                        Description : {item.description}
                      </h3>
                      <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate">
                        {new Date(item.updatedAt).toLocaleDateString("en-US")}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
