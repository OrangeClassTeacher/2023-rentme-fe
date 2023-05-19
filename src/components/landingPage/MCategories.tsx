import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProductCategory } from "@/interfaces/product";

export function MCategories(): JSX.Element {
  const [catData, setCatData] = useState<IProductCategory[]>([]);
  const [catID, setCatID] = useState<IProductCategory[]>([]);

  useEffect(() => {
    getCatData(), getData();
  }, []);
  const getCatData = ():void => {
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };
  const getData = ():void => {
    axios
      .get("http://localhost:8000/api/items")
      .then((res) => setCatID(res.data.result))
      .catch((err) => console.log(err));
  };
  console.log(catID, catData);
  return (
    <div className="w-full flex justify-evenly py-4">
      {catID.map((item, index) => (
        <div key={index} className="py-8 px-8 border-2 border-indigo-600 ">
          {catData.map((e, index) => {
            if (e._id == item._id) {
              return <h1 key={index}>{e.categoryName}</h1>;
            }
          })}
        </div>
      ))}
    </div>
  );
}
