import react from "react";
import Image from "next/image";
import Link from "next/link";
import { Iproduct } from "../../interfaces/product";
import { useState, useEffect } from "react";
import axios from "axios";

export function Category() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const [productData, setProductData] = useState<Iproduct[]>();
  const [proData, setProData] = useState<Iproduct[]>();
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    getCatData();
  }, []);
  const getCatData = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative w-full overflow-hidden  dark:bg-white pb-8">
      <div className="w-full flex bg-head text-white sticky top-0 z-[50] bg-gradient-to-r from-gray-900 to-gray-500 z-0">
        {catData.map((item, index) => {
          if (!item.parentId) {
            return (
              <select
                key={index}
                className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              >
                <option value={item._id}>{item.categoryName}</option>
                {catData.map((e, index) => {
                  if (e.parentId == item._id) {
                    return (
                      <option key={index} value={item._id}>
                        {e.categoryName}
                      </option>
                    );
                  }
                })}
              </select>
            );
          }
        })}
      </div>
    </div>
  );
}
