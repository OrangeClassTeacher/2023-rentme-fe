import React, { useEffect, useState } from "react";
import axios from "axios";

export const MCategories = () => {
  const [catData, setCatData] = useState([]);
  const [catID, setCatID] = useState([]);

  useEffect(() => {
    getCatData(), getData();
  }, []);
  const getCatData = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:8000/api/items")
      .then((res) => setCatID(res.data.result))
      .catch((err) => console.log(err));
  };
  console.log(catID, catData);
  return (
    <div className="w-full flex justify-evenly py-4">
      {catID.map((item, index) => {
        return (
          <div key={index} className="py-8 px-8 border-2 border-indigo-600 ">
            {catData.map((e, index) => {
              if (e?._id == item?._id) {
                return <h1 key={index}>{e?.categoryName}</h1>;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
