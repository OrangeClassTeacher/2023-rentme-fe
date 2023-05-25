import React, { useState, useEffect } from "react";
import axios from "axios";
import { Utils } from "../../utils/helper";
import { IUser } from "../../interfaces/user";
import { Iproduct } from "../../interfaces/product";
// import Image from "next/image";

export default function ReqInfo(): JSX.Element {
  const [proId, setProId] = useState("");
  const [itemData, setItemData] = useState<Iproduct>();
  const [userData, setUserData] = useState<IUser[]>();
  const { requests }: any = itemData || [];
  useEffect(() => {
    setProId(localStorage.getItem("proId") || "");
  }, []);

  useEffect(() => {
    getItemData();
  }, [proId]);

  useEffect(() => {
    getUserData();
  }, [itemData]);

  const getItemData = () => {
    if (proId) {
      axios
        .get(`${Utils.API_URL}/item/${proId}`)
        .then((res) => setItemData(res.data.result))
        .catch((err) => console.log(err));
    }
  };
  const getUserData = () => {
    axios
      .get(`${Utils.API_URL}/users`)
      .then((res) => setUserData(res.data.result))
      .catch((err) => console.log(err));
  };
  const confirmReq = (id: any) => {
    console.log(id);

    if (proId) {
      const newArr = [...requests];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].userId == id) {
          newArr[i].status = "Rented";
          console.log(newArr);
        }
      }
      axios
        .put(`${Utils.API_URL}/item/${proId}`, {
          requests: newArr,
          status: "Rented",
        })
        .then((res) => console.log("Confirm success"))
        .catch((err) => console.log(err));
    }
  };
  //   console.log(userData);
  //   console.log(requests);

  return (
    <div className="flex flex-col sdkd">
      {requests?.map((item: any, index: number) => {
        return userData?.map((user, index) => {
          if (item.userId == user._id) {
            // console.log("sasas", item.userId, user._id);

            return (
              <div className="flex items-center border-2 gap-3" key={index}>
                <div>
                  <img src={user?.profilePic} alt="profile" />
                </div>
                <h1 className="w-1/4">{user.Username}</h1>
                <h1 className="w-1/4">{user.phoneNumber}</h1>

                <div className="flex w-1/4">
                  <button className="w-full bg-red-500 hover:bg-red-700 w-2/4 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 w-2/4 text-white font-bold py-2 px-4 rounded"
                    onClick={() => confirmReq(user._id ? user._id : "")}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            );
          }
        });
      })}
    </div>
  );
}
