import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "@/interfaces/product";
import Link from "next/link";
const Product = () => {
  const [data, setData] = useState<Iproduct>();
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
  };
  console.log(data);

  return (
    <div className="w-full">
      <div className="px-8 py-3">
        <button>
          <Link
            href="/item"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Буцах
          </Link>
        </button>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-1/3">
          <img src={data?.itemPhoto} className="w-full" />
          <div className="w-full flex ">
            {data?.itemSlidePhoto?.map((item, index) => {
              return <img key={index} src={item} alt="" className="w-1/3" />;
            })}
          </div>
          <h1>{data?.itemName}</h1>
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
