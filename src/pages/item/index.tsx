import React from "react";
import axios from "axios";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useState, useEffect, useContext } from "react";
import { Iproduct } from "../../interfaces/product";
import { SearchContext } from "@/context/searchTextContext";
import { userIdCon } from "@/context/userIdContext";
export default function Index() {
  const [productData, setProductData] = useState<Iproduct[]>();
  const [proData, setProData] = useState<Iproduct[]>();
  const { search } = useContext<any>(SearchContext);
  const { userId } = useContext(userIdCon);

  useEffect(() => {
    getData();
  }, [search]);
  //ji

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
    <div>
      <div className="text-center p-4">
        {userId ? (
          <button className="text-teal-500 outline outline-offset-2 outline-teal-500 bg-white rounded px-3">
            <Link href="/addProduct">Бараа оруулах</Link>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap gap-4 py-6 px-8 ">
        {productData?.map((item, index): JSX.Element => {
          return (
            <div
              key={index}
              className="w-1/5 text-center border border-teal-500 rounded"
            >
              <img
                src={item.itemPhoto}
                alt="itemPhoto"
                className="w-full h-autp"
              />
              <h1 className="text-xl "> {item.itemName}</h1>
              <h3 className="text-base">Description : {item.description}</h3>
              <p className="text-sm">
                Phone :
                <a href="tel" className="underline hover:underline-offset-4">
                  {item.phoneNumber}
                </a>
              </p>
              <span className="text-sm">
                Rental price : {item.rentalPrice}$
              </span>
              <div className="p-3">
                <button className="text-rose-500  outline outline-offset-2 outline-white rounded px-3">
                  <Link
                    href={`/item/${item._id}`}
                    className="flex items-center gap-1"
                  >
                    Дэлгэрэнгүй{" "}
                    <AiOutlineArrowRight className="pt-1 text-base" />
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
