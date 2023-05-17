import React from "react";
import axios from "axios";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import { Iproduct } from "../../interfaces/product";
import { SearchContext } from "@/context/searchTextContext";
import { userIdCon } from "@/context/userIdContext";
import RatingStar from "@/components/global/RatingStar";
import Pagination from "@/components/global/Pagination";
import SortDropDown from "@/components/global/SortDropdown";
import { sortValContext } from "@/context/SortContext";

export default function Index() {
  const [productData, setProductData] = useState<Iproduct[]>();
  const { sortVal } = useContext(sortValContext);
  const { search } = useContext<any>(SearchContext);
  const { userId } = useContext(userIdCon);

  useEffect(() => {
    getData();
  }, [search, sortVal]);

  const getData = () => {
    axios
      .post("http://localhost:8000/api/items", {
        searchText: search,
        sort: sortVal,
      })
      .then((res) => setProductData(res.data.result));
  };
  const [filterShow, setFilterShow] = useState<boolean>(false);

  const showFilter = (): void => {
    setFilterShow(true);
  };

  const closeFilter = (): void => {
    setFilterShow(false);
  };
  return (
    <div className="bg-white">
      <div className="text-center p-4">
        {userId ? (
          <button className="text-teal-500 outline outline-offset-2 outline-teal-500 bg-white rounded px-3">
            <Link href="/addProduct">Түрээслэх Бараа Нэмэх</Link>
          </button>
        ) : (
          ""
        )}
      </div>
      <div>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center text-black">
          <button
            onClick={showFilter}
            className="btn-4 py-4 px-6 text-md-medium flex items-center gap-2 lg:hidden"
          >
            <BiFilterAlt size={16} />
            Шүүлт
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-4 py-6 px-8">
        {productData?.map((item, index) => {
          return (
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
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black text-center"> {item.itemName}</h1>
                <div className="px-5 pb-5">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate">
                  Description : {item.description}
                </h3>
                <div className="flex items-center mt-2.5 mb-5">
                   <RatingStar/>
                  <div className="w-5" >
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-black">
                   {item.rentalPrice}$
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
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
            
          );
        })}
      </div>
      {totalCourses > 0 && <Pagination totalPage={totalPages} />}
    </div>
  );
}
