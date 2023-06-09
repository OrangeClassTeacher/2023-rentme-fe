import React, { useEffect, useState, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { IUser } from "@/interfaces/user";
import { Iproduct } from "@/interfaces/product";
import { ICategory } from "@/interfaces/category";
import { Utils } from "../../../utils/helper";
export default function Index(): JSX.Element {
  const { userId } = useContext(userIdCon);
  const [userData, setUserData] = useState<IUser>();
  const [productData, setProductData] = useState<Iproduct[]>();
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [unfollow, setUnfollow] = useState(false);
  const [catData, setCatData] = useState<ICategory[]>();
  const [userData2, setUserData2] = useState<IUser>();
  const [followNum, setFollowNum] = useState<number>();
  const router = useRouter();
  const { _id } = router.query;
  const { followers, following }: any = userData || {};
  useEffect(() => {
    if (_id) {
      getProducts();
      getUserData();
      getCategories();
    }
    if (followers && userId) {
      followers.map((follower: any) => {
        if (follower == userId) {
          setUnfollow(true);
        }
      });
    }
  }, []);

  function getUserData(): void {
    if (_id) {
      axios
        .get(`${Utils.API_URL}/user/${_id}`)
        .then((res) => setUserData(res.data.result));
      axios
        .get(`${Utils.API_URL}/user/${userId}`)
        .then((res) => setUserData2(res.data.result))
        .catch((Err) => console.log(Err));
    } else {
      alert("UserId not found");
    }
  }
  function getProducts(): void {
    if (_id) {
      axios
        .post(`${Utils.API_URL}/itemUser`, { createdUser: _id })
        .then((res) => {
          setProductData(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  }
  function getCategories(): void {
    axios
      .get(`${Utils.API_URL}/category`)
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  }
  function followReq(id: any): void {
    if (localStorage.getItem("currentUserId")) {
      if (followers) {
        const newArr = [...followers];

        newArr.push(localStorage.getItem("currentUserId"));
        axios
          .put(`${Utils.API_URL}/user/${id}`, { followers: newArr })
          .then(() => {
            setFollowNum(newArr.length + 1);

            if (userData2) {
              const newArr = [...userData2.following];
              newArr.push(id);
              // console.log(newArr);
            }
            axios
              .put(`${Utils.API_URL}/user/${userId}`, {
                following: newArr,
              })
              .then(() => setUnfollow(true))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    } else {
      alert("Та нэвтэрч орно уу!!!");
      router.push("/login");
    }
  }
  function Unfollow(id: any): void {
    if (followers) {
      const newArr: any = [];
      followers.map((follower: any) => {
        if (follower != userId) {
          newArr.push(follower);
          axios
            .put(`${Utils.API_URL}/user/${id}`, { followers: newArr })
            .then(() => {
              setUnfollow(false), setFollowNum(newArr.length + 1);
            })
            .catch((err) => console.log(err));
        }
      });
    }
  }
  console.log(unfollow);
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center py-3 relative">
        {showFollowers ? (
          <div className="absolute bg-black">
            <h1 className="text-3xl text-white">Followers</h1>
            {followers?.map((item: any, index: number) => (
              <div key={index}>
                <h1 className="text-white">{item}</h1>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {showFollowing ? (
          <div className="absolute bg-black">
            <h1 className="text-3xl text-white">Following </h1>
            {following?.map((item: any, index: number) => (
              <div key={index}>
                <h1 className="text-white">{item}</h1>
              </div>
            ))}
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
              <div className="w-2/3 flex justify-center">
                <h1 className="text-2xl w-2/4 text-center text-black">
                  {userData?.Username}
                </h1>
              </div>
              <div className="w-2/3 flex justify-evenly">
                <div className="w-1/3 flex flex-col items-center border-r-2 border-black">
                  <button
                    onClick={(): void => setShowFollowers(!showFollowers)}
                  >
                    Followers
                  </button>
                  <p className="text-center">
                    {" "}
                    {followNum ? followNum : followers?.length + 1}
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center border-r-2 border-black">
                  <button
                    onClick={(): void => setShowFollowing(!showFollowing)}
                  >
                    {" "}
                    Following{" "}
                  </button>
                  <p>{following?.length}</p>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                  <p>Posts</p> <p>{productData?.length}</p>
                </div>
              </div>

              <div className="w-2/3 flex justify-evenly pt-5">
                <button className="bg-green-500 w-1/4 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                  Chat
                </button>
                {unfollow ? (
                  <button
                    onClick={(): void =>
                      Unfollow(userData?._id ? userData._id : "")
                    }
                    className="bg-blue-500 w-1/4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={(): void =>
                      followReq(userData?._id ? userData._id : "")
                    }
                    className="bg-blue-500 w-1/4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="w-2/4 flex flex-col gap-4">
            <h1 className="text-2xl">Хэрэглэгчийн оруулсан зар</h1>
            <div className="w-full flex flex-wrap gap-10 h-[85vh] overflow-auto">
              {productData?.map((item, index) => {
                if (item.status != "Rented") {
                  return (
                    <div
                      key={index}
                      className=" lg:max-w-full  rounded overflow-hidden shadow-lg"
                    >
                      <img
                        src={item.itemPhoto}
                        className="w-full"
                        alt="product"
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
                        {catData?.map((cat, index) => {
                          if (cat._id == item.categoryId) {
                            return (
                              <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                key={index}
                              >
                                #{cat.categoryName}
                              </span>
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
