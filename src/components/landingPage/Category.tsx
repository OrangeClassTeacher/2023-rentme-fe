import { useState, useEffect } from "react";
import axios from "axios";
import { IProductCategory } from "../../interfaces/product";
import { Utils } from "../../utils/helper";

export function Category(): JSX.Element {
  const [catData, setCatData] = useState<IProductCategory[]>([]);
  useEffect(() => {
    getCatData();
  }, []);
  const getCatData = (): void => {
    axios
      .get(`${Utils.API_URL}/category`)
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative w-full overflow-hidden  dark:bg-whit bg-gradient-to-r from-gray-900 to-gray-500 z-0 ease-out duration-300">
      <div className="w-full flex bg-head text-white sticky top-0 ">
        {catData.map((item: IProductCategory, index) => {
          if (!item.parentId) {
            return (
              <select
                key={index}
                className="text-black w-full py-[12px] px-[22px]  focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular bg-gray-500 z-0 ease-out duration-300"
              >
                <option className="text-white">Select ...</option>
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
