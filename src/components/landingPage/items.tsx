import React, { useEffect, useState } from "react";
import axios from "axios";
import RatingStar from "../global/RatingStar";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Iproduct } from "@/interfaces/product";
import { Utils } from "../../utils/helper";

export function Items(): JSX.Element {
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
      <h1 className="ps-8 text-3xl">Шинээр нэмэгдсэн</h1>
      <div className="w-full flex flex-wrap justify-evenly gap-2">
        {itemData.map((item: Iproduct, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white rounded-lg shadow "
          >
            <div>
              <img
                src={item.itemPhoto}
                alt="itemPhoto"
                className="w-full rounded-t-lg"
              />
              <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black text-center">
                {" "}
                {item.itemName}
              </h1>
              <div className="px-5 pb-5">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate">
                  Description : {item.description}
                </h3>
                <div className="flex items-center mt-2.5 mb-5">
                  <RatingStar />
                  <div className="w-5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-black">
                    {item.rentalPrice}$
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
              <div className="p-3">
                <button className="text-rose-500  outline outline-offset-2 outline-white rounded px-3">
                  <Link
                    href={`/item/${item._id}`}
                    className="flex items-center gap-1"
                  >
                    Дэлгэрэнгүй
                    <AiOutlineArrowRight className="pt-1 text-base" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
