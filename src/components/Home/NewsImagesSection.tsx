import React, { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "@/interfaces/product";
import { Utils } from "../../utils/helper";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

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
