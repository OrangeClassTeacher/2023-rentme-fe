import React from "react";
import axios from "axios";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { Iproduct } from "../../interfaces/product";
import { SearchContext } from "@/context/searchTextContext";
import { userIdCon } from "@/context/userIdContext";
import RatingStar from "@/components/global/RatingStar";
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
  return (
    <div className="bg-white">
      <div className="text-center p-4">
        {userId ? (
          <button className="text-teal-500 outline outline-offset-2 outline-teal-500 bg-white rounded px-3">
            <Link href="/addProduct">Бараа оруулах</Link>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap justify-between gap-4 py-6 px-8">
        {productData?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-1/5 h-1/6 text-center border border-teal-500 rounded"
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
                <p className="text-sm text-black">
                  Phone :
                  <a
                    href="tel"
                    className="underline hover:underline-offset-4 text-black"
                  >
                    {item.phoneNumber}
                  </a>
                </p>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
