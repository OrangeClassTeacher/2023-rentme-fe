import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Iproduct } from "@/interfaces/product";
import { ICategory } from "../../interfaces/category";
import { Utils } from "../../utils/helper";
export default function Index(): JSX.Element {
  const [proData, setProData] = useState<Iproduct>();
  const [thumbImg, setThumbImg] = useState("");
  const [Images, setImages] = useState([]);
  const [catData, setCatData] = useState([]);
  const createProd = (event: any): void => {
    event.preventDefault();
    const data: Iproduct = {
      createdUser: localStorage.getItem("currentUserId") || "",
      itemName: event.target.itemName.value || "",
      itemPhoto: thumbImg || "",
      itemSlidePhoto: Images,
      description: event.target.description.value || "",
      categoryId: event.target.category.value || "",
      phoneNumber: event.target.phoneNumber.value || 11111111,
      rating: event.target.rating.value || 5,
      rentalPrice: event.target.rentalPrice.value || 1000,
      rentalStartDate: event.target.rentStart.value || "2023-12-12",
      rentalEndDate: event.target.rentEnd.value || "2023-12-13",
    };
    setProData(data);
    axios
      .post(`${Utils.API_URL}/item`, proData)
      .then((res) => console.log(res.data.result))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/category`)
      .then((res) => setCatData(res.data.result));
  }, []);

  return (
    <div className="py-8">
      <form onSubmit={createProd} className="">
        <h1 className="text-xl text-center pb-3">Add Rental Item</h1>
        <div className="flex flex-col gap-1 items-center w-full py-8">
          <input
            placeholder="ItemName..."
            name="itemName"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="Item Photo..."
            type={"file"}
            name="itemPhoto"
            onChange={(e): void => {
              const url = "https://api.cloudinary.com/v1_1/lwvom2iu/upload";
              const formData = new FormData();
              const file: any = e.target.files;
              formData.append("file", file);
              formData.append("api_key", "384825931744178");
              formData.append("folder", "RentMeProduct");
              formData.append("upload_preset", "lwvom2iu");

              axios.post(url, formData).then((res) => {
                setThumbImg(res.data.secure_url);
              });
            }}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="Item Photo..."
            type={"file"}
            multiple
            name="itemSlidePhoto"
            onChange={async (e): Promise<void> => {
              console.log(e.target.value);
              const url = "https://api.cloudinary.com/v1_1/lwvom2iu/upload";
              const formData = new FormData();
              const file: FileList | null = e.target.files;
              const images = [];
              if (file != null) {
                for (let i = 0; i < file.length; i++) {
                  images.push(file[i]);
                }
              }
              console.log(images);
              const promise = await Promise.all(
                images.map((file) => {
                  formData.append("file", file);
                  formData.append("api_key", "384825931744178");
                  formData.append("folder", "RentMeProduct");
                  formData.append("upload_preset", "lwvom2iu");
                  return axios.post(url, formData);
                })
              );
              const newArr: any = [];
              console.log(promise);
              promise.map((e) => {
                console.log(e);
                newArr.push(e.data.secure_url);
                setImages(newArr);
              });
            }}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="Description"
            name="description"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <select
            placeholder="categoryId"
            name="category"
            className="text-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          >
            {catData.map((item: ICategory, index) => (
              <option value={item._id} key={index}>
                {item.categoryName}
              </option>
            ))}
          </select>
          <input
            placeholder="Phone Number"
            name="phoneNumber"
            type="number"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="rate"
            name="rating"
            type={"number"}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="Rental Price"
            name="rentalPrice"
            type={"number"}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="Start Date"
            name="rentStart"
            type={"date"}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500  dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            placeholder="End Date"
            name="rentEnd"
            type={"date"}
            className="text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-1/3 p-2.5 dark:bg-white dark:border-teal-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <button
            className="text-teal-500 outline outline-offset-2 outline-teal-500 rounded px-3 mt-3  "
            type="submit"
          >
            Create Item
          </button>
        </div>
      </form>
    </div>
  );
}
