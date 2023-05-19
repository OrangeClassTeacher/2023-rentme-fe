import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Iproduct } from "@/interfaces/product";
import { userIdCon } from "@/context/userIdContext";
import BudgetDate from "@/components/global/date";
import { ICategory } from "../../../interfaces/category";
import Link from "next/link";
import { IUser } from "@/interfaces/user";
import { IComment } from "@/interfaces/comment";

function Product ():JSX.Element  {
  const [data, setData] = useState<Iproduct>();
  const [catData, setCatData] = useState([]);
  const [userData, setUserData] = useState<IUser[]>();
  const [commentData, setCommentData] = useState<IComment[]>();
  const [comment, setComment] = useState("");
  const [ren, setRen] = useState(false);
  const { userId } = useContext(userIdCon);
  const router = useRouter();
  const path = router.query;

  const { rentalEndDate, rentalStartDate } = data || {};

  useEffect(() => {
    getData();
  }, );
  function getData ():void {
    axios
      .get(`http://localhost:8000/api/item/${path._id}`)
      .then((res) => setData(res.data.result));
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => setUserData(res.data.result))
      .catch((err) => console.log(err));
    axios
      .post("http://localhost:8000/api/comments", { itemId: path._id })
      .then((res) => setCommentData(res.data.result))
      .catch((err) => console.log(err));
    }
  function createComment  (id: any):void {
    axios
      .post("http://localhost:8000/api/comment", {
        itemId: id,
        userId: userId,
        comment: comment,
      })
      .then((res) => {
        console.log(res.data.result), setRen(!ren);
      })
      .catch((err) => console.log(err));
    }
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex px-4 pt-8">
        <div className="w-2/4 h-full py-8 flex flex-col">
          <div className="h-3/4">
            <img src={data?.itemPhoto} alt="Link" className="w-full" />
          </div>
          <div className="h1/4 flex gap-3 py-5" />
        </div>
        <div className="w-2/4 ps-8 py-8 flex flex-col gap-8">
          <div>
            <h1 className="text-7xl">{data?.itemName}</h1>
            {catData.map((item: ICategory, index) => {
              if (item._id == data?.categoryId) {
                return (
                  <p key={index} className="text-gray-500">
                    {item.categoryName}
                  </p>
                );
              }
            })}
          </div>

          <p className="text-neutral-600  text-3xl">{data?.description}</p>

          <p className="text-xl text-neutral-600 flex gap-2">
            Rental Start :
            <span className="text-xl text-yellow-600">{!rentalStartDate}</span>
          </p>
          <p className="text-xl text-neutral-600 flex gap-2">
            Rental End :
            <span className="text-xl text-yellow-600">{!rentalEndDate}</span>
          </p>
          {userData?.map((user, index) => {
            if (user._id == data?.createdUser) {
              return (
                <p className="text-xl text-neutral-600 flex gap-2" key={index}>
                  CreatedUser :
                  <Link
                    href={`/userInfo/${user._id}`}
                    className="underline underline-offset-1"
                  >
                    {user.Username}
                  </Link>
                </p>
              );
            }
          })}
          <p className="text-2xl">
            Rental Price :{" "}
            <span className="text-2xl text-green-600">
              {data?.rentalPrice}$
            </span>
          </p>
          <div>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              onChange={(e):void => setComment(e.target.value)}
            >
              ...
            </textarea>
          </div>
          <div className="flex gap-8">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full w-2/4"
              onClick={():void => createComment(data?._id)}
            >
              Comment
            </button>
            <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-2/4">
              Rent
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-12 pb-12">
        {commentData && (
          <div>
            {commentData.map((com, index) => (
              <div key={index}>
                <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                  <div className="relative flex gap-4">
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                        <div>
                          {userData && (
                            <div>
                              {userData.map((user, index) => {
                                if (user._id == data?.createdUser)
                                  return (
                                    <div key={index}>
                                      <h1 className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                                        {user.Username}
                                      </h1>
                                    </div>
                                  );
                              })}
                            </div>
                          )}
                        </div>
                        <a className="text-gray-500 text-xl" href="#">
                          <i className="fa-solid fa-trash"/>
                        </a>
                      </div>
                      <p className="text-gray-400 text-sm">
                        <BudgetDate />
                      </p>
                    </div>
                  </div>
                  <p className="-mt-4 text-gray-500">{com.comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>);
}
export default Product;
