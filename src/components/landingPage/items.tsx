import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export const Items = () => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    getItemData();
  }, []);
  const getItemData = () => {
    axios
      .get("http://localhost:8000/api/itemsDate")
      .then((res) => setItemData(res.data.result))
      .catch((err) => console.log(err));
  };
  console.log(itemData);

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="ps-8 text-3xl">Шинээр нэмэгдсэн</h1>
      <div className="w-full flex flex-wrap justify-evenly gap-2">
        {itemData.map((item, index) => {
          return (
            <div key={index} className="w-1/5">
              <Image
                src={item.itemPhoto}
                alt=""
                className="w-100"
                width={300}
                height={300}
              />
              <h1>{item?.itemName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
