import React, { useEffect, useState, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import Link from "next/link";
import { GrSend } from "react-icons/gr";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
export default function Index() {
  const { userId, setUserId } = useContext(userIdCon);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState([]);
  const [catData, setCatData] = useState([]);
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);

  useEffect(() => {
    if (_id) {
      getProducts();
      getUserData();
      getCategories();
    }
  }, [_id]);

  const getUserData = () => {
    if (_id) {
      axios
        .get(`http://localhost:8000/api/user/${_id}`)
        .then((res) => setUserData(res.data.result));
    } else {
      alert("UserId not found");
    }
  };
  const getProducts = () => {
    if (_id) {
      axios
        .post("http://localhost:8000/api/itemUser", { createdUser: _id })
        .then((res) => {
          setProductData(res.data.result), console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  };
  const getCategories = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };

  // console.log(productData);
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center py-3">
        <div className="w-full flex justify-between px-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/">Буцах</Link>
          </button>
        </div>

        <div className="w-full flex pt-3">
          <div className="w-2/4 flex flex-col">
            <h1 className="text-2xl ps-5 pb-8">Хэрэглэгчийн мэдээлэл</h1>

            <div className="flex w-full flex-col justify-center items-center gap-4 py-8">
              <img
                src={userData?.profilePic}
                alt="avatar"
                className="w-2/5 rounded-full"
              />

              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Username :
                </h1>
                <h1 className="text-xl w-2/4 text-start text-black">
                  {userData?.Username}
                </h1>
              </div>

              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black ">
                  Phone number :
                </h1>
                <a href="tel" className="text-xl w-2/4 text-start text-black">
                  {userData?.phoneNumber}
                </a>
              </div>

              <div className="w-2/3 flex pt-3">
                <textarea
                  id="message"
                  className="w-3/4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <div className="w-full w-1/4 flex justify-end py-4 px-6">
                  <button className="bg-yellow-500 w-full flex justify-center items-center w-2/4 hover:bg-yellow-400 text-white font-bold border-b-4 border-yellow-700 hover:border-yellow-500 rounded ">
                    Send
                  </button>
                </div>
              </div>
              <div className="w-2/3 flex justify-evenly pt-5">
                <button className="bg-green-500 w-1/4 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                  Chat
                </button>
                <button className="bg-blue-500 w-1/4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/4 flex flex-col gap-4">
            <h1 className="text-2xl">Хэрэглэгчийн оруулсан зар</h1>
            <div className="w-full flex flex-wrap gap-10 h-[85vh] overflow-auto">
              {productData?.map((item, index) => {
                console.log(productData);

                return (
                  <div
                    key={index}
                    className=" lg:max-w-full  rounded overflow-hidden shadow-lg"
                  >
                    <Image
                      src={item.itemPhoto}
                      className="w-full"
                      width={600}
                      height={600}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {item.itemName}
                      </div>
                      <p className="text-gray-700 text-base">
                        {item.description}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {catData.map((cat, index) => {
                        if (cat?._id == item?.categoryId) {
                          return (
                            <span
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                              key={index}
                            >
                              #{cat?.categoryName}
                            </span>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
