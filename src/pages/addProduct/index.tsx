import React from "react";
import axios from "axios";
import { useState } from "react";
import { Iproduct } from "@/interfaces/product";
export default function Index() {
  const [proData, setProData] = useState<Iproduct>();
  const createProd = (event: any) => {
    event.preventDefault();
    const data: Iproduct = {
      itemName: event.target.itemName.value,
      itemPhoto: event.target.itemPhoto.value,
      description: event.target.description.value,
      categoryId: event.target.category.value,
      phoneNumber: event.target.phoneNumber.value,
      rating: event.target.rating.value,
      rentalPrice: event.target.rentalPrice.value,
      rentalStartDate: event.target.rentStart.value,
      rentalEndDate: event.target.rentEnd.value,
    };
    setProData(data);
    axios
      .post("http://localhost:8000/api/item", proData)
      .then((res) => console.log(res.data.result));
  };
  console.log(proData);

  return (
    <div className="py-8">
      <form onSubmit={createProd} className="">
        <h1 className="text-xl text-center pb-3">Add Rental Item</h1>
        <div className="flex flex-col gap-1 items-center w-full py-8">
          <input
            placeholder="ItemName..."
            name="itemName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="Item Photo..."
            name="itemPhoto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="Description"
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="categoryId"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="Phone Number"
            name="phoneNumber"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="rate"
            name="rating"
            type={"number"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="Rental Price"
            name="rentalPrice"
            type={"number"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="Start Date"
            name="rentStart"
            type={"date"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            placeholder="End Date"
            name="rentEnd"
            type={"date"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="text-indigo-500 outline outline-offset-2 outline-blue-500 rounded px-3 mt-3  "
            type="submit"
          >
            Create Item
          </button>
        </div>
      </form>
    </div>
  );
}
