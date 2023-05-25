import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProductCategory } from "@/interfaces/product";
import { Utils } from "../../utils/helper";

export function MCategories(): JSX.Element {
  const [catData, setCatData] = useState<IProductCategory[]>([]);
  const [catID, setCatID] = useState<IProductCategory[]>([]);

  useEffect(() => {
    getCatData(), getData();
  }, []);
  const getCatData = (): void => {
    axios
      .get(`${Utils.API_URL}/category`)
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };
  const getData = (): void => {
    axios
      .get(`${Utils.API_URL}/items`)
      .then((res) => setCatID(res.data.result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full flex justify-evenly pb-4">
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
