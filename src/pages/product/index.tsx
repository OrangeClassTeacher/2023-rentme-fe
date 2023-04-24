import React from "react";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { Iproduct } from "../../interfaces/product";
import { SearchContext } from "@/context/searchTextContext";
export default function Index() {
  const [productData, setProductData] = useState<Iproduct[]>();
  const [proData, setProData] = useState<Iproduct[]>();
  const { search } = useContext<any>(SearchContext);

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
    <div className="flex flex-wrap gap-4 py-6 ps-4">
      <button>
        <Link href="/addProduct">Create news</Link>
      </button>
      {productData?.map((item, index): JSX.Element => {
        return (
          <div
            key={index}
            className="w-96 py-4 text-center border border-indigo-500 rounded"
          >
            <h1 className="text-xl"> {item.itemName}</h1>
            <h3 className="text-base">Description : {item.description}</h3>
            <p className="text-sm">
              Phone :
              <a href="tel" className="underline hover:underline-offset-4">
                {item.phoneNumber}
              </a>
            </p>
            <span className="text-sm">Rental price : {item.rentalPrice}$</span>
          </div>
        );
      })}
    </div>
  );
}
