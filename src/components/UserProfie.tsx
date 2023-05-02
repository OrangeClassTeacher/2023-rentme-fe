import React, { useState, useEffect, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

export const UserProfie = ({ USer, setUSer }) => {
  const [userData, setUserData] = useState({});
  const { userId, setUserId } = useContext(userIdCon);

  useEffect(() => {
    getUserData();
  }, [userId]);
  const getUserData = () => {
    axios.get(`http://localhost:8000/api/user/${userId}`).then((res) => {
      console.log(res.data.data);
      setUserData(res.data.result);
    });
  };
  console.log(userData);
  const logOut = () => {
    localStorage.removeItem("currentUserId");
    setUserId("");
  };

  return (
    <div className="realtive">
      {USer ? (
        <div className="absolute z-0 h-80 w-48 flex flex-col items-center gap-3 bg-indigo-500 rounded ">
          <div className="w-2/5">
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="avatar"
              className="w-full rounded-full"
            />
          </div>
          <h1>
            {userData.lastName} {userData.firstName}
          </h1>
          <a href="#">{userData.email}</a>
          <a href="tel">Tel : {userData.phoneNumber}</a>

          <button
            onClick={logOut}
            className="text-head  w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center gap-2"
          >
            Log Out
            <FiLogOut className="h-full text-lg" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <img
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt="avatar"
            className="w-12 rounded-full"
          />
          <h1>{userData.firstName}</h1>
        </div>
      )}
    </div>
  );
};
