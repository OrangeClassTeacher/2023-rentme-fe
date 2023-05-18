import React, { useEffect, useState, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import Link from "next/link";
import { GrSend } from "react-icons/gr";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { log } from "console";
export default function Index() {
  const { userId, setUserId } = useContext(userIdCon);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [catData, setCatData] = useState([]);
  const [userData2, setUserData2] = useState({});
  const router = useRouter();
  const { _id } = router.query;
  const { followers, following }: any = userData;
  useEffect(() => {
    if (_id) {
      getProducts();
      getUserData();
      getCategories();
    }
  }, [_id, followers, following]);
  // useEffect(() => {
  //   getProducts();
  //   getUserData();
  //   getCategories();
  // }, [followers, following]);

  const getUserData = () => {
    if (_id) {
      axios
        .get(`http://localhost:8000/api/user/${_id}`)
        .then((res) => setUserData(res.data.result));
      axios
        .get(`http://localhost:8000/api/user/${userId}`)
        .then((res) => setUserData2(res.data.result))
        .catch((Err) => console.log(Err));
    } else {
      alert("UserId not found");
    }
  };
  const getProducts = () => {
    if (_id) {
      axios
        .post("http://localhost:8000/api/itemUser", { createdUser: _id })
        .then((res) => {
          setProductData(res.data.result);
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
  const followReq = (id) => {
    const newArr = [...followers];

    newArr.push(localStorage.getItem("currentUserId"));
    axios
      .put(`http://localhost:8000/api/user/${id}`, { followers: newArr })
      .then((res) => {
        let newArr = [...userData2?.following];
        newArr.push(id);
        axios
          .put(`http://localhost:8000/api/user/${userId}`, {
            following: newArr,
          })
          .then((res) => console.log("Success"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  // console.log(productData);
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center py-3 relative">
        {showFollowers ? (
          <div className="absolute bg-black">
            <h1 className="text-3xl text-white">Followers</h1>
            {followers?.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <h1 className="text-white">{item}</h1>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {showFollowing ? (
          <div className="absolute bg-black">
            <h1 className="text-3xl text-white">Following </h1>
            {following?.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <h1 className="text-white">{item}</h1>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

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
                <div className="w-1/3 flex flex-col items-center border-r-2 border-black">
                  <button onClick={() => setShowFollowers(!showFollowers)}>
                    Followers
                  </button>
                  <p className="text-center"> {followers?.length}</p>
                </div>
                <div className="w-1/3 flex flex-col items-center border-r-2 border-black">
                  <button onClick={() => setShowFollowing(!showFollowing)}>
                    {" "}
                    Following{" "}
                  </button>
                  <p>{following?.length}</p>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                  <p>Posts</p> <p>{productData.length}</p>
                </div>
              </div>
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

              <div className="w-2/3 flex justify-evenly pt-5">
                <button className="bg-green-500 w-1/4 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                  Chat
                </button>
                <button
                  onClick={() => followReq(userData._id)}
                  className="bg-blue-500 w-1/4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/4 flex flex-col gap-4">
            <h1 className="text-2xl">Хэрэглэгчийн оруулсан зар</h1>
            <div className="w-full flex flex-wrap gap-10 h-[85vh] overflow-auto">
              {productData?.map((item, index) => {
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
