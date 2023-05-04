import React from "react";
import axios from "axios";
import Link from "next/link";

import { useState, useEffect, useContext } from "react";
import { Iproduct } from "../../interfaces/product";
import { SearchContext } from "@/context/searchTextContext";
import { userIdCon } from "@/context/userIdContext";
import RatingStar from "@/components/global/RatingStar";
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
      <div className="grid grid-cols-4 gap-10 py-6 px-8">
        {productData?.map((item, index): JSX.Element => {
          return (
            <div
              key={index}
              className="border border-teal-600 rounded-lg"
            >
              
              <img
                src={item.itemPhoto}
                alt="itemPhoto"
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="p-5">
              <h1 className="text-xl text-black "> {item.itemName}</h1>
              <h3 className="text-base text-black truncate">{item.description}</h3>
              <div className="p-3"><RatingStar/></div>
              <button className="w-full p-3 bg-rose-500 border border-white text-white outline outline-offset-2 outline-white rounded">
                  <Link href={`/item/${item._id}`}>Product Detail</Link>
                </button> 
              </div>
            </div>
          );
        })} 
      </div>
    </div>
  );
}