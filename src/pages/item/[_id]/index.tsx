import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "@/interfaces/product";
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
    <div className="w-full flex justify-center">
      <div className="w-96">
        <img src={data?.itemPhoto} className="w-full" />
        <h1>{data?.itemName}</h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default Product;
