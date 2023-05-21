import React, { useState, useEffect, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { IUser } from "@/interfaces/user";

export function UserProfie({ USer }: any): JSX.Element {
  const [userData, setUserData] = useState<IUser>();
  const { userId, setUserId } = useContext(userIdCon);

  useEffect(() => {
    getUserData();
  },);
  function getUserData  ():void  {
    axios.get(`http://localhost:8000/api/user/${userId}`).then((res) => {
      setUserData(res.data.result);
    }
   )
  }
  function logOut ():void  {
    localStorage.removeItem("currentUserId");
    setUserId("")
}
  return (
    <div className="realtive">
      {USer ? (
        <div className="absolute  z-0 h-auto w-auto flex py-6 flex-col items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-500 rounded ">
          <div className="w-2/5">
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="avatar"
              className="w-full rounded-full"
            />
          </div>
          <p>{userData?.Username}</p>
          <button className="text-head w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2">
            <Link href={"/userInfo"}>Edit Profile</Link>
          </button>
          <button
            onClick={logOut}
            className="text-head  w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2"
          >
            <Link href={"/"} className="flex justify-center items-center gap-1">
              Log Out
              <FiLogOut className="h-full text-lg" />
            </Link>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <img
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt="avatar"
            className="w-12 rounded-full"
          />
          <h1>{userData?.Username}</h1>
        </div>
      )}
    </div>
  );
}
