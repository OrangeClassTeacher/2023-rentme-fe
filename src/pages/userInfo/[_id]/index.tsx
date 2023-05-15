import React, { useEffect, useState, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import Link from "next/link";
// import defaultPic from "https://t3.ftcdn.net/jpg/03/47/83/26/360_F_347832693_jCtFtvTuYuoQn7RUxqzFEvKi63SWfzYF.jpg";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
export default function Index() {
  const { userId, setUserId } = useContext(userIdCon);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState([]);
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);

  useEffect(() => {
    if (_id) {
      getProducts();
      getUserData();
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

  // console.log(productData);
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-3">
        <div className="w-full flex flex justify-between px-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/">Буцах</Link>
          </button>
        </div>

        <div className="w-full flex flex-col pt-3">
          <div className="w-full flex flex-col">
            <h1 className="text-2xl ps-5">Хэрэглэгчийн мэдээлэл</h1>

            <div className="flex w-full flex-col h-60 justify-center items-center gap-4 py-8">
              {userData?.profilePic ? (
                <img
                  src={userData.profilePic}
                  alt="avatar"
                  className="w-300 rounded-full h-300"
                />
              ) : (
                <img
                  src="https://t3.ftcdn.net/jpg/03/47/83/26/360_F_347832693_jCtFtvTuYuoQn7RUxqzFEvKi63SWfzYF.jpg"
                  alt="Profile"
                  className="w-auto rounded h-auto"
                />
              )}

              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Username :
                </h1>
                <h1 className="text-xl w-2/4 text-start text-black">
                  {userData?.Username}
                </h1>
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  E-mail :
                </h1>
                <h1 className="text-xl w-2/4 text-start text-black">
                  {userData?.email}
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
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 py-11">
            <h1 className="text-2xl">Хэрэглэгчийн оруулсан зар</h1>
            <div className="w-full flex flex  pt-8 gap-10 overflow-x-auto">
              {productData?.map((item, index) => {
                console.log(productData);
                return (
                  <div
                    key={index}
                    className="border w-1/5 border-teal-600 rounded-lg"
                  >
                    <div>
                      <img
                        src={item.itemPhoto}
                        alt="itemPhoto"
                        className="w-full h-auto border rounded"
                      />
                      <h1 className="text-xl text-black text-center">
                        {" "}
                        {item.itemName}
                      </h1>
                      <h3 className="text-base text-black truncate">
                        Description : {item.description}
                      </h3>
                      <span className="text-sm text-black pt-5">
                        Rental price : {item.rentalPrice}$
                      </span>
                      <div className="px-20 py-5"></div>
                      <div className="p-3">
                        <button className="text-rose-500  outline outline-offset-2 outline-white rounded px-3">
                          <Link
                            href={`/item/${item._id}`}
                            className="flex items-center gap-1"
                          >
                            Дэлгэрэнгүй
                            <AiOutlineArrowRight className="pt-1 text-base" />
                          </Link>
                        </button>
                      </div>
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
