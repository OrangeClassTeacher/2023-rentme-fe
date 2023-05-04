import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "@/interfaces/product";
import Link from "next/link";
const Product = () => {
  const [data, setData] = useState<Iproduct>();
  const [catData, setCatData] = useState([]);
  const router = useRouter();
  const path = router.query;
  console.log(path);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`http://localhost:8000/api/item/${path._id}`)
      .then((res) => setData(res.data.result));
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };
  console.log(data);

  return (
    <div className="w-full flex px-4 py-8">
      <div className="w-2/4 h-full py-8 flex flex-col">
        <div className="h-3/4">
          <img src={data?.itemPhoto} alt="" className="w-full" />
        </div>
        <div className="h1/4 flex gap-3 py-5"></div>
      </div>
      <div className="w-2/4 ps-8 py-8 flex flex-col gap-8">
        <div>
          <h1 className="text-7xl">{data?.itemName}</h1>
          {catData.map((item, index) => {
            if (item?._id == data?.categoryId) {
              return (
                <p key={index} className="text-gray-500">
                  {item.categoryName}
                </p>
              );
            }
          })}
        </div>

        <p className="text-neutral-600  text-3xl">{data?.description}</p>

        <p className="text-xl text-neutral-600 flex gap-2">
          Rental Start :
          <span className="text-xl text-yellow-600">
            {data?.rentalStartDate}
          </span>
        </p>
        <p className="text-xl text-neutral-600 flex gap-2">
          Rental End :
          <span className="text-xl text-yellow-600">{data?.rentalEndDate}</span>
        </p>
        <p className="text-xl text-neutral-600 flex gap-2">
          Created user :{" "}
          <Link href="/" className="underline underline-offset-1">
            GAnzoo
          </Link>
        </p>
        <p className="text-2xl">
          Rental Price :{" "}
          <span className="text-2xl text-green-600">{data?.rentalPrice}$</span>
        </p>
        <div className="flex gap-8">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-2/4">
            <Link href="/item"> Буцах</Link>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-2/4">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
