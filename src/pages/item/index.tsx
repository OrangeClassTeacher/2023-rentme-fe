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
<<<<<<< HEAD
import SortDropDown from "@/components/global/SortDropdown";
=======
// import SortDropDown from "@/components/global/SortDropdown";
>>>>>>> 1c052cc (f)
export default function Index() {
  const [productData, setProductData] = useState<Iproduct[]>();

  const { search } = useContext<any>(SearchContext);
  const { userId } = useContext(userIdCon);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = () => {
    if (search && search != "") {
      axios
        .post("http://localhost:8000/api/items", { searchText: search })
        .then((res) => setProductData(res.data.result));
    } else if (search == "" || search === undefined) {
      axios
        .get("http://localhost:8000/api/item")
        .then((res) => setProductData(res.data.result));
    }
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
            <Link href="/addProduct">Create news</Link>
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
              className="border w-1/5 border-teal-600 rounded-lg"
            >
              <div>
                <img
                  src={item.itemPhoto}
                  alt="itemPhoto"
                  className="w-full h-autp"
                />
                <h1 className="text-xl text-black "> {item.itemName}</h1>
                <h3 className="text-base text-black">
                  Description : {item.description}
                </h3>
                <span className="text-sm text-black pt-5">
                  Rental price : {item.rentalPrice}$
                </span>
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

                <img
                  src={item.itemPhoto}
                  alt="itemPhoto"
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <h1 className="text-xl text-black "> {item.itemName}</h1>
                  <h3 className="text-base text-black truncate">
                    {item.description}
                  </h3>
                  <h3>{item.rentalPrice}$</h3>
                  <div className="p-3">
                    <RatingStar />
                  </div>
                  <button className="w-full p-3 bg-rose-500 border border-white text-white outline outline-offset-2 outline-white rounded">
                    <Link href={`/item/${item._id}`}>Product Detail</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
