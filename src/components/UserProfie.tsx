import React, { useState, useEffect, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { IUser } from "@/interfaces/user";
import { useRouter } from "next/router";
import { Utils } from "../utils/helper";
import { TiDeleteOutline } from "react-icons/ti";

export function UserProfie({ USer, setUSer }: any): JSX.Element {
  const [userData, setUserData] = useState<IUser>();
  const { userId, setUserId } = useContext(userIdCon);
  const router = useRouter();

  useEffect(() => {
    getUserData();
  });
  function getUserData(): void {
    axios.get(`${Utils.API_URL}/user/${userId}`).then((res) => {
      setUserData(res.data.result);
    });
  }
  function logOut(): void {
    localStorage.removeItem("currentUserId");
    setUserId("");
    router.push("/");
  }
  return (
    <div className="realtive bg-gray-500 w-100 opacity-100">
      {USer ? (
        <div className="absolute right-0 z-0 h-auto w-auto flex py-6 flex-col items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-500 rounded mr-12">
          <div className="w-full px-8 flex justify-end">
            <button className="text-2xl text-white">
              <TiDeleteOutline />
            </button>
          </div>
          <div className="w-2/5">
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="avatar"
              className="w-full rounded-full"
            />
          </div>
          <p className="text-white text-2xl">{userData?.Username}</p>
          <button className="text-head w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2">
            <Link href={"/addProduct"} className="text-white text-xl">
              Add Rental Item
            </Link>
          </button>
          <button className="text-head w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2">
            <Link href={"/userInfo"} className="text-white text-xl">
              Edit Profile
            </Link>
          </button>
          <button
            onClick={logOut}
            className="text-head  w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2"
          >
            <Link
              href={"/"}
              className="flex justify-center items-center gap-1 text-white text-xl"
            >
              Log Out
              <FiLogOut className="h-full text-lg" />
            </Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt="avatar"
            className="w-12 rounded-full"
          />
          <h1 className="text-white">{userData?.Username}</h1>
        </div>
      )}
    </div>
  );
}
